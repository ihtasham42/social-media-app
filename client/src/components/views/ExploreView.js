import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostBar from "../PostBar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";

const ExploreView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState(false);

  const fetchPosts = async () => {
    if (!loading || !end) {
      console.log("a");
      setLoading(true);
      const newPage = page + 1;
      setPage(newPage);
      const query = { page: newPage };
      const data = await getPosts(isLoggedIn(), query);
      if (data.length < 3) {
        setEnd(true);
      }
      setLoading(false);
      if (!data.error) {
        setPosts([...posts, ...data]);
      }
    }
  };

  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight =
      e.target.documentElement.scrollTop + window.innerHeight;

    if (currentHeight + 50 >= scrollHeight) {
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const removePost = (removedPost) => {
    setPosts(posts.filter((post) => post._id !== removedPost._id));
  };

  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBar />
            {posts.map((post, i) => (
              <PostCard
                preview="primary"
                key={post._id}
                post={post}
                removePost={removePost}
              />
            ))}

            {loading && <Loading />}
            {end && (
              <Box py={3} textAlign="center">
                <Typography variant="h5" color="text.secondary">
                  All posts have been viewed
                </Typography>
              </Box>
            )}
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;

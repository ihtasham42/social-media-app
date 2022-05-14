import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/posts";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostBar from "../PostBar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";

const ExploreView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const data = await getPosts();
    setLoading(false);
    if (data) {
      setPosts(data);
      console.log(data);
    } else {
      setServerError(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBar />
            {posts.map((post, i) => (
              <PostCard preview="primary" key={i} post={post} />
            ))}
            {serverError && <Typography>Failed to load!</Typography>}
            {loading && <Loading />}
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;

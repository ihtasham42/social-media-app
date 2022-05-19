import { Button, Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import CreatePost from "./CreatePost";
import Loading from "./Loading";
import PostCard from "./PostCard";
import SortBySelect from "./SortBySelect";
import HorizontalStack from "./util/HorizontalStack";

const PostBrowser = ({ author, search, createPost }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState(false);
  const [sortBy, setSortBy] = useState("-createdAt");
  const user = isLoggedIn();

  const fetchPosts = async () => {
    setLoading(true);
    const newPage = page + 1;
    setPage(newPage);

    let query = {
      page: newPage,
      sortBy,
    };

    if (author) query.author = author;

    const data = await getPosts(user && user.token, query);
    if (data.length === 0) {
      setEnd(true);
    }
    setLoading(false);
    if (!data.error) {
      setPosts([...posts, ...data]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [sortBy]);

  const handleSortBy = (e) => {
    const newSortBy = e.target.value;

    setPosts([]);
    setPage(0);
    setEnd(false);
    setSortBy(newSortBy);
  };

  const removePost = (removedPost) => {
    setPosts(posts.filter((post) => post._id !== removedPost._id));
  };

  return (
    <>
      <Stack spacing={2}>
        <Card>
          <HorizontalStack justifyContent="space-between">
            {createPost && <CreatePost />}
            <SortBySelect onSortBy={handleSortBy} sortBy={sortBy} />
          </HorizontalStack>
        </Card>

        {posts.map((post, i) => (
          <PostCard
            preview="primary"
            key={post._id}
            post={post}
            removePost={removePost}
          />
        ))}

        {loading && <Loading />}
        {end ? (
          <Box py={5} textAlign="center">
            <Typography variant="h5" color="text.secondary">
              All posts have been viewed
            </Typography>
          </Box>
        ) : (
          !loading && (
            <Box pt={4} pb={6} display="flex" justifyContent="center">
              <Button onClick={fetchPosts} variant="contained">
                Load more
              </Button>
            </Box>
          )
        )}
      </Stack>
    </>
  );
};

export default PostBrowser;

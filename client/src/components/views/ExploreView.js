import { Container, Stack } from "@mui/material";
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

  const fetchPosts = async () => {
    const data = await getPosts();

    setPosts(data);
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
            <Loading />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;

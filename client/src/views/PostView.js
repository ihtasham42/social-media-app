import { Card, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Comment from "../components/Comment";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const PostView = () => {
  const comments = [1, [1, [1, [1, [1]]]], 3];

  return (
    <Container>
      <Navbar />
      <Typography sx={{ mb: 2 }}>
        <Link href="/"> Go back to posts</Link>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <PostCard />
            {comments &&
              comments.map((comment, i) => (
                <Card sx={{ padding: 0 }}>
                  <Comment replies={comment} />
                </Card>
              ))}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostView;

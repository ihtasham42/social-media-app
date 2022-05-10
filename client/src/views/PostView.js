import { Card, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Comment from "../components/Comment";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const PostView = () => {
  const comments = [
    {
      content: "some text",
      children: [
        {
          content: "some text",
          children: [],
        },
        {
          content: "some text",
          children: [
            {
              content: "some text",
              children: [],
            },
            {
              content: "some text",
              children: [],
            },
          ],
        },
      ],
    },
  ];

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
                <Comment comment={comment} key={i} depth={0} />
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

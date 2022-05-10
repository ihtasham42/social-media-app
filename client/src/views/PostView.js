import { useTheme } from "@emotion/react";
import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Comment from "../components/Comment";
import Editor from "../components/Editor";
import GoBack from "../components/GoBack";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const PostView = () => {
  const theme = useTheme();

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
              children: [
                {
                  content: "some text",
                  children: [
                    {
                      content: "some text",
                      children: [
                        {
                          content: "some text",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <Container>
      <Navbar />
      <GoBack />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <PostCard />
            <Editor rows={5} label="What are your thoughts on this post?" />
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

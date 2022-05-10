import { useTheme } from "@emotion/react";
import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
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

            {comments.length > 0 ? (
              comments.map((comment, i) => (
                <Comment comment={comment} key={i} depth={0} />
              ))
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                textAlign="center"
                paddingY={3}
              >
                <Box>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    No comments yet...
                  </Typography>
                  <Typography variant="body" color="text.secondary">
                    Be the first one to comment
                  </Typography>
                </Box>
              </Box>
            )}
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

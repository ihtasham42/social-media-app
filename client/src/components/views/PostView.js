import { useTheme } from "@emotion/react";
import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CommentEditor from "../CommentEditor";
import Comment from "../Comment";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";

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
        {
          content: "some text",
          children: [],
        },
      ],
    },
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
      ],
    },
  ];

  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostCard />
            <CommentEditor label="What are your thoughts on this post?" />
            {comments.length > 0 ? (
              <>
                {comments.map((comment, i) => (
                  <Comment comment={comment} key={i} depth={0} />
                ))}
                <Loading />
              </>
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
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default PostView;

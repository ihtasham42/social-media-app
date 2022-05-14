import { useTheme } from "@emotion/react";
import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CommentEditor from "../CommentEditor";
import Comment from "../Comment";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts";
import FetchFail from "../FetchFail";

const PostView = () => {
  const theme = useTheme();
  const params = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

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

  const fetchPost = async () => {
    const data = await getPost(params);
    if (data.error) {
      setError(true);
    } else {
      setPost(data);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          <Stack spacing={2}>
            {post ? (
              <Box>
                <PostCard post={post} />
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
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        gutterBottom
                      >
                        No comments yet...
                      </Typography>
                      <Typography variant="body" color="text.secondary">
                        Be the first one to comment!
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            ) : error ? (
              <FetchFail />
            ) : (
              <Loading />
            )}
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default PostView;

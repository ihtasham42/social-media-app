import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Loading from "./Loading";
import { getComments } from "../api/posts";
import { useParams } from "react-router-dom";
import CommentEditor from "./CommentEditor";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [rerender, setRerender] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();

  const fetchComments = async () => {
    const data = await getComments(params);
    if (data.error) {
      setError("Failed to fetch comments");
    } else {
      setComments(data);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const addComment = (comment) => {
    setComments([comment, ...comments]);
  };

  return comments ? (
    <Stack spacing={2}>
      <CommentEditor
        addComment={addComment}
        label="What are your thoughts on this post?"
      />

      {comments.length > 0 ? (
        <>
          {comments.map((comment, i) => (
            <Comment
              addComment={addComment}
              comment={comment}
              key={comment._id}
              depth={0}
            />
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
              Be the first one to comment!
            </Typography>
          </Box>
        </Box>
      )}
    </Stack>
  ) : (
    <Loading label="Loading comments" />
  );
};

export default Comments;

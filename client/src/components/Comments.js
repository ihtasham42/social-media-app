import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Loading from "./Loading";
import { getComments } from "../api/posts";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState("");
  const params = useParams();

  const fetchComments = async () => {
    const data = await getComments(params);
    if (data.error) {
      setError("Failed to fetch comments");
    } else {
      console.log(data);
      setComments(data);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return comments ? (
    comments.length > 0 ? (
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
            Be the first one to comment!
          </Typography>
        </Box>
      </Box>
    )
  ) : (
    <Loading />
  );
};

export default Comments;

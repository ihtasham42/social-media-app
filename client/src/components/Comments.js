import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Comment from "./Comment";
import Loading from "./Loading";

const Comments = () => {
  const [comments, setComments] = useState([]);

  return comments.length > 0 ? (
    <>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} depth={0} />
      ))}
      <Loading />
    </>
  ) : (
    <Box display="flex" justifyContent="center" textAlign="center" paddingY={3}>
      <Box>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          No comments yet...
        </Typography>
        <Typography variant="body" color="text.secondary">
          Be the first one to comment!
        </Typography>
      </Box>
    </Box>
  );
};

export default Comments;

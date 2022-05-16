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
  const [loading, setLoading] = useState(false);
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

  const findComment = (id) => {
    const recurse = (comment, id) => {
      if (comment._id === id) {
        return comment;
      } else {
        for (let i = 0; i < comment.children.length; i++) {
          const commentToSearch = comment.children[i];
          return recurse(commentToSearch, id);
        }
      }
    };

    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      const returnedComment = recurse(comment, id);
      if (returnedComment) {
        return returnedComment;
      }
    }
  };

  const removeComment = (removedComment) => {
    if (removedComment.parent) {
      const parentComment = findComment(removedComment.parent);
      parentComment.children = parentComment.children.filter(
        (comment) => comment._id !== removedComment._id
      );
      console.log(removedComment._id);
      console.log(parentComment);
      setRerender(!rerender);
    } else {
      setComments(
        comments.filter((comment) => comment._id !== removedComment._id)
      );
    }
  };

  const editComment = () => {
    setRerender(!rerender);
  };

  const addComment = (comment) => {
    if (comment.parent) {
      const parentComment = findComment(comment.parent);
      parentComment.children = [comment, ...parentComment.children];
      setRerender(!rerender);
    } else {
      setComments([comment, ...comments]);
    }
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
              removeComment={removeComment}
              editComment={editComment}
              comment={comment}
              key={comment._id}
              depth={0}
            />
          ))}
          {loading && <Loading />}
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

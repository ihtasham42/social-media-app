import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";
import CommentEditor from "./CommentEditor";
import ContentDetails from "./ContentDetails";
import HorizontalStack from "./util/HorizontalStack";
import { deleteComment, updateComment } from "../api/posts";
import ContentUpdateEditor from "./ContentUpdateEditor";

const Comment = (props) => {
  const theme = useTheme();
  const { depth, addComment, removeComment, editComment } = props;
  const commentData = props.comment;
  const [minimised, setMinimised] = useState(depth % 4 === 3);
  const [replying, setReplying] = useState(false);
  const [editing, setEditing] = useState(false);
  const [comment, setComment] = useState(commentData);
  const user = isLoggedIn();
  const isAuthor = user && user.userId === comment.commenter._id;
  const navigate = useNavigate();

  const handleSetReplying = () => {
    if (isLoggedIn()) {
      setReplying(!replying);
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.content.value;

    await updateComment(comment._id, user, { content });

    const newCommentData = { ...comment, content, edited: true };

    setComment(newCommentData);

    editComment(newCommentData);

    setEditing(false);
  };

  const handleDelete = async () => {
    await deleteComment(comment._id, user);
    removeComment(comment);
  };

  let style = {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 1.5,
    mb: theme.spacing(2),
    padding: theme.spacing(0),
  };

  if (depth % 2 === 1) {
    style.backgroundColor = "white";
  }

  return (
    <Box sx={style}>
      <Box
        sx={{
          pl: theme.spacing(2),
          pt: theme.spacing(1),
          pb: theme.spacing(1),
          pr: 1,
        }}
      >
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <ContentDetails
              username={comment.commenter.username}
              createdAt={comment.createdAt}
              edited={comment.edited}
            />

            <IconButton
              color="primary"
              onClick={() => setMinimised(!minimised)}
            >
              {minimised ? (
                <AiOutlinePlus size={15} />
              ) : (
                <AiOutlineLine size={15} />
              )}
            </IconButton>
          </HorizontalStack>
          {!minimised && (
            <HorizontalStack spacing={0}>
              <Button variant="text" size="small" onClick={handleSetReplying}>
                {!replying ? <div>Reply</div> : <div>Cancel</div>}
              </Button>
              {isAuthor && (
                <HorizontalStack spacing={0}>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => setEditing(!editing)}
                  >
                    {editing ? <>Cancel</> : <>Edit</>}
                  </Button>
                  <Button variant="text" size="small" onClick={handleDelete}>
                    Delete
                  </Button>
                </HorizontalStack>
              )}
            </HorizontalStack>
          )}
        </HorizontalStack>
        {!minimised && (
          <Box sx={{ mt: 1 }}>
            {!editing ? (
              <Typography>{comment.content}</Typography>
            ) : (
              <ContentUpdateEditor
                handleSubmit={handleSubmit}
                originalContent={comment.content}
              />
            )}

            {replying && !minimised && (
              <Box sx={{ mt: 2 }}>
                <CommentEditor
                  comment={comment}
                  addComment={addComment}
                  setReplying={setReplying}
                  label="What are your thoughts on this comment?"
                />
              </Box>
            )}
            {comment.children && (
              <Box sx={{ pt: theme.spacing(2) }}>
                {comment.children.map((reply, i) => (
                  <Comment
                    key={reply._id}
                    comment={reply}
                    depth={depth + 1}
                    addComment={addComment}
                    removeComment={removeComment}
                    editComment={editComment}
                  />
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Comment;

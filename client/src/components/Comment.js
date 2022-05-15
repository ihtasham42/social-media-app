import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";
import CommentEditor from "./CommentEditor";
import ContentDetails from "./ContentDetails";
import HorizontalStack from "./util/HorizontalStack";

const Comment = (props) => {
  const theme = useTheme();
  const { comment, depth, addComment } = props;
  const [minimised, setMinimised] = useState(depth % 4 === 3);
  const [replying, setReplying] = useState(false);
  const navigate = useNavigate();

  const handleSetReplying = () => {
    if (isLoggedIn()) {
      setReplying(!replying);
    } else {
      navigate("/login");
    }
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
            <Button variant="text" size="small" onClick={handleSetReplying}>
              {!replying ? <div>Reply</div> : <div>Cancel</div>}
            </Button>
          )}
        </HorizontalStack>
        {!minimised && (
          <Box sx={{ mt: 1 }}>
            <Typography>{comment.content}</Typography>
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
                    key={i}
                    comment={reply}
                    depth={depth + 1}
                    addComment={addComment}
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

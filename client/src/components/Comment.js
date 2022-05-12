import {
  Button,
  Card,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import ContentDetails from "./ContentDetails";
import Editor from "./Editor";
import HorizontalStack from "./util/HorizontalStack";

const Comment = (props) => {
  const theme = useTheme();
  const { comment, depth } = props;
  const [minimised, setMinimised] = useState(false);
  const [editing, setEditing] = useState(false);

  let style = {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 1,
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
            <Box mt={1}>
              <ContentDetails />
            </Box>

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
            <Button
              variant="text"
              size="small"
              onClick={() => setEditing(!editing)}
            >
              {!editing ? <div>Reply</div> : <div>Cancel</div>}
            </Button>
          )}
        </HorizontalStack>
        {!minimised && (
          <Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat elit ipsum, sit amet facilisis nulla auctor blandit. Cras
              ipsum diam, ultrices eu nisl quis, scelerisque aliquet elit.
              Aliquam ligula est, blandit a sem eget, tempor scelerisque urna.
              Cras vitae ex pharetra, faucibus arcu sed, commodo odio. Vivamus
              elementum iaculis bibendum. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </Typography>
            {editing && !minimised && (
              <Box sx={{ mt: 2 }}>
                <Editor
                  rows={5}
                  label="What are your thoughts on this comment?"
                />
              </Box>
            )}
            {comment.children && (
              <Box sx={{ pt: theme.spacing(2) }}>
                {comment.children.map((reply, i) => (
                  <Comment key={i} comment={reply} depth={depth + 1} />
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

import { Avatar, Card, Link, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import ContentDetails from "./ContentDetails";

import LikeBox from "./LikeBox";
import Editor from "./Editor";
import PostContentBox from "./PostContentBox";
import HorizontalStack from "./util/HorizontalStack";

const PostCard = (props) => {
  const { preview, post } = props;

  const theme = useTheme();
  const [editing, setEditing] = useState(false);

  return (
    <Card sx={{ padding: 0 }}>
      <HorizontalStack spacing={0} alignItems="initial">
        <Box
          padding={theme.spacing(1)}
          sx={{ backgroundColor: "grey.100", width: "50px" }}
        >
          <LikeBox likeCount={post.likeCount} />
        </Box>
        <PostContentBox clickable={preview}>
          <ContentDetails post={post} />
          <Typography variant="h5" gutterBottom sx={{ overflow: "hidden" }}>
            {post.title}
          </Typography>

          {preview !== "secondary" &&
            (editing ? (
              <Editor />
            ) : (
              <Typography gutterBottom>{post.content}</Typography>
            ))}

          <HorizontalStack>
            <AiFillMessage />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {post.commentCount}
            </Typography>
          </HorizontalStack>
        </PostContentBox>
      </HorizontalStack>
    </Card>
  );
};

export default PostCard;

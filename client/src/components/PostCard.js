import { Card, Typography } from "@mui/material";
import React from "react";
import ClickableCard from "./util/ClickableCard";

const PostCard = () => {
  return (
    <ClickableCard>
      <Typography variant="h4" gutterBottom>
        Post Title
      </Typography>
      <Typography>Post Content</Typography>
    </ClickableCard>
  );
};

export default PostCard;

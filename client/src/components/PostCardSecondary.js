import { Card, Typography } from "@mui/material";
import React from "react";
import ClickableCard from "./util/ClickableCard";

const PostCardSecondary = () => {
  return (
    <ClickableCard>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        By Ihtasham - 04/02/2022
      </Typography>
      <Typography variant="h5" gutterBottom>
        Post Title
      </Typography>
      <Typography>Post Content</Typography>
    </ClickableCard>
  );
};

export default PostCardSecondary;

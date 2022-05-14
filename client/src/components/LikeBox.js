import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const LikeBox = ({ likeCount }) => {
  return (
    <Stack alignItems="center">
      <IconButton sx={{ padding: 0.5 }}>
        <AiOutlineArrowUp />
      </IconButton>
      <Typography>{likeCount}</Typography>
    </Stack>
  );
};

export default LikeBox;

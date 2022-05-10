import { useTheme } from "@emotion/react";
import { Box, Card, CardActionArea } from "@mui/material";
import React from "react";

const PostContentBox = (props) => {
  const { clickable } = props;
  const theme = useTheme();

  return (
    <>
      {clickable ? (
        <CardActionArea sx={{ padding: theme.spacing(2) }} href="/posts/1">
          {props.children}
        </CardActionArea>
      ) : (
        <Box sx={{ padding: theme.spacing(2) }}>{props.children}</Box>
      )}
    </>
  );
};

export default PostContentBox;

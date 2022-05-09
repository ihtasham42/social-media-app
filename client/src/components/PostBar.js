import { Card, Select, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";

const PostBar = () => {
  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <TextField
          sx={{ flexGrow: 1, maxWidth: 300 }}
          size="small"
          label="Create a post..."
        />
        <HorizontalStack spacing={1}>
          <Typography>Sort by:</Typography>
          <Select size="small" sx={{ minWidth: 150 }}></Select>
        </HorizontalStack>
      </Stack>
    </Card>
  );
};

export default PostBar;

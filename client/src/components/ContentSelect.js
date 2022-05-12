import { MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import HorizontalStack from "./util/HorizontalStack";

const ContentSelect = () => {
  const [content, setContent] = useState("post");

  return (
    <HorizontalStack spacing={1}>
      <Typography>Content:</Typography>
      <Select
        size="small"
        value={content}
        sx={{ minWidth: 150 }}
        onChange={(e) => setContent(e.target.value)}
      >
        <MenuItem value={"post"}>Posts</MenuItem>
        <MenuItem value={"comment"}>Comments</MenuItem>
      </Select>
    </HorizontalStack>
  );
};

export default ContentSelect;

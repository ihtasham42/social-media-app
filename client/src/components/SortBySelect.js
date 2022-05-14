import { MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import HorizontalStack from "./util/HorizontalStack";

const SortBySelect = () => {
  const [sortBy, setSortBy] = useState("-createdAt");

  return (
    <HorizontalStack spacing={1}>
      <Typography>Sort by:</Typography>
      <Select
        size="small"
        value={sortBy}
        sx={{ minWidth: 150 }}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <MenuItem value={"-createdAt"}>Latest</MenuItem>
        <MenuItem value={"likeCount"}>Likes</MenuItem>
        <MenuItem value={"commentCount"}>Comments</MenuItem>
        <MenuItem value={"createdAt"}>Oldest</MenuItem>
      </Select>
    </HorizontalStack>
  );
};

export default SortBySelect;

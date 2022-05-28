import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiNoEntry } from "react-icons/bi";
import HorizontalStack from "./util/HorizontalStack";

const SortBySelect = ({ onSortBy, sortBy }) => {
  return (
    <HorizontalStack spacing={1}>
      <Typography color="text.secondary" variant="subtitle2">
        Sort by:
      </Typography>
      <Select
        size="small"
        value={sortBy}
        sx={{ minWidth: 150 }}
        onChange={onSortBy}
      >
        <MenuItem value={"-createdAt"}>Latest</MenuItem>
        <MenuItem value={"-likeCount"}>Likes</MenuItem>
        <MenuItem value={"-commentCount"}>Comments</MenuItem>
        <MenuItem value={"createdAt"}>Oldest</MenuItem>
      </Select>
    </HorizontalStack>
  );
};

export default SortBySelect;

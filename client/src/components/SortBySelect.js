import { MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import HorizontalStack from "./util/HorizontalStack";

const SortBySelect = () => {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <HorizontalStack spacing={1}>
      <Typography>Sort by:</Typography>
      <Select
        size="small"
        value={sortBy}
        sx={{ minWidth: 150 }}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <MenuItem value={"latest"}>Latest</MenuItem>
        <MenuItem value={"likes"}>Likes</MenuItem>
        <MenuItem value={"oldest"}>Oldest</MenuItem>
      </Select>
    </HorizontalStack>
  );
};

export default SortBySelect;

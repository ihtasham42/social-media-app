import {
  Card,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HorizontalStack from "./util/HorizontalStack";

const PostBar = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("latest");

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
          onClick={() => navigate("/posts/create")}
        />
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
      </Stack>
    </Card>
  );
};

export default PostBar;

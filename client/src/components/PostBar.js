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
import SortBySelect from "./SortBySelect";

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
        <SortBySelect />
      </Stack>
    </Card>
  );
};

export default PostBar;

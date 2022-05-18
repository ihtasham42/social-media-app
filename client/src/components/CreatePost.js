import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <TextField
      sx={{ flexGrow: 1, maxWidth: 300 }}
      size="small"
      label="Create a post..."
      onClick={() => navigate("/posts/create")}
    />
  );
};

export default CreatePost;

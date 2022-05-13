import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";
import ErrorAlert from "../ErrorAlert";
import { isLoggedIn } from "../helpers/authHelper";

const PostEditor = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await createPost(formData, isLoggedIn());
    if (data && data.error) {
      setServerError(data.error);
    } else {
      navigate("/posts/" + data._id);
    }
  };

  return (
    <Card>
      <Stack spacing={2}>
        <Typography variant="h5">What would you like to post today?</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            required
            name="title"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Content"
            multiline
            rows={10}
            name="content"
            margin="normal"
            onChange={handleChange}
          />
          <ErrorAlert error={serverError} />
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{
              mt: 2,
            }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default PostEditor;

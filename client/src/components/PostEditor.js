import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const PostEditor = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

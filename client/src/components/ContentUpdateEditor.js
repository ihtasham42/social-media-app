import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const ContentUpdateEditor = ({ handleSubmit, originalContent }) => {
  const [content, setContent] = useState(originalContent);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack>
        <TextField
          value={content}
          fullWidth
          margin="normal"
          name="content"
          onChange={handleChange}
        />
        <Button type="submit" variant="outlined">
          Update
        </Button>
      </Stack>
    </Box>
  );
};

export default ContentUpdateEditor;

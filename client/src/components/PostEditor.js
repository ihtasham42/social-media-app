import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PostEditor = () => {
  return (
    <Card>
      <Stack spacing={2}>
        <Typography variant="h5">What would you like to post today?</Typography>
        <Box component="form">
          <TextField
            fullWidth
            label="Title"
            required
            name="title"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Content"
            multiline
            rows={10}
            name="content"
            margin="normal"
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

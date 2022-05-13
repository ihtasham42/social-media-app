import { Button, Card, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CommentEditor = ({ label }) => {
  return (
    <Card>
      <Stack spacing={2}>
        <Box component="form">
          <TextField
            multiline
            fullWidth
            label={label}
            rows={5}
            required
            name="content"
            sx={{
              backgroundColor: "white",
            }}
          />
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "white",
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

export default CommentEditor;

import { Button, Card, Stack, TextField } from "@mui/material";
import React from "react";

const Editor = (props) => {
  const { rows, label } = props;

  return (
    <Card sx={{}}>
      <Stack spacing={2}>
        <TextField
          multiline
          fullWidth
          label={label}
          rows={rows}
          sx={{
            backgroundColor: "white",
          }}
        />
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "white",
          }}
        >
          Submit
        </Button>
      </Stack>
    </Card>
  );
};

export default Editor;

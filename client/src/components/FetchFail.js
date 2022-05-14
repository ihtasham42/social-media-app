import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FetchFail = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Typography color="text.secondary" variant="h6" sx={{ mt: 2 }}>
        Something went wrong!
      </Typography>
    </Box>
  );
};

export default FetchFail;

import { Alert } from "@mui/material";
import React from "react";

const ErrorAlert = ({ error }) => {
  return (
    <Alert sx={{ mb: 1, mt: 2 }} variant="filled" severity="error">
      {error}
    </Alert>
  );
};

export default ErrorAlert;

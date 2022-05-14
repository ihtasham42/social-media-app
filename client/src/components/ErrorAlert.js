import { Alert } from "@mui/material";
import React from "react";

const ErrorAlert = ({ error }) => {
  return (
    error && (
      <Alert variant="filled" severity="error">
        {error}
      </Alert>
    )
  );
};

export default ErrorAlert;

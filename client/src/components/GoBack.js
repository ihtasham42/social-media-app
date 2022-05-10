import { Link, Typography } from "@mui/material";
import React from "react";

const GoBack = () => {
  return (
    <Typography sx={{ mb: 2 }}>
      <Link href="/"> Go back to posts</Link>
    </Typography>
  );
};

export default GoBack;

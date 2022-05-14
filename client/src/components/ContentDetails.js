import { Avatar, Typography, Link } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";

const ContentDetails = ({ username, createdAt }) => {
  return (
    <HorizontalStack sx={{ mb: 1 }}>
      <Avatar sx={{ width: 20, height: 20 }} />
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        <Link
          color="inherit"
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
          }}
          href="/users/1"
        >
          By {username}
        </Link>{" "}
        - {createdAt}
      </Typography>
    </HorizontalStack>
  );
};

export default ContentDetails;

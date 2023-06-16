import { Card, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          Don't forget to star the{" "}
          <a
            href="https://github.com/ihtasham42/social-media-app"
            target="_blank"
          >
            Repo
          </a>
          ! ⭐
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;

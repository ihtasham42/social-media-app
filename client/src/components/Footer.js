import { Card, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5">Footer </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <Link color="inherit" underline="none" href="/">
              Contact
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Footer;

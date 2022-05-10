import { Card, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5"> </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            © 2022 PostIt
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Footer;

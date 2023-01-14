import {createTheme, Grid, Stack } from "@mui/material";
import React from "react";

const GridLayout = (props) => {
  const { left, right } = props;

  const theme = createTheme({
    components: {
      // Name of the component
      MuiGrid: {
        styleOverrides: {
          // Name of the slot
          root: {
            padding: "18px"
          },
        },
      },
    },
  });
  

  return (
    <Grid theme={theme} container spacing={2}>
      <Grid item xs={12} md={8}>
        {left}
      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
        {right}
      </Grid>
    </Grid>
  );
};

export default GridLayout;

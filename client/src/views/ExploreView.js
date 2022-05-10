import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import PostBar from "../components/PostBar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <PostBar />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExploreView;

import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PostBar from "../components/PostBar";
import PostCard from "../components/PostCard";
import PostCardSecondary from "../components/PostCardSecondary";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <PostBar />
            <PostCard />
            <PostCard />
            <PostCard />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <PostCardSecondary />
            <PostCardSecondary />
            <PostCardSecondary />
            <Footer />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExploreView;

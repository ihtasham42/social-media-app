import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import GoBack from "../components/GoBack";
import Navbar from "../components/Navbar";
import PostBar from "../components/PostBar";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";

const ProfileView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />
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
          <Profile />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileView;

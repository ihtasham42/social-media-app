import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import GoBack from "../components/GoBack";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";
import PostBar from "../components/PostBar";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";

const ProfileView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          <>
            <PostCard preview="primary" />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
          </>
        }
        right={<Profile />}
      />
    </Container>
  );
};

export default ProfileView;

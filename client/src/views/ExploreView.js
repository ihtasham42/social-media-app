import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";
import PostBar from "../components/PostBar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <>
            <PostBar />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
          </>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;

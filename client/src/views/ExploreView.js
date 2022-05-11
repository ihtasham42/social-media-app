import {
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GridLayout from "../components/GridLayout";
import Loading from "../components/Loading";
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
          <Stack spacing={2}>
            <PostBar />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
            <Loading />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;

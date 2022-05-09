import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const PostView = () => {
  return (
    <Container>
      <Navbar />
      <Typography sx={{ mb: 2 }}>
        <Link href="/"> Go back to posts</Link>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <PostCard />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostView;

import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Editor from "../components/Editor";
import GoBack from "../components/GoBack";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const CreatePostView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <Editor rows={10} label="What would you like to post?" />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreatePostView;

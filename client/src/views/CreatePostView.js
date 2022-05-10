import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Editor from "../components/Editor";
import GoBack from "../components/GoBack";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const CreatePostView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={<Editor rows={10} label="What would you like to post?" />}
        right={<Sidebar />}
      />
    </Container>
  );
};

export default CreatePostView;

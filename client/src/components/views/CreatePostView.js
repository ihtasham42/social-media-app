import { Container } from "@mui/material";
import React from "react";
import Editor from "../Editor";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

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

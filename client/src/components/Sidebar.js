import { Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import PostCard from "./PostCard";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <PostCard preview="secondary" />
      <PostCard preview="secondary" />
      <PostCard preview="secondary" />
      <Footer />
    </Stack>
  );
};

export default Sidebar;

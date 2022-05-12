import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ContentSelect from "../components/ContentSelect";
import Footer from "../components/Footer";
import GoBack from "../components/GoBack";
import GridLayout from "../components/GridLayout";
import MobileProfile from "../components/MobileProfile";
import Navbar from "../components/Navbar";
import PostBar from "../components/PostBar";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";
import SortBySelect from "../components/SortBySelect";
import HorizontalStack from "../components/util/HorizontalStack";

const ProfileView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />

      <GridLayout
        left={
          <>
            <MobileProfile />

            <Stack spacing={2}>
              <Card>
                <HorizontalStack spacing={2}>
                  <SortBySelect />
                  <ContentSelect />
                </HorizontalStack>
              </Card>
              <PostCard preview="primary" />
              <PostCard preview="primary" />
              <PostCard preview="primary" />
            </Stack>
          </>
        }
        right={
          <Stack spacing={2}>
            <Profile />
            <Footer />
          </Stack>
        }
      />
    </Container>
  );
};

export default ProfileView;

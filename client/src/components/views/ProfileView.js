import { Card, Container, Stack } from "@mui/material";
import React from "react";

import ContentSelect from "../ContentSelect";
import Footer from "../Footer";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import MobileProfile from "../MobileProfile";
import Navbar from "../Navbar";
import PostCard from "../PostCard";
import Profile from "../Profile";
import SortBySelect from "../SortBySelect";
import HorizontalStack from "../util/HorizontalStack";

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

import { Card, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/users";

import ContentSelect from "../ContentSelect";
import ErrorAlert from "../ErrorAlert";
import Footer from "../Footer";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import MobileProfile from "../MobileProfile";
import Navbar from "../Navbar";
import PostCard from "../PostCard";
import Profile from "../Profile";
import SortBySelect from "../SortBySelect";
import HorizontalStack from "../util/HorizontalStack";

const ProfileView = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const params = useParams();

  const fetchUser = async () => {
    setLoading(true);
    const data = await getUser(params);
    setLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      setUser(data);
    }
    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <Navbar />
      <GoBack />

      <GridLayout
        left={
          <>
            <MobileProfile user={user} />

            <Stack spacing={2}>
              <Card>
                <HorizontalStack spacing={2}>
                  <SortBySelect />
                  <ContentSelect />
                </HorizontalStack>
              </Card>

              {!loading ? (
                user &&
                (user.posts.data.length > 0 ? (
                  user.posts.data.map((post) => (
                    <PostCard preview="primary" post={post} key={post._id} />
                  ))
                ) : (
                  <Typography
                    color="text.secondary"
                    textAlign="center"
                    sx={{ mt: 2 }}
                    variant="h5"
                  >
                    This user has not posted yet
                  </Typography>
                ))
              ) : (
                <Loading label="Loading posts" />
              )}

              <ErrorAlert error={error} />
            </Stack>
          </>
        }
        right={
          <Stack spacing={2}>
            <Profile user={user} />
            <Footer />
          </Stack>
        }
      />
    </Container>
  );
};

export default ProfileView;

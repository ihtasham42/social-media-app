import { Card, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/users";

import ContentSelect from "../ContentSelect";
import ErrorAlert from "../ErrorAlert";
import FindUsers from "../FindUsers";
import Footer from "../Footer";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import MobileProfile from "../MobileProfile";
import Navbar from "../Navbar";
import PostBrowser from "../PostBrowser";
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

            {user && <PostBrowser author={user.user.username} />}
            {error && <ErrorAlert error={error} />}
          </>
        }
        right={
          <Stack spacing={2}>
            <Profile user={user} />
            <FindUsers />
            <Footer />
          </Stack>
        }
      />
    </Container>
  );
};

export default ProfileView;

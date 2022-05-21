import { Card, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
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
import ProfileTabs from "../ProfileTabs";
import SortBySelect from "../SortBySelect";
import HorizontalStack from "../util/HorizontalStack";

const ProfileView = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const params = useParams();

  const fetchUser = async () => {
    setLoading(true);
    const data = await getUser(params);
    setLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      setProfile(data);
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
            <MobileProfile user={profile} />
            <Stack spacing={2}>
              {profile ? (
                <>
                  <PostBrowser author={profile.user.username} />
                </>
              ) : (
                <Loading />
              )}
              {error && <ErrorAlert error={error} />}
            </Stack>
          </>
        }
        right={
          <Stack spacing={2}>
            <Profile profile={profile} />

            <FindUsers />
            <Footer />
          </Stack>
        }
      />
    </Container>
  );
};

export default ProfileView;

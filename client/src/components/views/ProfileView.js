import { Card, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, updateUser } from "../../api/users";
import { isLoggedIn } from "../../helpers/authHelper";

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
  const currentUser = isLoggedIn();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const biography = e.target.content.value;

    await updateUser(currentUser, { biography });

    setEditing(false);
    setProfile({ ...profile, user: { ...profile.user, biography } });
  };

  const handleEdit = async () => {
    setEditing(!editing);
  };

  const validate = async (content) => {
    let error = "";

    if (content.length > 250) {
      error = "Bio cannot be longer than 250 characters";
    }

    return error;
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
            <Profile
              profile={profile}
              handleEdit={handleEdit}
              handleSubmit={handleSubmit}
              validate={validate}
              editing={editing}
            />
            <FindUsers />
            <Footer />
          </Stack>
        }
      />
    </Container>
  );
};

export default ProfileView;

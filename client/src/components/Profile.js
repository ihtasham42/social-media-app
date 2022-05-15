import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Loading from "./Loading";

const Profile = ({ user }) => {
  return (
    <Card>
      {user ? (
        <Stack alignItems="center" spacing={1}>
          <Avatar sx={{ height: 150, width: 150, mb: 1 }} />
          <Typography variant="h5">{user.user.username}</Typography>
          <Typography color="text.secondary">
            Likes <b>{user.posts.likeCount}</b>
          </Typography>
          <Typography color="text.secondary">
            Posts <b>{user.posts.count}</b>
          </Typography>
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;

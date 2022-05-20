import { Avatar, Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";

const Profile = ({ user }) => {
  return (
    <Card>
      {user ? (
        <Stack alignItems="center" spacing={1}>
          <Box my={2}>
            <UserAvatar
              width={150}
              height={150}
              username={user.user.username}
            />
          </Box>

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

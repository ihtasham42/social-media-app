import { Avatar, Card, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Profile = ({ user }) => {
  return (
    <Card>
      {user ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar
              width={150}
              height={150}
              username={user.user.username}
            />
          </Box>

          <Typography variant="h5">{user.user.username}</Typography>

          <Typography textAlign="center">
            <b>Bio: </b>Hi, I'm the developer of PostIt. Enjoy your stay!
          </Typography>

          <HorizontalStack>
            <Typography color="text.secondary">
              Likes <b>{user.posts.likeCount}</b>
            </Typography>
            <Typography color="text.secondary">
              Posts <b>{user.posts.count}</b>
            </Typography>
          </HorizontalStack>
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;

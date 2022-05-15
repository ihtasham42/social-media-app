import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";

const MobileProfile = ({ user }) => {
  return (
    <Card sx={{ display: { sm: "block", md: "none" }, mb: 2 }}>
      {user ? (
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <Avatar />
            <Typography variant="h6">{user.user.username}'s Profile</Typography>
          </HorizontalStack>

          <HorizontalStack spacing={3}>
            <Stack alignItems="center">
              <Typography>Likes</Typography>
              <Typography color="text.secondary">
                <b>{user.posts.likeCount}</b>
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography>Posts</Typography>
              <Typography color="text.secondary">
                <b>{user.posts.count}</b>
              </Typography>
            </Stack>
          </HorizontalStack>
        </HorizontalStack>
      ) : (
        <>Loading...</>
      )}
    </Card>
  );
};

export default MobileProfile;

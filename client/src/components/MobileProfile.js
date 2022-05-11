import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";

const MobileProfile = () => {
  return (
    <Card sx={{ display: { sm: "block", md: "none" }, mb: 2 }}>
      <HorizontalStack justifyContent="space-between">
        <HorizontalStack>
          <Avatar />
          <Typography variant="h6">Ihtasham's Profile</Typography>
        </HorizontalStack>

        <HorizontalStack spacing={3}>
          <Stack alignItems="center">
            <Typography>Likes</Typography>
            <Typography color="text.secondary">
              <b>436</b>
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Typography>Posts</Typography>
            <Typography color="text.secondary">
              <b>17</b>
            </Typography>
          </Stack>
        </HorizontalStack>
      </HorizontalStack>
    </Card>
  );
};

export default MobileProfile;

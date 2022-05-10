import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Card>
      <Stack alignItems="center" spacing={1}>
        <Avatar sx={{ height: 150, width: 150, mb: 2 }} />
        <Typography variant="h5">Ihtasham</Typography>
        <Typography color="text.secondary">
          Total Likes: <b>1500</b>
        </Typography>
      </Stack>
    </Card>
  );
};

export default Profile;

import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";

const Profile = () => {
  return (
    <Card>
      <Stack alignItems="center" spacing={1}>
        <Avatar sx={{ height: 150, width: 150, mb: 2 }} />
        <Typography variant="h5">Ihtasham</Typography>
        <Typography color="text.secondary">
          Likes <b>1500</b>
        </Typography>
        <Typography color="text.secondary">
          Posts <b>17</b>
        </Typography>
      </Stack>
    </Card>
  );
};

export default Profile;

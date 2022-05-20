import { Card, Tab, Tabs } from "@mui/material";
import React from "react";

const ProfileTabs = () => {
  return (
    <Card sx={{ padding: 0 }}>
      <Tabs variant="fullWidth" value={"posts"}>
        <Tab value="posts" label="Posts" />
        <Tab value="comments" label="Comments" />
        <Tab value="liked" label="Liked" />
      </Tabs>
    </Card>
  );
};

export default ProfileTabs;

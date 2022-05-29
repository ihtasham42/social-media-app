import { Card, Tab, Tabs } from "@mui/material";
import React from "react";

const ProfileTabs = () => {
  return (
    <Card sx={{ padding: 0 }}>
      <Tabs value="posts" variant="scrollable">
        <Tab label="Posts" value="posts" />
        <Tab label="Liked" />
      </Tabs>
    </Card>
  );
};

export default ProfileTabs;

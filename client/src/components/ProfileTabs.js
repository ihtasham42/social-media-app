import { Card, Tab, Tabs } from "@mui/material";
import React from "react";

const ProfileTabs = (props) => {
  const handleChange = (e, newValue) => {
    props.setTab(newValue);
  };

  return (
    <Card sx={{ padding: 0 }}>
      <Tabs value={props.tab} onChange={handleChange} variant="scrollable">
        <Tab label="Posts" value="posts" />
        <Tab label="Liked" value="liked" />
        <Tab label="Comments" value="comments" />
        <Tab label="Followers" value="followers" />
        <Tab label="Following" value="following" />
      </Tabs>
    </Card>
  );
};

export default ProfileTabs;

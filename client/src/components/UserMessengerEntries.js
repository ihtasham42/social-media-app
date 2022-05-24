import { Box, Divider, List, Typography } from "@mui/material";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import UserMessengerEntry from "./UserMessengerEntry";
import HorizontalStack from "./util/HorizontalStack";

const UserMessengerEntries = (props) => {
  return (
    <>
      <HorizontalStack
        alignItems="center"
        spacing={2}
        sx={{ px: 2, height: "10%" }}
      >
        <AiFillMessage size={30} />
        <Typography>
          <b>Your Conversations</b>
        </Typography>
      </HorizontalStack>
      <Divider />
      <Box sx={{ height: "90%" }}>
        <Box sx={{ height: "100%" }}>
          <List sx={{ overflow: "scroll", maxHeight: "100%", p: 0 }}>
            {Object.keys(props.conversations).map((username) => (
              <UserMessengerEntry
                username={username}
                key={username}
                setConservant={props.setConservant}
              />
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default UserMessengerEntries;

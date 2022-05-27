import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UserAvatar from "./UserAvatar";

const UserMessengerEntry = (props) => {
  const username = props.conversation.recipient.username;

  const handleClick = () => {
    props.setConservant(username);
  };

  return (
    <>
      <ListItem disablePadding alignItems="flex-start">
        <ListItemButton sx={{ paddingY: 2 }} onClick={handleClick}>
          <ListItemAvatar>
            <UserAvatar height={45} width={45} username={username} />
          </ListItemAvatar>
          <ListItemText primary={username} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default UserMessengerEntry;

import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UserAvatar from "./UserAvatar";

import moment from "moment";

const UserMessengerEntry = (props) => {
  const recipient = props.conversation.recipient;
  const username = recipient.username;
  const selected =
    props.conservant && props.conservant.username === recipient.username;

  const handleClick = () => {
    props.setConservant(recipient);
  };

  return (
    <>
      <MenuItem
        onClick={handleClick}
        sx={{ padding: 2 }}
        alignItems="flex-start"
        divider
        disableGutters
        selected={selected}
      >
        <ListItemAvatar>
          <UserAvatar height={45} width={45} username={username} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={moment(props.conversation.lastMessageAt).fromNow()}
          primaryTypographyProps={false && { fontWeight: 800 }}
          secondaryTypographyProps={false && { fontWeight: 800 }}
        />
      </MenuItem>
    </>
  );
};

export default UserMessengerEntry;

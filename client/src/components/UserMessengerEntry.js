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

  const handleClick = () => {
    props.setConservant(recipient);
  };

  return (
    <>
      <MenuItem
        disablePadding
        alignItems="flex-start"
        divider
        disableGutters
        selected={
          props.conservant && props.conservant.username === recipient.username
        }
      >
        <ListItemButton sx={{ paddingY: 2 }} onClick={handleClick}>
          <ListItemAvatar>
            <UserAvatar height={45} width={45} username={username} />
          </ListItemAvatar>
          <ListItemText
            primary={username}
            secondary={moment(props.conversation.lastMessageAt).fromNow()}
          />
        </ListItemButton>
      </MenuItem>
    </>
  );
};

export default UserMessengerEntry;

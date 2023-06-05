import {
  Avatar,
  AvatarGroup,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import { AiFillLike, AiOutlineMore } from "react-icons/ai";

const UserLikePreview = ({ preview }) => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<AiFillLike />}
      color="primary"
    >
      <HorizontalStack>
        <AvatarGroup>
          <Avatar
            src="https://robohash.org/a"
            sx={{ backgroundColor: "lightgray", width: 30, height: 30 }}
          />
          <Avatar
            src="https://robohash.org/b"
            sx={{ backgroundColor: "lightgray", width: 30, height: 30 }}
          />
          <Avatar
            src="https://robohash.org/c"
            sx={{ backgroundColor: "lightgray", width: 30, height: 30 }}
          />
        </AvatarGroup>
      </HorizontalStack>
    </Button>
  );
};

export default UserLikePreview;

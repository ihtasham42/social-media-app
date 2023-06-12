import { Avatar, AvatarGroup, Button, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import { AiFillLike } from "react-icons/ai";

const UserLikePreview = ({ preview, userLikePreview }) => {
  let userLikes;
  if (userLikePreview) {
    userLikes = userLikePreview.slice(0, 3);
  }

  return (
    userLikes && (
      <Button
        variant="outlined"
        size="small"
        startIcon={<AiFillLike />}
        color="primary"
      >
        <HorizontalStack>
          <AvatarGroup>
            {userLikes &&
              userLikes.map((userLike) => (
                <Avatar
                  src={`https://robohash.org/${userLike._id}`}
                  sx={{ backgroundColor: "lightgray", width: 30, height: 30 }}
                  key={userLike._id}
                />
              ))}
          </AvatarGroup>
        </HorizontalStack>
      </Button>
    )
  );
};

export default UserLikePreview;

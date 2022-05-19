import { Avatar, Typography, Link } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import Moment from "react-moment";

const ContentDetails = ({ username, createdAt, edited }) => {
  return (
    <HorizontalStack sx={{}}>
      <Avatar sx={{ width: 20, height: 20 }} />
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        <Link
          color="inherit"
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
          }}
          href={"/users/" + username}
        >
          By {username}
        </Link>{" "}
        - <Moment fromNow>{createdAt}</Moment> {edited && <>(Edited)</>}
      </Typography>
    </HorizontalStack>
  );
};

export default ContentDetails;

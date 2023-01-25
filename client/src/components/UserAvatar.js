import { Avatar } from "@mui/material";
import React from "react";
import { isAdmin } from "../helpers/authHelper";

const UserAvatar = (username ) => {
let src = "https://robohash.org/" + username;
if (isAdmin()) {
src = "https://robohash.org/" + username;
}
return (
<Avatar
   height={150}
   width={150}
   backgroundColor="lightgray"
   src={src}
 />
);
};

export default UserAvatar;

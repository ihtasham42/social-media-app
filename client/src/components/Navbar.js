import { Avatar, Icon, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import "react-icons/ai";
import { AiFillHome, AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mx: 2, my: 3 }}
    >
      <Typography variant="h4">Soshl</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton>
          <AiFillHome />
        </IconButton>
        <IconButton>
          <AiFillMessage />
        </IconButton>
        <IconButton>
          <Avatar sx={{ width: 25, height: 25 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;

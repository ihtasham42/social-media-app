import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
  Link,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "react-icons/ai";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import HorizontalStack from "./util/HorizontalStack";

const Navbar = () => {
  const [user, setUser] = useState();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mb: 3,
        py: 2,
        borderBottom: 1,
        borderColor: "divider",
      }}
      spacing={2}
    >
      <Typography variant="h4" mr={1}>
        <Link href="/" color="inherit" underline="none">
          PostIt
        </Link>
      </Typography>
      <TextField
        size="small"
        label="Search for posts..."
        sx={{ flexGrow: 1, maxWidth: 300 }}
      />
      <HorizontalStack>
        <IconButton href="/">
          <AiFillHome />
        </IconButton>
        <IconButton>
          <AiFillMessage />
        </IconButton>
        <IconButton href="/users/1">
          <Avatar sx={{ width: 25, height: 25 }} />
        </IconButton>
        <Button variant="text">Sign Up</Button>
        <Button variant="text">Login</Button>
      </HorizontalStack>
    </Stack>
  );
};

export default Navbar;

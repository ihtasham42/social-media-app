import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import "react-icons/ai";
import { AiFillHome, AiFillMessage } from "react-icons/ai";

const Navbar = () => {
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

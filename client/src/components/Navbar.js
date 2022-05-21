import { useTheme } from "@emotion/react";
import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
  Link,
  Button,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "react-icons/ai";
import {
  AiFillFileText,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Navbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();
  const theme = useTheme();
  const username = user && isLoggedIn().username;
  const [search, setSearch] = useState("");

  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    navigate("/search?" + new URLSearchParams({ search }));
  };

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
      <HorizontalStack>
        <AiFillFileText size={33} color={theme.palette.primary.main} />
        <Typography variant="h4" mr={1} color={theme.palette.primary.main}>
          <Link href="/" color="inherit" underline="none">
            PostIt
          </Link>
        </Typography>
      </HorizontalStack>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          size="small"
          label="Search for posts..."
          sx={{ flexGrow: 1, maxWidth: 300 }}
          onChange={handleChange}
        />
      </Box>

      <HorizontalStack>
        <IconButton href="/">
          <AiFillHome />
        </IconButton>
        {user ? (
          <>
            <IconButton href={"/users/" + username}>
              <UserAvatar width={30} height={30} username={user.username} />
            </IconButton>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button variant="text" sx={{ minWidth: 80 }} href="/signup">
              Sign Up
            </Button>
            <Button variant="text" sx={{ minWidth: 65 }} href="/login">
              Login
            </Button>
          </>
        )}
      </HorizontalStack>
    </Stack>
  );
};

export default Navbar;

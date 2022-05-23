import {
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { BiUser } from "react-icons/bi";
import GoBack from "../GoBack";
import Navbar from "../Navbar";
import UserAvatar from "../UserAvatar";
import UserMessengerEntry from "../UserMessengerEntry";
import HorizontalStack from "../util/HorizontalStack";

const usernames = [
  "Harry_02",
  "Ihtasham_42",
  "simon995",
  "CaptainSparklez",
  "Pewdiepie",
  "Markiplier",
  "JamesCharles",
  "Epicminecraftgamer",
];

const MessengerView = () => {
  return (
    <Container>
      <Navbar />
      <Box>
        <Box sx={{ padding: 1 }}>
          <Grid
            container
            spacing={3}
            sx={{ height: "85vh" }}
            alignItems="stretch"
          >
            <Grid item xs={5} sx={{ height: "100%" }}>
              <Card sx={{ height: "100%", padding: 0 }}>
                {usernames.map((username) => (
                  <UserMessengerEntry username={username} key={username} />
                ))}
              </Card>
            </Grid>
            <Grid item xs={7}>
              <Card sx={{ height: "100%" }}>
                <Stack>
                  <HorizontalStack sx={{ padding: 2 }}>a</HorizontalStack>
                  <FormControl>
                    <InputLabel>Send a message...</InputLabel>
                    <OutlinedInput
                      label="Write a message..."
                      fullWidth
                      endAdornment={
                        <InputAdornment position="end">
                          <Button>Send</Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default MessengerView;

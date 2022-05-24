import {
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import Message from "../Message";
import Navbar from "../Navbar";
import UserAvatar from "../UserAvatar";
import UserMessengerEntry from "../UserMessengerEntry";
import HorizontalStack from "../util/HorizontalStack";

const conversations = {
  Pewdiepie: {
    messages: [
      { direction: "to", content: "Hi!" },
      { direction: "from", content: "Hey!" },
      { direction: "to", content: "How are you doing?" },
      { direction: "from", content: "I'm doing fine, what about you?" },
      { direction: "to", content: "Doing pretty good as well :)" },
      { direction: "from", content: "Nice! Alright gtg, bye" },
      { direction: "to", content: "Bye :)" },
      { direction: "from", content: "I'm doing fine, what about you?" },
      { direction: "to", content: "Doing pretty good as well :)" },
      { direction: "from", content: "Nice! Alright gtg, bye" },
      { direction: "to", content: "Bye :)" },
    ],
  },
  IhtashamAlt: {
    messages: [],
  },
  simon_995: {
    messages: [],
  },
  CaptainSparklez: {
    messages: [],
  },
  Notch32: {
    messages: [],
  },
  mr_white: {
    messages: [],
  },
  xXSuperGamerXx: {
    messages: [],
  },
  FastDolphin: {
    messages: [],
  },
  testUser1: {
    messages: [],
  },
  testUser2: {
    messages: [],
  },
  testUser3: {
    messages: [],
  },
  testUser4: {
    messages: [],
  },
  testUser5: {
    messages: [],
  },
  testUser6: {
    messages: [],
  },
  testUser7: {
    messages: [],
  },
};

const MessengerView = () => {
  const [conservant, setConservant] = useState("Pewdiepie");

  return (
    <Container>
      <Navbar />
      <Box>
        <Box sx={{ padding: 1 }}>
          <Card sx={{ padding: 0 }}>
            <Grid container sx={{ height: "85vh" }} alignItems="stretch">
              <Grid
                item
                xs={5}
                sx={{ height: "100%", borderRight: 1, borderColor: "divider" }}
              >
                <HorizontalStack
                  alignItems="center"
                  spacing={2}
                  sx={{ px: 2, height: "10%" }}
                >
                  <AiFillMessage size={30} />
                  <Typography>
                    <b>Your Conversations</b>
                  </Typography>
                </HorizontalStack>
                <Divider />
                <Box sx={{ height: "90%" }}>
                  <Box sx={{ height: "100%" }}>
                    <List sx={{ overflow: "scroll", maxHeight: "100%", p: 0 }}>
                      {Object.keys(conversations).map((username) => (
                        <UserMessengerEntry
                          username={username}
                          key={username}
                        />
                      ))}
                    </List>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={7} sx={{ height: "100%" }}>
                <HorizontalStack
                  alignItems="center"
                  spacing={2}
                  sx={{ px: 2, height: "10%" }}
                >
                  <UserAvatar username={conservant} />
                  <Typography>
                    <b>{conservant}</b>
                  </Typography>
                </HorizontalStack>
                <Divider />
                <Box sx={{ height: "78%" }}>
                  <Box sx={{ height: "100%" }}>
                    <Stack
                      sx={{ padding: 2, overflow: "scroll", maxHeight: "100%" }}
                    >
                      {conversations[conservant].messages.map((message, i) => (
                        <Message
                          conservant={conservant}
                          message={message.content}
                          direction={message.direction}
                          key={i}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>

                <Stack
                  sx={{
                    p: 2,
                    height: "12%",
                    borderTop: 1,
                    borderColor: "divider",
                  }}
                  justifyContent="center"
                >
                  <FormControl sx={{ padding: 0 }}>
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
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default MessengerView;

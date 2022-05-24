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
import Messages from "../../Messages";
import Message from "../Message";
import Navbar from "../Navbar";
import UserAvatar from "../UserAvatar";
import UserMessengerEntries from "../UserMessengerEntries";
import UserMessengerEntry from "../UserMessengerEntry";
import HorizontalStack from "../util/HorizontalStack";

const conversationsData = {
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
  const [conversations, setConversations] = useState(conversationsData);

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
                <UserMessengerEntries
                  conversations={conversations}
                  setConservant={setConservant}
                />
              </Grid>
              <Grid item xs={7} sx={{ height: "100%" }}>
                <Messages
                  conservant={conservant}
                  conversations={conversations}
                  setConversations={setConversations}
                />
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default MessengerView;

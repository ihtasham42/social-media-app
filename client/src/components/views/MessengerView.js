import {
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
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
};

const MessengerView = () => {
  const [conservant, setConservant] = useState("Pewdiepie");

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
                {Object.keys(conversations).map((username) => (
                  <UserMessengerEntry username={username} key={username} />
                ))}
              </Card>
            </Grid>
            <Grid item xs={7}>
              <Card sx={{ height: "100%", padding: 0 }}>
                <HorizontalStack sx={{ padding: 2 }} spacing={2}>
                  <UserAvatar username={conservant} />
                  <Typography>
                    <b>{conservant}</b>
                  </Typography>
                </HorizontalStack>
                <Divider />
                <Stack sx={{ padding: 2 }}>
                  {conversations[conservant].messages.map((message, i) => (
                    <Message
                      conservant={conservant}
                      message={message.content}
                      direction={message.direction}
                      key={i}
                    />
                  ))}

                  <FormControl sx={{ my: 2 }}>
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

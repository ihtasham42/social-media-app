import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import Message from "./components/Message";
import UserAvatar from "./components/UserAvatar";
import HorizontalStack from "./components/util/HorizontalStack";

const Messages = (props) => {
  const messagesEndRef = useRef(null);
  const conversation =
    props.conservations && props.conservations[props.conservant];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <>
      <HorizontalStack
        alignItems="center"
        spacing={2}
        sx={{ px: 2, height: "10%" }}
      >
        <UserAvatar username={props.conservant} />
        <Typography>
          <b>{props.conservant}</b>
        </Typography>
      </HorizontalStack>
      <Divider />
      <Box sx={{ height: "78%" }}>
        <Box sx={{ height: "100%" }}>
          <Stack sx={{ padding: 2, overflow: "scroll", maxHeight: "100%" }}>
            {conversation &&
              conversation.messages.map((message, i) => (
                <Message
                  conservant={props.conservant}
                  message={message.content}
                  direction={message.direction}
                  key={i}
                />
              ))}
            <div ref={messagesEndRef} />
          </Stack>
        </Box>
      </Box>

      <Stack
        sx={{
          p: 2,
          height: "12%",
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
    </>
  );
};

export default Messages;

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
import Message from "./Message";
import SendMessage from "./SendMessage";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Messages = (props) => {
  const messagesEndRef = useRef(null);
  const conversation =
    props.conversations && props.conversations[props.conservant];

  useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

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

      <SendMessage
        conversations={props.conversations}
        setConversations={props.setConversations}
        conservant={props.conservant}
        scrollToBottom={scrollToBottom}
      />
    </>
  );
};

export default Messages;

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
import React, { useEffect, useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { getMessages } from "../api/messages";
import { isLoggedIn } from "../helpers/authHelper";
import Loading from "./Loading";
import Message from "./Message";
import SendMessage from "./SendMessage";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Messages = (props) => {
  const messagesEndRef = useRef(null);

  const user = isLoggedIn();

  const [messages, setMessages] = useState(null);

  const getConversation = (conversations, conservant) => {
    for (let i = 0; i < conversations.length; i++) {
      const conversation = conversations[i];
      if (conversation.recipient.username === conservant) {
        return conversation;
      }
    }
  };

  const conversation =
    props.conversations &&
    getConversation(props.conversations, props.conservant);

  const fetchMessages = async () => {
    if (conversation) {
      const data = await getMessages(user, conversation._id);

      console.log(data);
      if (data && !data.error) {
        setMessages(data);
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
    fetchMessages();
  }, [props.conservant]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  return props.conservant ? (
    <>
      {messages && conversation ? (
        <>
          <HorizontalStack
            alignItems="center"
            spacing={2}
            sx={{ px: 2, height: "70px" }}
          >
            <UserAvatar username={props.conservant} />
            <Typography>
              <b>{props.conservant}</b>
            </Typography>
          </HorizontalStack>
          <Divider />
          <Box sx={{ height: "78%" }}>
            <Box sx={{ height: "100%" }}>
              <Stack sx={{ padding: 2, overflow: "auto", maxHeight: "100%" }}>
                {messages.map((message, i) => (
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
            messages={messages}
            recipient={conversation.recipient}
            setMessages={setMessages}
            scrollToBottom={scrollToBottom}
          />
        </>
      ) : (
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Loading />
        </Stack>
      )}
    </>
  ) : (
    <Stack
      sx={{ height: "100%" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <AiFillMessage size={80} />
      <Typography variant="h5">PostIt Messenger</Typography>
      <Typography color="text.secondary">
        Privately message other users on PostIt
      </Typography>
    </Stack>
  );
};

export default Messages;

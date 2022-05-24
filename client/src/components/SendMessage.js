import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HorizontalStack from "./util/HorizontalStack";

const SendMessage = (props) => {
  const [content, setContent] = useState("");

  const handleSendMessage = () => {
    let newConversations = { ...props.conversations };
    let messages = newConversations[props.conservant].messages;

    newConversations[props.conservant].messages = [
      ...messages,
      { direction: "from", content },
    ];

    props.setConversations(newConversations);

    setContent("");
  };

  const handleReceiveMessage = () => {
    let newConversations = { ...props.conversations };
    let messages = newConversations[props.conservant].messages;

    newConversations[props.conservant].messages = [
      ...messages,
      { direction: "to", content },
    ];

    props.setConversations(newConversations);

    props.scrollToBottom();
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <Stack
      sx={{
        p: 2,
        height: "12%",
      }}
      justifyContent="center"
    >
      <HorizontalStack>
        <TextField
          onChange={(e) => setContent(e.target.value)}
          label="Send a message..."
          fullWidth
          value={content}
          autoComplete="off"
        />

        <Button onClick={handleSendMessage} disabled={content.length === 0}>
          Send
        </Button>
      </HorizontalStack>
    </Stack>
  );
};

export default SendMessage;

import { Avatar, Card, useTheme } from "@mui/material";
import React from "react";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Message = (props) => {
  const username = props.conservant;
  const theme = useTheme();

  let styles = {};
  if (props.direction === "to") {
    styles = {
      justifyContent: "flex-start",
    };
  } else if (props.direction === "from") {
    styles = {
      messageColor: theme.palette.grey["100"],
      justifyContent: "flex-end",
    };
  }

  return (
    <HorizontalStack
      sx={{ paddingY: 1, width: "100%" }}
      spacing={2}
      justifyContent={styles.justifyContent}
      alignItems="flex-end"
    >
      {props.direction === "to" && (
        <UserAvatar username={username} height={30} width={30} />
      )}

      <Card
        sx={{
          borderRadius: "25px",
          backgroundColor: styles.messageColor,
          borderWidth: "1px",
          paddingY: "12px",
          paddingX: 2,
        }}
      >
        {props.message}
      </Card>
    </HorizontalStack>
  );
};

export default Message;

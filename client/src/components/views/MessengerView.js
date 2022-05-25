import { Card, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Messages from "../Messages";
import Navbar from "../Navbar";
import UserMessengerEntries from "../UserMessengerEntries";
import { getConversations } from "../../api/messages";
import { isLoggedIn } from "../../helpers/authHelper";

const MessengerView = () => {
  const [conservant, setConservant] = useState(null);
  const [conversations, setConversations] = useState(null);
  const user = isLoggedIn();

  const fetchConversations = async () => {
    const data = await getConversations(user);
    setConversations(data);
    console.log(data);
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <Container>
      <Navbar />
      <Box>
        <Card sx={{ padding: 0 }}>
          <Grid container sx={{ height: "85vh" }} alignItems="stretch">
            <Grid
              item
              xs={5}
              sx={{ borderRight: 1, borderColor: "divider", height: "100%" }}
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
    </Container>
  );
};

export default MessengerView;

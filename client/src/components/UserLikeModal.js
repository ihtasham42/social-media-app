import { Backdrop, Box, Card, Modal, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { getUserLikes } from "../api/posts";
import Loading from "./Loading";
import UserEntry from "./UserEntry";

const styles = {
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "80%",
    maxHeight: 400,
    overflowY: "auto",
  },
};

const UserLikeModal = ({ postId, open, setOpen }) => {
  const [userLikes, setUserLikes] = useState(null);
  const [loading, setLoading] = useState(true);
  const scrollBoxRef = useRef(null);

  const handleClose = () => setOpen(false);
  const handleBackdropClick = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const fetchUserLikes = async () => {
    setLoading(true);
    const data = await getUserLikes(postId);
    setLoading(false);
    if (data.success) {
      setUserLikes(data.userLikes);
    }
  };

  useEffect(() => {
    if (open) {
      fetchUserLikes();
    }
  }, [open]);

  const handleScroll = () => {
    const scrollBox = scrollBoxRef.current;
    console.log(scrollBox.scrollTop + scrollBox.clientHeight);
    if (
      scrollBox.scrollTop + scrollBox.clientHeight ===
      scrollBox.scrollHeight
    ) {
      console.log("scroll end");
    }
  };

  useEffect(() => {
    if (!scrollBoxRef.current) {
      return;
    }
    const scrollBox = scrollBoxRef.current;
    scrollBox.addEventListener("scroll", handleScroll);

    return () => {
      scrollBox.removeEventListener("scroll", handleScroll);
    };
  }, [userLikes]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{ onClick: handleBackdropClick }}
    >
      <Box
        sx={styles.container}
        ref={scrollBoxRef}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Card>
          <Typography variant="h5" mb={2}>
            Liked by
          </Typography>
          <Stack>
            <Stack spacing={2}>
              {userLikes &&
                userLikes.map((username) => (
                  <UserEntry username={username} key={username} />
                ))}
            </Stack>
            {loading && <Loading />}
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default UserLikeModal;

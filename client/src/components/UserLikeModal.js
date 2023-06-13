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
  const [userLikes, setUserLikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);
  const scrollBoxRef = useRef(null);

  const handleClose = () => setOpen(false);
  const handleBackdropClick = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const fetchUserLikes = async () => {
    if (loading || !hasMorePages) return;

    setLoading(true);

    let anchor = "";
    if (userLikes && userLikes.length > 0) {
      anchor = userLikes[userLikes.length - 1].id;
    }

    const data = await getUserLikes(postId, anchor);

    setLoading(false);
    if (data.success) {
      setUserLikes([...userLikes, ...data.userLikes]);
      setHasMorePages(data.hasMorePages);
    }
  };

  useEffect(() => {
    if (open) {
      fetchUserLikes();
    }
  }, [open]);

  const handleScroll = () => {
    const scrollBox = scrollBoxRef.current;

    if (
      scrollBox.scrollTop + scrollBox.clientHeight >
      scrollBox.scrollHeight - 12
    ) {
      fetchUserLikes();
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
                userLikes.map((like) => (
                  <UserEntry username={like.username} key={like.username} />
                ))}
            </Stack>
            {loading ? <Loading /> : hasMorePages && <Box py={6}></Box>}
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default UserLikeModal;

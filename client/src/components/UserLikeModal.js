import { Backdrop, Box, Card, Modal, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

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
      console.log(data.userLikes);
    }
  };

  useEffect(() => {
    if (open) {
      fetchUserLikes();
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{ onClick: handleBackdropClick }}
    >
      <Box
        sx={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Card>
          <Typography variant="h5" mb={2}>
            Liked by
          </Typography>
          {loading ? (
            <Loading />
          ) : (
            <Stack spacing={2}>
              {userLikes.map((username) => (
                <UserEntry username={username} key={username} />
              ))}
            </Stack>
          )}
        </Card>
      </Box>
    </Modal>
  );
};

export default UserLikeModal;

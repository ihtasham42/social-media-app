import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

const LikeBox = (props) => {
  const { likeCount, onLike } = props;
  const theme = useTheme();
  const [liked, setLiked] = useState(props.liked);

  const handleLike = (e) => {
    const newLikedValue = !liked;
    setLiked(newLikedValue);
    onLike(newLikedValue);
  };

  return (
    <Stack alignItems="center">
      <IconButton sx={{ padding: 0.5 }} onClick={handleLike}>
        {liked ? (
          <IconContext.Provider value={{ color: theme.palette.primary.main }}>
            <AiFillLike />
          </IconContext.Provider>
        ) : (
          <AiOutlineLike />
        )}
      </IconButton>
      <Typography>{likeCount}</Typography>
    </Stack>
  );
};

export default LikeBox;

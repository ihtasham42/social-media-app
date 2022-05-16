import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

const LikeBox = (props) => {
  const { likeCount, onLike } = props;
  const theme = useTheme();
  const [liked, setLiked] = useState(props.liked);

  const handleLike = (e) => {
    setLiked(!liked);
  };

  useEffect(() => {
    onLike(liked);
  }, [liked]);

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

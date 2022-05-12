import { Avatar, Card, Link, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import ContentDetails from "./ContentDetails";

import LikeBox from "./LikeBox";
import Editor from "./Editor";
import PostContentBox from "./PostContentBox";
import HorizontalStack from "./util/HorizontalStack";

const PostCard = (props) => {
  const { preview } = props;

  const theme = useTheme();
  const [editing, setEditing] = useState(false);

  return (
    <Card sx={{ padding: 0 }}>
      <HorizontalStack spacing={0} alignItems="initial">
        <Box
          padding={theme.spacing(1)}
          sx={{ backgroundColor: "grey.100", width: "50px" }}
        >
          <LikeBox />
        </Box>
        <PostContentBox clickable={preview}>
          <ContentDetails />
          <Typography variant="h5" gutterBottom sx={{ overflow: "hidden" }}>
            Post Title
          </Typography>

          {preview !== "secondary" &&
            (editing ? (
              <Editor />
            ) : (
              <Typography gutterBottom sx={{}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                volutpat elit ipsum, sit amet facilisis nulla auctor blandit.
                Cras ipsum diam, ultrices eu nisl quis, scelerisque aliquet
                elit. Aliquam ligula est, blandit a sem eget, tempor scelerisque
                urna. Cras vitae ex pharetra, faucibus arcu sed, commodo odio.
                Vivamus elementum iaculis bibendum. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Typography>
            ))}

          <HorizontalStack>
            <AiFillMessage />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              5 comments
            </Typography>
          </HorizontalStack>
        </PostContentBox>
      </HorizontalStack>
    </Card>
  );
};

export default PostCard;

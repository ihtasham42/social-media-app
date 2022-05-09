import { ThemeContext } from "@emotion/react";
import { Button, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import LikeBox from "./LikeBox";
import HorizontalStack from "./util/HorizontalStack";

const Comment = (props) => {
  const theme = useTheme();
  const { replies } = props;

  return (
    <Box>
      <HorizontalStack alignItems="initial">
        <Box
          padding={theme.spacing(1)}
          sx={{ backgroundColor: "grey.100", width: "50px" }}
        >
          <AiFillMessage />
          <Button variant="outlined" sx={{ height: "100%", width: 5 }}></Button>
        </Box>
        <Box padding={theme.spacing(1)}>
          <Typography variant="subtitle2" color="text.secondary">
            By Ihtasham - 04/02/2022
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat elit ipsum, sit amet facilisis nulla auctor blandit. Cras
            ipsum diam, ultrices eu nisl quis, scelerisque aliquet elit. Aliquam
            ligula est, blandit a sem eget, tempor scelerisque urna. Cras vitae
            ex pharetra, faucibus arcu sed, commodo odio. Vivamus elementum
            iaculis bibendum. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </Typography>
          {replies && replies.constructor === Array && (
            <Box sx={{ pt: theme.spacing(1) }}>
              {replies.map((reply, i) => (
                <Comment key={i} replies={reply} />
              ))}
            </Box>
          )}
        </Box>
      </HorizontalStack>
    </Box>
  );
};

export default Comment;

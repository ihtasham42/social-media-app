import {
  Avatar,
  Button,
  Card,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import ContentDetails from "./ContentDetails";

import LikeBox from "./LikeBox";
import PostContentBox from "./PostContentBox";
import HorizontalStack from "./util/HorizontalStack";

import {} from "react-icons/ai";
import PostEditor from "./PostEditor";
import ContentUpdateEditor from "./ContentUpdateEditor";

const PostCard = (props) => {
  const { post, preview, removePost } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isAuthor = isLoggedIn().username === post.poster.username;

  const theme = useTheme();
  const [editing, setEditing] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleDeletePost = async (e) => {
    e.stopPropagation();

    if (!confirm) {
      setConfirm(true);
    } else {
      setLoading(true);
      await deletePost(post._id, isLoggedIn());
      setLoading(false);
      if (preview) {
        removePost(post);
      } else {
        navigate("/");
      }
    }
  };

  const handleEditPost = async (e) => {
    e.stopPropagation();

    setEditing(!editing);
    if (editing) {
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.content;
  };

  return (
    <Card sx={{ padding: 0 }}>
      <HorizontalStack spacing={0} alignItems="initial">
        <Box
          padding={theme.spacing(1)}
          sx={{ backgroundColor: "grey.100", width: "50px" }}
        >
          <LikeBox likeCount={post.likeCount} />
        </Box>
        <PostContentBox clickable={preview} post={post}>
          <HorizontalStack justifyContent="space-between">
            <ContentDetails
              username={post.poster.username}
              createdAt={post.createdAt}
              edited={post.edited}
            />
            <Box>
              {isAuthor && (
                <HorizontalStack>
                  <Button
                    disabled={loading}
                    size="small"
                    onClick={handleEditPost}
                  >
                    {editing ? <>Cancel</> : <>Edit</>}
                  </Button>
                  <Button
                    disabled={loading}
                    size="small"
                    onClick={handleDeletePost}
                  >
                    {confirm ? <>Confirm</> : <>Delete</>}
                  </Button>
                </HorizontalStack>
              )}
            </Box>
          </HorizontalStack>

          <Typography
            variant="h5"
            gutterBottom
            sx={{ overflow: "hidden", mt: 1 }}
          >
            {post.title}
          </Typography>

          {preview !== "secondary" &&
            (editing ? (
              <ContentUpdateEditor />
            ) : (
              <Typography>{post.content}</Typography>
            ))}

          <HorizontalStack sx={{ mt: 1 }}>
            <AiFillMessage />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {post.commentCount}
            </Typography>
          </HorizontalStack>
        </PostContentBox>
      </HorizontalStack>
    </Card>
  );
};

export default PostCard;

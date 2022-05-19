import { Button, Card, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deletePost, likePost, unlikePost, updatePost } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import ContentDetails from "./ContentDetails";

import LikeBox from "./LikeBox";
import PostContentBox from "./PostContentBox";
import HorizontalStack from "./util/HorizontalStack";

import {} from "react-icons/ai";
import ContentUpdateEditor from "./ContentUpdateEditor";

const PostCard = (props) => {
  const { preview, removePost } = props;
  let postData = props.post;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = isLoggedIn();
  const isAuthor = user && user.username === postData.poster.username;

  const theme = useTheme();
  const [editing, setEditing] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [post, setPost] = useState(postData);
  const [likeCount, setLikeCount] = useState(post.likeCount);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.content.value;
    await updatePost(post._id, isLoggedIn(), { content });
    setPost({ ...post, content, edited: true });
    setEditing(false);
  };

  const handleLike = async (liked) => {
    if (liked) {
      setLikeCount(likeCount + 1);
      await likePost(post._id, user);
    } else {
      setLikeCount(likeCount - 1);
      await unlikePost(post._id, user);
    }
  };

  return (
    <Card sx={{ padding: 0 }}>
      <HorizontalStack spacing={0} alignItems="initial">
        <Box
          padding={theme.spacing(1)}
          sx={{ backgroundColor: "grey.100", width: "50px" }}
        >
          <LikeBox
            likeCount={likeCount}
            liked={post.liked}
            onLike={handleLike}
          />
        </Box>
        <PostContentBox clickable={preview} post={post} editing={editing}>
          <HorizontalStack justifyContent="space-between">
            <ContentDetails
              username={post.poster.username}
              createdAt={post.createdAt}
              edited={post.edited}
            />
            <Box>
              {isAuthor && preview !== "secondary" && (
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
              <ContentUpdateEditor
                handleSubmit={handleSubmit}
                originalContent={post.content}
              />
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

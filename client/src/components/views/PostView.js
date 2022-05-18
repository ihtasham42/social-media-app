import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts";
import Comments from "../Comments";
import ErrorAlert from "../ErrorAlert";
import { isLoggedIn } from "../../helpers/authHelper";

const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const user = isLoggedIn();

  const fetchPost = async () => {
    const data = await getPost(params.id, user && user.token);
    if (data.error) {
      setError(data.error);
    } else {
      setPost(data);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          post ? (
            <Stack spacing={2}>
              <PostCard post={post} />

              <Comments />
            </Stack>
          ) : error ? (
            <ErrorAlert error={error} />
          ) : (
            <Loading />
          )
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default PostView;

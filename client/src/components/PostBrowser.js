import { Button, Card, Link, Stack, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { MdSettingsInputAntenna } from "react-icons/md";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import CreatePost from "./CreatePost";
import Loading from "./Loading";
import PostCard from "./PostCard";
import SortBySelect from "./SortBySelect";
import HorizontalStack from "./util/HorizontalStack";

const PostBrowser = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState(false);
  const [sortBy, setSortBy] = useState("-createdAt");
  const user = isLoggedIn();

  const [search, setSearch] = useState(props.search);

  const fetchPosts = async () => {
    setLoading(true);
    const newPage = page + 1;
    setPage(newPage);

    let query = {
      page: newPage,
      sortBy,
    };

    if (props.author) query.author = props.author;

    const data = await getPosts(user && user.token, query);
    if (data.length === 0) {
      setEnd(true);
    }
    setLoading(false);
    if (!data.error) {
      setPosts([...posts, ...data]);
    }
  };

  useEffect(() => {
    setSearch(props.search);
  }, [props.search]);

  useEffect(() => {
    fetchPosts();
  }, [props.sortBy]);

  const handleSortBy = (e) => {
    const newSortBy = e.target.value;

    setPosts([]);
    setPage(0);
    setEnd(false);
    setSortBy(newSortBy);
  };

  const removePost = (removedPost) => {
    setPosts(posts.filter((post) => post._id !== removedPost._id));
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Stack spacing={2}>
        <Card>
          <HorizontalStack justifyContent="space-between">
            {props.createPost && <CreatePost />}
            <SortBySelect onSortBy={handleSortBy} sortBy={sortBy} />
          </HorizontalStack>
        </Card>

        {search && (
          <HorizontalStack padding={0} justifyContent="space-between">
            {console.log(search)}
            <Typography variant="h5">Showing results for "{search}"</Typography>
            <Typography color="text.secondary">14 results found</Typography>
          </HorizontalStack>
        )}

        {posts.map((post, i) => (
          <PostCard
            preview="primary"
            key={post._id}
            post={post}
            removePost={removePost}
          />
        ))}

        {loading && <Loading />}
        {end ? (
          <Stack py={5} alignItems="center">
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {posts.length > 0 ? (
                <>All posts have been viewed</>
              ) : (
                <>No posts available</>
              )}
            </Typography>
            <Button variant="text" size="small" onClick={handleBackToTop}>
              Back to top
            </Button>
          </Stack>
        ) : (
          !loading &&
          posts &&
          posts.length > 0 && (
            <Stack pt={2} pb={6} alignItems="center" spacing={2}>
              <Button onClick={fetchPosts} variant="contained">
                Load more
              </Button>
              <Button variant="text" size="small" onClick={handleBackToTop}>
                Back to top
              </Button>
            </Stack>
          )
        )}
      </Stack>
    </>
  );
};

export default PostBrowser;

import { Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserComments } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import Comment from "./Comment";
import SortBySelect from "./SortBySelect";

const CommentBrowser = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState(false);
  const [sortBy, setSortBy] = useState("-createdAt");
  const user = isLoggedIn();

  const fetchComments = async () => {
    setLoading(true);

    const newPage = page + 1;
    setPage(newPage);

    let comments = await getUserComments({ id: props.profileUser._id });

    setComments(comments);
  };

  useEffect(() => {
    fetchComments();
  }, [sortBy]);

  const handleSortBy = () => {};

  const sorts = {
    "-createdAt": "Latest",
    createdAt: "Earliest",
  };

  return (
    <Stack spacing={2}>
      <Card>
        <SortBySelect onSortBy={handleSortBy} sortBy={sortBy} sorts={sorts} />
      </Card>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment._id} comment={comment} profile />
        ))}
    </Stack>
  );
};

export default CommentBrowser;

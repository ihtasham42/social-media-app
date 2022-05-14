import { Button, Card, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillWindows } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createComment } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import ErrorAlert from "./ErrorAlert";

const CommentEditor = ({ label, comment, addComment }) => {
  const [formData, setFormData] = useState({
    content: "",
  });

  const [error, setError] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      ...formData,
      parentId: comment && comment._id,
    };
    const data = await createComment(body, params, isLoggedIn());
    if (data.error) {
      setError("Failed to post comment");
    } else {
      addComment();
    }
  };

  return (
    <Card>
      <Stack spacing={2}>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            multiline
            fullWidth
            label={label}
            rows={5}
            required
            name="content"
            sx={{
              backgroundColor: "white",
            }}
            onChange={handleChange}
          />

          <ErrorAlert error={error} sx={{ my: 4 }} />
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "white",
              mt: 2,
            }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default CommentEditor;

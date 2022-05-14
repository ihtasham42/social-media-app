import { Button, Card, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createComment } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import ErrorAlert from "./ErrorAlert";

const CommentEditor = ({ label, comment }) => {
  const [formData, setFormData] = useState({
    content: "",
  });

  const [error, setError] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const body = {
      ...formData,
      parentId: comment && comment._id,
    };
    const data = createComment(body, params, isLoggedIn());
    if (data.error) {
      setError("Failed to post comment");
    } else {
      navigate("/posts/" + params.id);
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
          <ErrorAlert error={error} />
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

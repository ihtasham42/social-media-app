const mongoose = require("mongoose");
const Post = require("../models/Post");

const getPost = (req, res) => {
  try {
    const postId = req.params.id;

    if (!postId) {
      return res.status(400).send("No post id provided");
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(400).send("Post with provided id not found");
    }

    return res.json(post);
    
  } catch(err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getPost
};

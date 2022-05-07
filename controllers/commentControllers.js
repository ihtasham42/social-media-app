const Comment = require("../models/Comment");
const mongoose = require("mongoose");

const createComment = async (req, res) => {
  try {
    const { content, commentId, postId, userId } = req.body;

    const comment = await Comment.create({
      content,
      parent: commentId,
      post: postId,
      commenter: userId,
    });

    return res.json(comment);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getPostComments = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getUserComments = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {};

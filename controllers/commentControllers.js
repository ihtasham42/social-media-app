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
    const postId = req.params.id;

    const comments = await Comment.find({ post: postId });

    let commentParents = {};
    let rootComments = [];

    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      comment.children = [];
      commentParents[comment._id] = comment;
    }

    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if (comment.parent) {
        const commentParent = commentParents[comment._id];
        commentParent.children = [...commentParent.children, comment];
      } else {
        rootComments = [...rootComments, comment];
      }
    }

    return res.json(rootComments);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getUserComments = async (req, res) => {
  try {
    const userId = req.params.id;

    const comments = await Comment.find({ commenter: userId });

    return res.json(comments);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {};

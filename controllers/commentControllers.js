const Comment = require("../models/Comment");
const mongoose = require("mongoose");
const Post = require("../models/Post");

const createComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const { content, parentId, userId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found");
    }

    const comment = await Comment.create({
      content,
      parent: parentId,
      post: postId,
      commenter: userId,
    });

    post.commentCount += 1;

    await post.save();

    await Comment.populate(comment, { path: "commenter" });

    return res.json(comment);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const getPostComments = async (req, res) => {
  try {
    const postId = req.params.id;

    const comments = await Comment.find({ post: postId })
      .populate("commenter")
      .sort("-createdAt");

    let commentParents = {};
    let rootComments = [];

    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      commentParents[comment._id] = comment;
    }

    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if (comment.parent) {
        let commentParent = commentParents[comment.parent];
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

const updateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const { userId, content } = req.body;

    if (!content) {
      throw new Error("All input required");
    }

    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.commenter !== userId) {
      throw new Error("Not authorized to update comment");
    }

    comment.content = content;
    comment.edited = true;
    await comment.save();

    return res.status(200).json(comment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const { userId } = req.body;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.commenter != userId) {
      throw new Error("Not authorized to delete comment");
    }

    await comment.remove();

    const post = await Post.findById(comment.post);

    post.commentCount = (await Comment.find({ post: post._id })).length;

    await post.save();

    return res.status(200).json(comment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createComment,
  getPostComments,
  getUserComments,
  updateComment,
  deleteComment,
};

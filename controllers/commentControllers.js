const Comment = require("../models/Comment");
const mongoose = require("mongoose");
const Post = require("../models/Post");

const createComment = async (req, res) => {
  try {
    const { content, parentId, postId, userId } = req.body;

    const post = await Post.findByIdAndUpdate(postId, {
      $inc: { commentCount: 1 },
    });

    if (!post) {
      return res.status(400).send("Post not found");
    }

    const comment = await Comment.create({
      content,
      parent: parentId,
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

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      throw new Error("Post does not exist");
    }

    const comments = await Comment.find({ post: postId });

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

module.exports = { createComment, getPostComments, getUserComments };

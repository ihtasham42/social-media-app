const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const PostLike = require("../models/PostLike");
const paginate = require("../util/paginate");

const pageSize = 10;

const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    const post = await Post.create({
      title,
      content,
      poster: userId,
    });

    res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.id;
    const page = req.query.page;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User does not exist");
    }

    const posts = await paginate(
      Post.find({ poster: userId }).sort("-createdAt"),
      page,
      pageSize
    );

    return res.json(posts);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post does not exist");
    }

    return res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, userId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post does not exist");
    }

    if (post.poster != userId) {
      throw new Error("Not authorized to update post");
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );

    return res.json(updatedPost);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post does not exist");
    }

    if (post.poster != userId) {
      throw new Error("Not authorized to update post");
    }

    await post.remove();

    await Comment.deleteMany({ post: post._id });

    return res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const page = req.query.page;

    const posts = await paginate(
      Post.find().sort("-createdAt").populate("poster likes", "email"),
      page,
      pageSize
    );

    return res.json(posts);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post does not exist");
    }

    const existingPostLike = await PostLike.find({ postId, userId });

    if (existingPostLike) {
      throw new Error("Post is already liked");
    }

    const likedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $inc: { likeCount: 1 },
      },
      { new: true }
    );

    const postLike = await PostLike.create({
      postId,
      userId,
    });

    return res.json(likedPost);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const unlikePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post does not exist");
    }

    const existingPostLike = await PostLike.deleteOne({ postId, userId });

    if (!existingPostLike) {
      throw new Error("Post is already not liked");
    }

    const unlikedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $inc: { likeCount: -1 },
      },
      { new: true }
    );

    return res.json(unlikedPost);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getUserLikedPosts = async (req, res) => {
  try {
    const userId = req.params.id;

    if (req.body.userId != userId) {
      throw new Error("Not authorized to do this");
    }

    const likedPosts = await PostLike.find({ userId });

    return res.json(likedPosts);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getPost,
  getPosts,
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  getUserLikedPosts,
};

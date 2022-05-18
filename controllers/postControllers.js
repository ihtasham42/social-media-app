const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const PostLike = require("../models/PostLike");
const paginate = require("../util/paginate");

const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    if (!(title && content)) {
      throw new Error("All input required");
    }

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
    const { userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      throw new Error("Post does not exist");
    }

    const post = await Post.findById(postId).populate("poster").lean();

    if (!post) {
      throw new Error("Post does not exist");
    }

    await setLiked([post], userId);

    return res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { content, userId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post does not exist");
    }

    if (post.poster != userId) {
      throw new Error("Not authorized to update post");
    }

    post.content = content;
    post.edited = true;

    await post.save();

    return res.json(post);
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
      throw new Error("Not authorized to delete post");
    }

    await post.remove();

    await Comment.deleteMany({ post: post._id });

    return res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const setLiked = async (posts, userId) => {
  let searchCondition = {};
  if (userId) searchCondition = { userId };

  const userPostLikes = await PostLike.find(searchCondition); //userId needed

  posts.forEach((post) => {
    userPostLikes.forEach((userPostLike) => {
      if (userPostLike.postId.equals(post._id)) {
        post.liked = true;
        console.log("liked!");
        return;
      }
    });
  });
};

const getPosts = async (req, res) => {
  try {
    const page = req.query.page;
    const { userId } = req.body;

    const posts = await paginate(
      Post.find().populate("poster").sort("-createdAt"),
      page,
      6
    ).lean();

    await setLiked(posts, userId);

    return res.json(posts);
  } catch (err) {
    console.log(err);
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

    const existingPostLike = await PostLike.findOne({ postId, userId });

    if (existingPostLike) {
      throw new Error("Post is already liked");
    }

    const postLike = await PostLike.create({
      postId,
      userId,
    });

    post.likeCount += 1;

    await post.save();

    return res.json(postLike);
  } catch (err) {
    console.log(err);
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

    post.likeCount -= 1;

    post.save();

    return res.json(existingPostLike);
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

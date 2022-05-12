const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Follow = require("../models/Follow");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ user }, process.env.TOKEN_KEY);

    return res.json(token);
  } catch (err) {
    return res.status(400).json({ error: "Failed to register user" });
  }
};

const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email, user });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!(user && isPasswordValid)) {
      return res.status(400).json({ error: "User or password does not exist" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY);

    return res.json(token);
  } catch (err) {
    return res.status(400).json({ error: "Failed to login user" });
  }
};

const follow = async (req, res) => {
  try {
    const { userId } = req.body;
    const followingId = req.params.id;

    const existingFollow = await Follow.find({ userId, followingId });

    if (existingFollow) {
      return res.status(400).json({ error: "Already following this user" });
    }

    const follow = await Follow.create({ userId, followingId });

    return res.status(200).json({ data: follow });
  } catch (err) {
    return res.status(400).json({ error: "Failed to follow user" });
  }
};

const unfollow = async (req, res) => {
  try {
    const { userId } = req.body;
    const followingId = req.params.id;

    const existingFollow = await Follow.find({ userId, followingId });

    if (!existingFollow) {
      return res.status(400).json({ error: "Not following this user" });
    }

    await existingFollow.remove();

    return res.status(200).json({ data: existingFollow });
  } catch (err) {
    return res.status(400).json({ error: "Failed to unfollow user" });
  }
};

const getFollowers = async (req, res) => {
  try {
    const userId = req.params.id;

    const followers = await Follow.find({ followingId: userId });

    return res.status(200).json({ data: followers });
  } catch (err) {
    return res.status(400).json({ error: "Failed to get followers" });
  }
};

const getFollowing = async (req, res) => {
  try {
    const userId = req.params.id;

    const following = await Follow.find({ userId });

    return res.status(200).json({ data: following });
  } catch (err) {
    return res.status(400).json({ error: "Failed to get following" });
  }
};

module.exports = {
  register,
  login,
  follow,
  unfollow,
  getFollowers,
  getFollowing,
};

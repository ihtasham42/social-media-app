const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      return res.status(400).send("All input required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ user }, process.env.TOKEN_KEY);

    return res.json(token);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input required");
    }

    const user = await User.findOne({ email });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!(user && isPasswordValid)) {
      return res.status(400).send("Invalid email or password");
    }

    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY);

    return res.json(token);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const follow = (req, res) => {};

const unfollow = (req, res) => {};

module.exports = {
  register,
  login,
  follow,
  unfollow,
};

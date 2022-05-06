const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
};

module.exports = {
  register,
  login,
};

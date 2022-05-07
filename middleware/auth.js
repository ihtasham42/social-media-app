const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(400).send("No token given");
    }

    const { userId } = jwt.decode(token, process.env.TOKEN_KEY);

    req.body.userId = userId;

    return next();
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = { verifyToken };

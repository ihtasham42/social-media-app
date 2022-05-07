const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentControllers");
const { verifyToken } = require("../middleware/auth");

module.exports = router;

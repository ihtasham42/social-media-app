const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentControllers");
const { verifyToken } = require("../middleware/auth");

router.post("/", verifyToken, commentControllers.createComment);

router.get("/user_comments/:id", commentControllers.getUserComments);

router.get("/post_comments/:id", commentControllers.getPostComments);

module.exports = router;

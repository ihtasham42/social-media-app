const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentControllers");
const { verifyToken } = require("../middleware/auth");

router.patch("/:id", verifyToken, commentControllers.updateComment);
router.post("/:id", verifyToken, commentControllers.createComment);
router.delete("/:id", verifyToken, commentControllers.deleteComment);
router.get("/post/:id", commentControllers.getPostComments);
router.get("/user/:id", commentControllers.getUserComments);

module.exports = router;

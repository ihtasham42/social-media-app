const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers");
const { verifyToken } = require("../middleware/auth");

router.get("/", verifyToken, postControllers.getPosts);
router.post("/", verifyToken, postControllers.createPost);

router.get("/:id", verifyToken, postControllers.getPost);
router.patch("/:id", verifyToken, postControllers.updatePost);
router.delete("/:id", verifyToken, postControllers.deletePost);

module.exports = router;

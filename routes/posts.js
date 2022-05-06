const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers");

router.get("/", postControllers.getPosts);
router.post("/", postControllers.createPost);

router.get("/:id", postControllers.getPost);
router.patch("/:id", postControllers.updatePost);
router.delete("/:id", postControllers.deletePost);

module.exports = router;

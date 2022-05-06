const express = require("mongoose");
const router = express.Router();
const postController = require("../controllers/postControllers");

router.get("/", postController.getPosts);
router.post("/", postController.createPost);

router.get("/:id", postController.getPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

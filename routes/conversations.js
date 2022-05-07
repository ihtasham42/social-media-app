const express = require("express");
const router = express.Router();
const conversationControllers = require("../controllers/conversationControllers");
const { verifyToken } = require("../middleware/auth");

router.post("/:id", verifyToken, conversationControllers.sendMessage);
router.get("/:id", verifyToken, conversationControllers.getMessages);

module.exports = router;

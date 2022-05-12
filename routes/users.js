const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const { check } = require("express-validator");
const { verifyToken } = require("../middleware/auth");

router.post(
  "/register",
  check("username").exists().withMessage("Username required"),
  userControllers.register
);
router.post("/login", userControllers.login);

router.post("/follow/:id", verifyToken, userControllers.follow);
router.delete("/unfollow/:id", verifyToken, userControllers.unfollow);

router.get("/followers/:id", userControllers.getFollowers);
router.get("/following/:id", userControllers.getFollowing);

module.exports = router;

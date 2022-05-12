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
routers.post("/follow/:id", verifyToken, userControllers.follow);
routes.post("/unfollow/:id", verifyToken, userControllers.unfollow);

module.exports = router;

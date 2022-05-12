const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const { check } = require("express-validator");

router.post(
  "/register",
  check("username").exists().withMessage("Username required"),
  userControllers.register
);
router.post("/login", userControllers.login);
routers.post("/follow/:id", userControllers.follow);
routes.post("/unfollow/:id", userControllers.unfollow);

module.exports = router;

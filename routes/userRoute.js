const express = require("express");
const userController = require("../controllers/userController");
const { authenticate } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile", authenticate, userController.getUserDetails);

module.exports = router;

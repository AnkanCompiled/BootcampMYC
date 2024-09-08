const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:email", async (req, res, next) => {
  try {
    const users = await User.findOne({ email: req.params.email });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    if (await User.findOne({ email: req.body.email })) {
      res.status(200).json({ status: "email present" });
    } else {
      const users = await User.create(req.body);
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

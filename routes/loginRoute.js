const express = require("express");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

// Secret key for signing the token
const SECRET_KEY = "myVerySecureLongRandomSecretKey123!@#";

const router = express.Router();

const generateToken = (id, role) => {
  const payload = {
    id: id,
    role: role,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  return token;
};

router.post("/", async (req, res, next) => {
  try {
    const searchID = await User.findOne({ email: req.body.email });
    if (searchID) {
      if (searchID.password == req.body.password) {
        const token = generateToken(searchID._id, searchID.role);
        console.log("JWT Token:", token);
        res.status(200).json({ status: "SUCCESFULL LOGIN" });
      } else {
        res.status(200).json({ status: "password not match" });
      }
    } else {
      res.status(200).json({ status: "email not present" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

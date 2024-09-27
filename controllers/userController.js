const userService = require("../services/userService");

const registerUser = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const token = await userService.loginUser(
      req.body.email,
      req.body.password
    );
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

const getUserDetails = async (req, res, next) => {
  try {
    const user = await userService.getUserDetails(req.user.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserDetails,
};

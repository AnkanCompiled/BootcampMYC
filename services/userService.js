const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userDao = require("../dao/userDao");
const AppError = require("../exceptions/AppError");
const { jwtSecret } = require("../config/config");

const registerUser = async (userData) => {
  const existingUser = await userDao.findUserByEmail(userData.email);
  if (existingUser) {
    throw new AppError("Email already registered", 400);
  }
  return userDao.createUser(userData);
};

const loginUser = async (email, password) => {
  const user = await userDao.findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError("Invalid email or password", 401);
  }
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    jwtSecret,
    {
      expiresIn: "1h",
    }
  );
  return token;
};

const getUserDetails = async (userId) => {
  return userDao.findUserById(userId);
};

module.exports = {
  registerUser,
  loginUser,
  getUserDetails,
};

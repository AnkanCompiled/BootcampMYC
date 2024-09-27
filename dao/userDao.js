const User = require("../model/userModel");

const createUser = async (userData) => {
  const user = new User(userData);
  return user.save();
};

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const findUserById = async (id) => {
  return User.findById(id).select("-password");
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};

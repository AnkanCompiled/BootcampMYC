const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");
const AppError = require("../exceptions/AppError");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(new AppError("Please login to access this route", 401));
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return next(new AppError("Invalid token", 401));
    }
    req.user = decoded;
    next();
  });
};

module.exports = { authenticate };

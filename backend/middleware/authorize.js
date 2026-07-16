const AppError = require("../utils/AppError");

const authorize = (...roles) => {
  return (req, res, next) => {
    // TODO: Implement role-based authorization
    // Example: authorize('admin')
    next();
  };
};

module.exports = authorize;

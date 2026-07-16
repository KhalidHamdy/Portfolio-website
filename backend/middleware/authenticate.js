const AppError = require("../utils/AppError");

const authenticate = (req, res, next) => {
  // TODO: Implement JWT or session-based authentication
  // For now, pass through (public read, protected write)
  next();
};

module.exports = authenticate;

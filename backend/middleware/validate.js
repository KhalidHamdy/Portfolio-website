const AppError = require("../utils/AppError");

const validate = (schema) => {
  return (req, res, next) => {
    const errors = [];
    for (const [field, rules] of Object.entries(schema)) {
      const value = req.body[field];
      if (rules.required && (value === undefined || value === null || value === "")) {
        errors.push(`${field} is required`);
      }
      if (rules.enum && !rules.enum.includes(value)) {
        errors.push(`${field} must be one of: ${rules.enum.join(", ")}`);
      }
      if (rules.type === "string" && typeof value !== "string" && value !== undefined) {
        errors.push(`${field} must be a string`);
      }
    }
    if (errors.length > 0) {
      throw new AppError(errors.join("; "), 400);
    }
    next();
  };
};

module.exports = validate;

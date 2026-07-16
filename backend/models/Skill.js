const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    category: {
      type: String,
      enum: ["Technical", "Soft"],
      required: [true, "Category is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);

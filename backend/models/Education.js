const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    field_of_study: {
      type: String,
      required: [true, "Field of study is required"],
      trim: true,
    },
    university: {
      type: String,
      required: [true, "University is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    start_date: {
      type: String,
      trim: true,
    },
    end_date: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Education", educationSchema);

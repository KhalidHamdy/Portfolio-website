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
      type: String, // stored as "YYYY" or "YYYY-MM" string to match the UI format
      trim: true,
    },
    end_date: {
      type: String, // null / empty = still studying
      trim: true,
    },
  },
  { timestamps: true }
);

// ── Queries ──────────────────────────────────────────────────────────────────

/** Return every education document */
const getAllEducation = () =>
  mongoose.model("Education", educationSchema).find();

/** Insert a single new education document */
const addEducation = (data) =>
  mongoose.model("Education", educationSchema).create(data);

/** Delete an education entry by its MongoDB _id */
const deleteEducation = (id) =>
  mongoose.model("Education", educationSchema).findByIdAndDelete(id);

// ─────────────────────────────────────────────────────────────────────────────
module.exports = mongoose.model("Education", educationSchema);
module.exports.getAllEducation = getAllEducation;
module.exports.addEducation = addEducation;
module.exports.deleteEducation = deleteEducation;

const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: [true, "Institution name is required"],
      trim: true,
    },
    degree: {
      type: String,
      required: [true, "Degree is required"],
      trim: true,
    },
    fieldOfStudy: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date, // null = still studying
    },
    grade: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    logo: {
      type: String,
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

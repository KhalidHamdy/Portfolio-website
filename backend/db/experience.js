const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    start_date: {
      type: String, // stored as "YYYY-MM" string to match the UI format
      trim: true,
    },
    end_date: {
      type: String, // empty = current job
      trim: true,
    },
  },
  { timestamps: true }
);

// ── Queries ──────────────────────────────────────────────────────────────────

/** Return every experience document */
const getAllExperiences = () =>
  mongoose.model("Experience", experienceSchema).find();

/** Insert a single new experience document */
const addExperience = (data) =>
  mongoose.model("Experience", experienceSchema).create(data);

/** Delete an experience entry by its MongoDB _id */
const deleteExperience = (id) =>
  mongoose.model("Experience", experienceSchema).findByIdAndDelete(id);

// ─────────────────────────────────────────────────────────────────────────────
module.exports = mongoose.model("Experience", experienceSchema);
module.exports.getAllExperiences = getAllExperiences;
module.exports.addExperience = addExperience;
module.exports.deleteExperience = deleteExperience;

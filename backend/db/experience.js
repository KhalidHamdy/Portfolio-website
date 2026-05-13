const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position title is required"],
      trim: true,
    },
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Freelance", "Internship", "Contract"],
      default: "Full-time",
    },
    location: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date, // null = current job
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      trim: true,
    },
    technologies: {
      type: [String],
      default: [],
    },
    logo: {
      type: String,
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

// ─────────────────────────────────────────────────────────────────────────────
module.exports = mongoose.model("Experience", experienceSchema);
module.exports.getAllExperiences = getAllExperiences;
module.exports.addExperience = addExperience;

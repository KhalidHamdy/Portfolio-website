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

// ── Queries ──────────────────────────────────────────────────────────────────

/** Return every skill document */
const getAllSkills = () => mongoose.model("Skill", skillSchema).find();

/** Insert a single new skill document */
const addSkill = (data) => mongoose.model("Skill", skillSchema).create(data);

/** Delete a skill by its MongoDB _id */
const deleteSkill = (id) =>
  mongoose.model("Skill", skillSchema).findByIdAndDelete(id);

// ─────────────────────────────────────────────────────────────────────────────
module.exports = mongoose.model("Skill", skillSchema);
module.exports.getAllSkills = getAllSkills;
module.exports.addSkill = addSkill;
module.exports.deleteSkill = deleteSkill;

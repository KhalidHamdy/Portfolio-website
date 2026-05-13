const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    institute: {
      type: String,
      required: [true, "Institute is required"],
      trim: true,
    },
    end_date: {
      type: String, // stored as "YYYY-MM" string to match the UI format
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// ── Queries ──────────────────────────────────────────────────────────────────

/** Return every certification document */
const getAllCertifications = () =>
  mongoose.model("Certification", certificationSchema).find();

/** Insert a single new certification document */
const addCertification = (data) =>
  mongoose.model("Certification", certificationSchema).create(data);

/** Delete a certification by its MongoDB _id */
const deleteCertification = (id) =>
  mongoose.model("Certification", certificationSchema).findByIdAndDelete(id);

// ─────────────────────────────────────────────────────────────────────────────
module.exports = mongoose.model("Certification", certificationSchema);
module.exports.getAllCertifications = getAllCertifications;
module.exports.addCertification = addCertification;
module.exports.deleteCertification = deleteCertification;

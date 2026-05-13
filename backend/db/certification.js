const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Certification title is required"],
      trim: true,
    },
    issuer: {
      type: String,
      required: [true, "Issuing organization is required"],
      trim: true,
    },
    issueDate: {
      type: Date,
    },
    expiryDate: {
      type: Date,
    },
    credentialId: {
      type: String,
      trim: true,
    },
    credentialUrl: {
      type: String,
      trim: true,
    },
    image: {
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

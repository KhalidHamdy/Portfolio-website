const express = require("express");
const router = express.Router();
const Certification = require("../db/certification");

/**
 * GET /api/certifications
 * Returns all certifications in the collection
 */
router.get("/", async (req, res) => {
  try {
    const certifications = await Certification.getAllCertifications();
    res.status(200).json({ success: true, data: certifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/certifications
 * Adds a new certification
 * Body: { title, issuer, issueDate, expiryDate, credentialId, credentialUrl, image }
 */
router.post("/", async (req, res) => {
  try {
    const certification = await Certification.addCertification(req.body);
    res.status(201).json({ success: true, data: certification });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * DELETE /api/certifications/:id
 * Deletes a single certification by its _id
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Certification.deleteCertification(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Certification not found" });
    }
    res.status(200).json({ success: true, message: "Certification deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

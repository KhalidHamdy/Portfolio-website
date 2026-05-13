const express = require("express");
const router = express.Router();
const Experience = require("../db/experience");

/**
 * GET /api/experience
 * Returns all experience entries in the collection
 */
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.getAllExperiences();
    res.status(200).json({ success: true, data: experiences });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/experience
 * Adds a new experience entry
 * Body: { company, position, employmentType, location, startDate, endDate, isCurrent, description, technologies, logo }
 */
router.post("/", async (req, res) => {
  try {
    const experience = await Experience.addExperience(req.body);
    res.status(201).json({ success: true, data: experience });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * DELETE /api/experience/:id
 * Deletes a single experience entry by its _id
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Experience.deleteExperience(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Experience entry not found" });
    }
    res.status(200).json({ success: true, message: "Experience entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

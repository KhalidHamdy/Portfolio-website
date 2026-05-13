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

module.exports = router;

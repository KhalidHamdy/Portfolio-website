const express = require("express");
const router = express.Router();
const Education = require("../db/education");

/**
 * GET /api/education
 * Returns all education entries in the collection
 */
router.get("/", async (req, res) => {
  try {
    const education = await Education.getAllEducation();
    res.status(200).json({ success: true, data: education });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/education
 * Adds a new education entry
 * Body: { institution, degree, fieldOfStudy, startDate, endDate, grade, description, logo }
 */
router.post("/", async (req, res) => {
  try {
    const education = await Education.addEducation(req.body);
    res.status(201).json({ success: true, data: education });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * DELETE /api/education/:id
 * Deletes a single education entry by its _id
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Education.deleteEducation(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Education entry not found" });
    }
    res.status(200).json({ success: true, message: "Education entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

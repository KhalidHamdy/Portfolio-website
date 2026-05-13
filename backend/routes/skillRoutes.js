const express = require("express");
const router = express.Router();
const Skill = require("../db/skill");

/**
 * GET /api/skills
 * Returns all skills in the collection
 */
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.getAllSkills();
    res.status(200).json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/skills
 * Adds a new skill
 * Body: { name, category, level, icon }
 */
router.post("/", async (req, res) => {
  try {
    const skill = await Skill.addSkill(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;

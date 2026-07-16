const skillService = require("../services/skillService");
const asyncHandler = require("../middleware/asyncHandler");

const getAll = asyncHandler(async (req, res) => {
  const skills = await skillService.getAll();
  res.status(200).json({ success: true, data: skills });
});

const create = asyncHandler(async (req, res) => {
  const skill = await skillService.create(req.body);
  res.status(201).json({ success: true, data: skill });
});

const remove = asyncHandler(async (req, res) => {
  await skillService.remove(req.params.id);
  res.status(200).json({ success: true, message: "Skill deleted successfully" });
});

module.exports = { getAll, create, remove };

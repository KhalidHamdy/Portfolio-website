const experienceService = require("../services/experienceService");
const asyncHandler = require("../middleware/asyncHandler");

const getAll = asyncHandler(async (req, res) => {
  const experiences = await experienceService.getAll();
  res.status(200).json({ success: true, data: experiences });
});

const create = asyncHandler(async (req, res) => {
  const experience = await experienceService.create(req.body);
  res.status(201).json({ success: true, data: experience });
});

const remove = asyncHandler(async (req, res) => {
  await experienceService.remove(req.params.id);
  res.status(200).json({ success: true, message: "Experience entry deleted successfully" });
});

module.exports = { getAll, create, remove };

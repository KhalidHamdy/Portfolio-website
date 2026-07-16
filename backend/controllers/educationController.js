const educationService = require("../services/educationService");
const asyncHandler = require("../middleware/asyncHandler");

const getAll = asyncHandler(async (req, res) => {
  const education = await educationService.getAll();
  res.status(200).json({ success: true, data: education });
});

const create = asyncHandler(async (req, res) => {
  const entry = await educationService.create(req.body);
  res.status(201).json({ success: true, data: entry });
});

const remove = asyncHandler(async (req, res) => {
  await educationService.remove(req.params.id);
  res.status(200).json({ success: true, message: "Education entry deleted successfully" });
});

module.exports = { getAll, create, remove };

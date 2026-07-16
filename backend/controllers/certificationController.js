const certificationService = require("../services/certificationService");
const asyncHandler = require("../middleware/asyncHandler");

const getAll = asyncHandler(async (req, res) => {
  const certifications = await certificationService.getAll();
  res.status(200).json({ success: true, data: certifications });
});

const create = asyncHandler(async (req, res) => {
  const certification = await certificationService.create(req.body);
  res.status(201).json({ success: true, data: certification });
});

const remove = asyncHandler(async (req, res) => {
  await certificationService.remove(req.params.id);
  res.status(200).json({ success: true, message: "Certification deleted successfully" });
});

module.exports = { getAll, create, remove };

const experienceRepository = require("../repositories/experienceRepository");
const AppError = require("../utils/AppError");

const getAll = async () => {
  return await experienceRepository.findAll();
};

const create = async (data) => {
  if (!data.title || !data.company) {
    throw new AppError("Title and company are required", 400);
  }
  return await experienceRepository.create(data);
};

const remove = async (id) => {
  const deleted = await experienceRepository.deleteById(id);
  if (!deleted) {
    throw new AppError("Experience entry not found", 404);
  }
  return deleted;
};

module.exports = { getAll, create, remove };

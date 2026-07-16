const skillRepository = require("../repositories/skillRepository");
const AppError = require("../utils/AppError");

const getAll = async () => {
  return await skillRepository.findAll();
};

const create = async (data) => {
  if (!data.skill || !data.category) {
    throw new AppError("Skill name and category are required", 400);
  }
  return await skillRepository.create(data);
};

const remove = async (id) => {
  const deleted = await skillRepository.deleteById(id);
  if (!deleted) {
    throw new AppError("Skill not found", 404);
  }
  return deleted;
};

module.exports = { getAll, create, remove };

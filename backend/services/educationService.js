const educationRepository = require("../repositories/educationRepository");
const AppError = require("../utils/AppError");

const getAll = async () => {
  return await educationRepository.findAll();
};

const create = async (data) => {
  if (!data.field_of_study || !data.university) {
    throw new AppError("Field of study and university are required", 400);
  }
  return await educationRepository.create(data);
};

const remove = async (id) => {
  const deleted = await educationRepository.deleteById(id);
  if (!deleted) {
    throw new AppError("Education entry not found", 404);
  }
  return deleted;
};

module.exports = { getAll, create, remove };

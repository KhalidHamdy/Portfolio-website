const certificationRepository = require("../repositories/certificationRepository");
const AppError = require("../utils/AppError");

const getAll = async () => {
  return await certificationRepository.findAll();
};

const create = async (data) => {
  if (!data.title || !data.institute) {
    throw new AppError("Title and institute are required", 400);
  }
  return await certificationRepository.create(data);
};

const remove = async (id) => {
  const deleted = await certificationRepository.deleteById(id);
  if (!deleted) {
    throw new AppError("Certification not found", 404);
  }
  return deleted;
};

module.exports = { getAll, create, remove };

const Education = require("../models/Education");

const findAll = () => Education.find();
const create = (data) => Education.create(data);
const deleteById = (id) => Education.findByIdAndDelete(id);

module.exports = { findAll, create, deleteById };

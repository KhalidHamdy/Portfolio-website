const Experience = require("../models/Experience");

const findAll = () => Experience.find();
const create = (data) => Experience.create(data);
const deleteById = (id) => Experience.findByIdAndDelete(id);

module.exports = { findAll, create, deleteById };

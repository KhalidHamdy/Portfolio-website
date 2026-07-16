const Certification = require("../models/Certification");

const findAll = () => Certification.find();
const create = (data) => Certification.create(data);
const deleteById = (id) => Certification.findByIdAndDelete(id);

module.exports = { findAll, create, deleteById };

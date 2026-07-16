const Skill = require("../models/Skill");

const findAll = () => Skill.find();
const create = (data) => Skill.create(data);
const deleteById = (id) => Skill.findByIdAndDelete(id);

module.exports = { findAll, create, deleteById };

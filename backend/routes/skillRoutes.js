const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");
const validate = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");

const createSkillSchema = {
  skill: { required: true, type: "string" },
  category: { required: true, type: "string", enum: ["Technical", "Soft"] },
};

router.get("/", skillController.getAll);
router.post("/", authenticate, validate(createSkillSchema), skillController.create);
router.delete("/:id", authenticate, skillController.remove);

module.exports = router;

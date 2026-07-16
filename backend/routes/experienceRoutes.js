const express = require("express");
const router = express.Router();
const experienceController = require("../controllers/experienceController");
const validate = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");

const createExperienceSchema = {
  title: { required: true, type: "string" },
  company: { required: true, type: "string" },
};

router.get("/", experienceController.getAll);
router.post("/", authenticate, validate(createExperienceSchema), experienceController.create);
router.delete("/:id", authenticate, experienceController.remove);

module.exports = router;

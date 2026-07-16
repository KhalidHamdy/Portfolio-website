const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");
const validate = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");

const createEducationSchema = {
  field_of_study: { required: true, type: "string" },
  university: { required: true, type: "string" },
};

router.get("/", educationController.getAll);
router.post("/", authenticate, validate(createEducationSchema), educationController.create);
router.delete("/:id", authenticate, educationController.remove);

module.exports = router;

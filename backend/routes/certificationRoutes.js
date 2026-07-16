const express = require("express");
const router = express.Router();
const certificationController = require("../controllers/certificationController");
const validate = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");

const createCertificationSchema = {
  title: { required: true, type: "string" },
  institute: { required: true, type: "string" },
};

router.get("/", certificationController.getAll);
router.post("/", authenticate, validate(createCertificationSchema), certificationController.create);
router.delete("/:id", authenticate, certificationController.remove);

module.exports = router;

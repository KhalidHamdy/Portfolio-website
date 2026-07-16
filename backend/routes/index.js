const express = require("express");
const router = express.Router();

const skillRoutes = require("./skillRoutes");
const certificationRoutes = require("./certificationRoutes");
const educationRoutes = require("./educationRoutes");
const experienceRoutes = require("./experienceRoutes");

router.use("/skills", skillRoutes);
router.use("/certifications", certificationRoutes);
router.use("/education", educationRoutes);
router.use("/experience", experienceRoutes);

module.exports = router;

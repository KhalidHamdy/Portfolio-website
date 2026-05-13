require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDB");

// ── Route imports ─────────────────────────────────────────────────────────────
const skillRoutes = require("./routes/skillRoutes");
const certificationRoutes = require("./routes/certificationRoutes");
const educationRoutes = require("./routes/educationRoutes");
const experienceRoutes = require("./routes/experienceRoutes");

// ── App setup ─────────────────────────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api/skills", skillRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/experience", experienceRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running 🚀" });
});

// ── Start ─────────────────────────────────────────────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

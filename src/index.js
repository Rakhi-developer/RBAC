const express = require("express");
const dotenv = require("dotenv").config();
const dbconnect = require("./config/dbconnect.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes=require("./routes/userRoutes.js");

dbconnect();

const app = express();

// Middleware
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// server start
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

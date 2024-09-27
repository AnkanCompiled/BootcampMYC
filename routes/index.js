const express = require("express");
const userRoutes = require("./userRoute");
const router = express.Router();

router.use("/user", userRoutes);

module.exports = router;

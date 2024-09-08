const express = require("express");
const Tour = require("../model/tourModel");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(200).json(tour);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

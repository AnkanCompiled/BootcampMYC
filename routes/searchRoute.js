const express = require("express");
const Tour = require("../model/tourModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tourFind = await Tour.find({
      location: req.query.location,
      tourType: req.query.tourType,
    });
    if (tourFind) {
      res.status(200).json(tourFind);
    } else {
      res.status(200).json({ status: "no tour by query found" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

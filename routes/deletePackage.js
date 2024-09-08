const express = require("express");
const Tour = require("../model/tourModel");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    if (await Tour.findOne({ _id: req.params.id })) {
      const deleteTour = await Tour.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteTour);
    } else {
      res.status(200).json({ status: "tour id not present" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

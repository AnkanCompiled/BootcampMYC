const express = require("express");
const Tour = require("../model/tourModel");

const router = express.Router();

router.post("/:id", async (req, res, next) => {
  try {
    if (await Tour.findOne({ _id: req.params.id })) {
      const updatedTour = await Tour.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }, // Only update fields provided in `updatedData`
        { new: true } // Return the updated document
      );
      res.status(200).json(updatedTour);
    } else {
      res.status(200).json({ status: "tour id not present" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const express = require("express");
const Book = require("../model/bookingModel");
const token = require("../config/token");

const router = express.Router();

router.post("/:id", async (req, res, next) => {
  try {
    const newBook = new Book({
      tourPackageId: req.params.id,
      status: "booked",
    });
    await newBook.save();
    res.status(200).json(newBook);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

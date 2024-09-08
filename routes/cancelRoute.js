const express = require("express");
const Book = require("../model/bookingModel");
const token = require("../config/token");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const deleteBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: { status: "cancelled" } }, // Only update fields provided in `updatedData`
      { new: true } // Return the updated document
    );
    res.status(200).json(deleteBook);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

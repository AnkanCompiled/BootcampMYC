const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  tourPackageId: { type: String, required: true },
  status: {
    type: String,
    enum: ["booked", "cancelled"],
  },
  bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);

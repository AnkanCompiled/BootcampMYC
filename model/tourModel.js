const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  day: { type: Number },
  description: { type: String },
});

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  tourType: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  itinerary: [itinerarySchema],
});

module.exports = mongoose.model("Tour", tourSchema);

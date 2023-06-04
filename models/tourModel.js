const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"]
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  rating: {
    type: Number,
    required: true,
    default: 4.6
  }
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

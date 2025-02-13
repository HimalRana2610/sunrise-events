const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  eventType: { type: String, required: true },
  address: { type: String, required: true },
  eventDate: { type: Date, required: true },
  description: { type: String }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    date: { type: String, required: true },
    time_day: { type: String, default: "08:00 - 12:00"},
    time_night: { type: String, default: "13:00 - 17:00"},
    type_of_customer: { type: String, required: true},
    type_of_service: { type: String, required: true},
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    status: { type: String, default: "Obekräftad"}
});

const BookingModel = mongoose.model("Bookings", bookingSchema);

module.exports = BookingModel;
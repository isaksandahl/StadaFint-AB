const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    date: { type: String, required: true },
    time: { type: String, required: true},
    type_of_customer: { type: String, required: true},
    type_of_service: { type: String, required: true},
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    status: { type: String, default: "Obekräftad"}
});

const BookingModel = mongoose.model("Bookings", bookingSchema);

module.exports = BookingModel;
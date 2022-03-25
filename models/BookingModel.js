const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: Number, required: true},
    adress: { type: String, required: true},
    zip_code: { type: Number, required: true},
    date: { type: String, required: true },
    time: { type: String, required: true},
    type_of_customer: { type: String, required: true},
    type_of_service: { type: String, required: true},
    request: String,
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    status: { type: String, default: "Obekräftad"}
});

const BookingModel = mongoose.model("Bookings", bookingSchema);

module.exports = BookingModel;
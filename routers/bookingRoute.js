const express = require("express");

const router = express.Router();

const BookingModel = require("../models/BookingModel.js");

router.get("/", async (req, res) => {

});

router.post("/new", async (req, res) => {
    const { 
        firstname,
        lastname,
        email,
        phone,
        adress,
        zip_code,
        date,
        time,
        type_of_service,
        type_of_customer,
        request
    } = req.body;

    const newBooking = new BookingModel({
        firstname,
        lastname,
        email,
        phone,
        adress,
        zip_code,
        date,
        time,
        type_of_customer,
        type_of_service,
        request
    });

    await newBooking.save();

    console.log(newBooking);

    res.redirect("/");
});

module.exports = router;
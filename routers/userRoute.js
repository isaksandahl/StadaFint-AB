const express = require("express");

const router = express.Router();

const UsersModel = require("../models/UsersModel.js");

router.get('/', async (req, res) => {
    const users = await UsersModel.find().lean();
    res.render('home', { users })
})

module.exports = router;
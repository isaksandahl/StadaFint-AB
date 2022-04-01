require("dotenv").config();
require('../mongoose.js');

const express = require("express");
const router = express.Router();
const UsersModel = require("../models/UsersModel.js");
const utils = require('../utils.js');

router.get('/', (req, res) => {
    res.send('Hej');
});

router.get('/register', (req, res) => {
    res.render('users/users-create');
});

router.post('/register', async (req, res) => {
    const { username, password, confirmPassword, email } = req.body;

    UsersModel.findOne({ username }, async (err, user) => {
        if (user) {
            res.render('users/users-create', {
                userTakenError: "Username is already taken!",
            });
        } else if (password !== confirmPassword) {
            res.render("users/users-create", {
                confirmPassError: "Passwords do not match",
            })
        } else if (password.lenght <= 5) {
            res.render("users/users-create", {
                passLengthError: "Passwords need to be longer than 5 characters.",
            });
        } else if (email !== " " && utils.validateEmailAddress(email) === -1) {
            res.render("users/users-create", {
                emailNotValid: "Enter a correct email.",
            });
        } else {
            const newUser = new UsersModel({
                username,
                hashedPassword: utils.hashedPassword(password),
                email,
            });
        
            if (utils.validateUsername(newUser.username)) {
                await newUser.save();
                res.redirect("/");
            } else {
                res.render("users/users-create", {
                    usernameLenghtError: "Username needs to be more than 3 characters.",
                });
            }
        }
    });
});

router.get("/mina-sidor", async (req, res) => {
    res.render("my-pages");
});

module.exports = router;
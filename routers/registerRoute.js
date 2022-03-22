require('../mongoose.js')
const express = require("express");
const router = express.Router();
const UsersModel = require("../models/UsersModel.js");
const utils = require('../utils.js')

router.get('/register', (req, res) => {
    res.render('users/users-create');
})

router.get('/', (req, res) => {
    res.send('Hej')
})

router.post('/register', async (req, user) => {
    const { username, password, confirmPassword, email } = req.body;

    UsersModel.findOne({ username }, async (req, res) => {
        if (user) {
            res.render('users/users-create', {
                userTakenError: "Username is already taken!",
            });
        } else if (password !== confirmPassword) {
            res.render("users/users-create", {
                confirmPassError: "Passwords do not match",
            })
        } else if (password.length <= 5) {
            res.render("users/users-create", {
                passLengthError: "Passwords need to be longer than 5 characters.",
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
                })
            }
        }
    })
})

module.exports = router;
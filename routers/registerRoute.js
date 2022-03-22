require('../mongoose.js')
const express = require("express");
const router = express.Router();
const UsersModel = require("../models/UsersModel.js");

router.get('/register', (req, res) => {
    res.render('users/users-create');
})

router.get('/', (req, res) => {
    res.send('Hej')
})

router.post('/register', async (req, res) => {
    
})

module.exports = router;
const express = require("express");
const router = express.Router();

const UsersModel = require("../models/UsersModel.js");
const utils = require("../utils.js");
const jwt = require("jsonwebtoken");

router.get("/login", async (req, res) => {
    await UsersModel.findById(res.locals.userId).lean();
    res.render("users/users-login");
});
  
  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    UsersModel.findOne({ username }, async (err, user) => {
      if (user && utils.comparePassword(password, user.hashedPassword)) {
        
        const userData = { userId: user._id, username };
        const accessToken = jwt.sign(userData, process.env.JWTSECRET);
  
        res.cookie("token", accessToken);
  
        await user.save();
        res.redirect("/");
      } else {
        res.render("home", {
          error: "Something went wrong!",
        }); 
      }
    });
});
  
router.post("/log-out", (req, res) => {
    res.cookie("token", "", { maxAge: 0 });
    res.redirect("/");
});
  
module.exports = router;
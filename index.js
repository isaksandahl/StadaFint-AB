require("dotenv").config();
require("./mongoose.js");

const express = require("express");
const exphbs = require("express-handlebars");

const registerRoute = require("./routers/registerRoute.js");
const bookingRoute = require("./routers/bookingRoute.js");

const utils = require("./utils.js");

const UsersModel = require("./models/UsersModel.js");

const app = express();

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/user", registerRoute);
app.use("/bookings", bookingRoute);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/om-oss", (req, res) => {
  res.render("about");
});

app.get("/kontakt", (req, res) => {
  res.render("contact");
});

app.get("/seed-data", async (req, res) => {
  const admin = new UsersModel({
    username: "admin",
    hashedPassword: utils.getHashedPassword("12qw12qw"),
    email: "admin.stadafint@gmail.com",
    admin: true,
  });

  await admin.save();

  console.log(admin);

  res.redirect("/");
});

app.get("/betalning", (req, res) => {
  res.render("payment");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

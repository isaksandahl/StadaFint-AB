require("dotenv").config();
require("./mongoose.js");

const express = require("express");
const exphbs = require("express-handlebars");

const registerRoute = require("./routers/registerRoute.js");

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

app.use('/user', registerRoute);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

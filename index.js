require("dotenv").config();
require("./mongoose.js");

const express = require("express");
const exphbs = require("express-handlebars");

<<<<<<< HEAD
const registerRoute = require("./routers/registerRoute.js")
=======
const userRoute = require("./models/UsersModel.js");
>>>>>>> 3a659a1c71ef51648e97c7b9b06bb1688a0bfd6f

const utils = require("./utils.js");

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

<<<<<<< HEAD
app.use('/user', registerRoute);
=======
app.use("/user", userRoute);
>>>>>>> 3a659a1c71ef51648e97c7b9b06bb1688a0bfd6f

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

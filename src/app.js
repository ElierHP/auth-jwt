const express = require("express");
const userRoute = require("./route/user.route");
const mongoose = require("mongoose");

const app = express();

// Connect Mongoose
mongoose
  .connect("mongodb://localhost:27017/auth-jwt")
  .then(() => console.log("Connected to DB!"))
  .catch((error) => handleError(error));

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.listen(5000, () => {
  console.log("Listening at port 5000!");
});

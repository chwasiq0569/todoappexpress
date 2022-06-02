const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/todolist")
    .then((data) => console.log("CONNECTED"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

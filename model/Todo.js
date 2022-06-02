const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
const Todo = new mongoose.model("Todo", schema);

module.exports = Todo;

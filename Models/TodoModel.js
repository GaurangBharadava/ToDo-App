const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
});

const ToDo = mongoose.model("ToDo", toDoSchema);
module.exports = ToDo
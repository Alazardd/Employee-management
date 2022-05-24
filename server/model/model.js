const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
    unique: true,
  },

  salary: {
    type: String,
    required: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;

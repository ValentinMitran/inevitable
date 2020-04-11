const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
  },
  balance: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model("Stats", statsSchema);
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  Rank: Number,
  Name: String,
  Platform: String,
  Year: Number,
  Genre: String,
  Publisher: String,
  Global_Sales: Number,
});

module.exports = mongoose.model('Game', GameSchema);

const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: Number, required: true },
  file: {type : File, required: true},
  album: String,
  genre: String,
});

module.exports = mongoose.model('Song', songSchema);

var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  filename: String
})

var Song = new mongoose.model("Song", songSchema);

module.exports = Song;

/*
--song
    id
    name
    image
    artist
    mp3 file
    duration

--playlist
    id
    name
    image
    desc
    author
    songs
      id
*/

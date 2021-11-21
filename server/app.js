var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());

const CONNECTION_URL = '';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to MongoDB Atlas!");
}).catch(err => {
  console.log("Error: ", err.message);
});

app.get("/", (req, res) => {
  res.send("Welcome to the API Server");
});

app.post("/song", (req, res) => {
  res.send("Adding New Song");
  console.log("APP POST NEW SONG");
  const songData = req.body;

  Song.create({

    // name: musicData["header"]["name"],
    // duration: musicData["duration"],
    // notesCount: notesCount,
    // notes: noteDB

  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Added to DB, Check it once!");
    }
  })
});

app.get("/song/all", (req, res) => {
  console.log("RETRIEVING ALL SONGS");
  Song.find({}, (err, songs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(songs);
    }
  })
});

app.get("/song/:id", (req, res) => {
  console.log("RETRIEVING SINGLE SONG DATA");
  Song.find({ _id: req.params.id }, (err, song) => {
    if (err) {
      console.log(err);
    } else {
      res.send(song);
    }
  })
})

app.listen(process.env.PORT || 8080, function () {
  console.log("Chime Server StArTeD ");
});

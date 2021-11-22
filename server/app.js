var express = require("express");
var cors = require("cors");
const crypto = require('crypto');
const path = require('path');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var { connection, mongo } = require("mongoose");

const router = express.Router();
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const { file } = require("@babel/types");
var gfs;

const Song = require('./models/song.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());

const CONNECTION_URL = 'mongodb+srv://HariDB:HariDB@chime-cluster.xkfoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to MongoDB Atlas!");

  setUp();
}).catch(err => {
  console.log("Error: ", err.message);
});



const setUp = () => {
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('songs');

  const storage = new GridFsStorage({
    db: connection.db,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'songs'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage }).single('file');
  // const upload = multer({ storage }).fields([{ name: 'file', maxCount: 1 }, { name: 'name', maxCount: 1 }]);


  app.get('/song/all', (req, res) => {
    console.log("RETRIEVING ALL FILES FROM GFS");
    gfs.files.find().toArray((err, files) => {
      console.log(files.length);
      res.json(files);
    });
  });

  app.get('/songdata/all', (req, res) => {
    console.log("RETRIEVING ALL SONG DATA");
    Song.find({}, (err, songs) => {
      if (err) {
        console.log(err);
      } else {
        res.send(songs);
      }
    })
  });

  app.post('/song', upload, (req, res) => {
    Song.create({
      name: req.body.name,
      artist: req.body.artist,
      filename: req.file.filename
    }, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Added to DB, Check it once!");
      }
    });
    res.json({ file: req.file });
  });

  // app.get('/song/:songName', (req, res) => {
  //   gfs.files.findOne({
  //     filename: req.params.songName
  //   }, (err, song) => {
  //     res.json({ song });
  //   })
  // });

  app.get('/song/:songName', (req, res) => {
    gfs.files.findOne({
      filename: req.params.songName
    }, (err, song) => {
      if (song && song.contentType === 'audio/mpeg') {
        const readStream = gfs.createReadStream(song.filename);
        readStream.pipe(res);
        console.log("RETRIEVED MP3 FILE, PLAY IT!");
      } else {
        res.status(404).json({
          err: 'Not an audio'
        });
      }
    })
  });

  app.delete("/:id/:filename", (req, res) => {
    gfs.remove({ filename: req.params.filename }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Removed from GFS FILES');
      }
    });
    Song.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("Removed the song file");
        res.send("Removed the song file");
      }
    });
  });
}


app.get("/", (req, res) => {
  res.send("Welcome to the API Server");
});


app.listen(process.env.PORT || 8080, function () {
  console.log("Chime Server StArTeD ");
});

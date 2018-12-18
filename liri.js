var inquirer = require("inquirer")
require("dotenv").config();
var fs = require("fs");
var SpotifyApp = require("./spotify.js");
var BandsInTownApp = require("./bandsInTown.js");
var OmdbApp = require("./omdb.js");


var Spotify = new SpotifyApp();
var BandsInTown = new BandsInTownApp();
var Omdb = new OmdbApp();

inquirer
  .prompt([
    {
      type: "input",
      message: "Search Spotify, Bands in Town, or OMDB?",
      name: "selection"
    }
  ])
  .then(function (inquirerResponse) {
    switch (inquirerResponse.selection.replace(/\s/g, '').toLowerCase()) {
      case "spotify": spotify(); break;
      case "s": spotify(); break;
      case "bandsintown": bandsintown(); break;
      case "b": bandsintown(); break;
      case "omdb": omdb(); break;
      case "o": omdb(); break;
      default: doIt();
    }
  })

function spotify() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What song would you like to search for?",
        name: "song"
      }
    ])
    .then(function (inquirerResponse) {
      Spotify.findSong(inquirerResponse.song)
    })
};

function bandsintown() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What artist would you like to search for?",
        name: "band"
      }
    ])
    .then(function (inquirerResponse) {
      BandsInTown.findArtist(inquirerResponse.band)
    })
};

function omdb() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What movie would you like to search for?",
        name: "movie"
      }
    ])
    .then(function (inquirerResponse) {
      Omdb.findMovie(inquirerResponse.movie)
    })
};

function doIt() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    var dataArr = data.split(",");
    if (dataArr[0].toLowerCase().charAt(0) === "s") {
      Spotify.findSong(dataArr[1]);
    } else if (dataArr[0].toLowerCase().charAt(0) === "b") {
      BandsInTown.findArtist(dataArr[1])
    } else if (dataArr[0].toLowerCase().charAt(0) === "o") {
      Omdb.findMovie(dataArr[1]);
    } else {
      console.log("random.txt is formatted incorrectly.")
    }
  });
};
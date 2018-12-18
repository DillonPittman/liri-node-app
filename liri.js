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
      type:"input",
      message: "Search Spotify, Bands in Town, or OMDB?",
      name: "selection"
    }
  ])
.then(function(inquirerResponse){
  // console.log('HERE', inquirerResponse)
  switch(inquirerResponse.selection.replace(/\s/g, '').toLowerCase()){
    case "spotify": spotify(); break;
    case "s": spotify(); break;
    case "bandsintown": bandsintown(); break;
    case "b": bandsintown(); break;
    case "omdb": omdb(); break;
    case "o": omdb(); break;
    default: console.log("There was a problem with your entry: " + inquirerResponse.selection)
  }
})

function spotify(){
  // console.log("This'll be Spotify stuff.")
  inquirer
  .prompt([
    {
      type:"input",
      message: "What song would you like to search for?",
      name: "song"
    }
  ])
.then(function(inquirerResponse){
  // console.log('SPOTIFY', inquirerResponse.song)
    Spotify.findSong(inquirerResponse.song)
})
};

function bandsintown(){
  // console.log("This will be Bandsintown stuff.")
  inquirer
  .prompt([
    {
      type:"input",
      message: "What artist would you like to search for?",
      name: "band"
    }
  ])
.then(function(inquirerResponse){
  // console.log('BANDS', inquirerResponse.band)
  BandsInTown.findArtist(inquirerResponse.band)
})
};

function omdb(){
  // console.log("this will be OMDB")
  inquirer
  .prompt([
    {
      type:"input",
      message: "What movie would you like to search for?",
      name: "movie"
    }
  ])
.then(function(inquirerResponse){
  // console.log('SPOTIFY', inquirerResponse.movie)
  Omdb.findMovie(inquirerResponse.movie)
})
};



// pick (x,y)
// switch(x)
// case spotify
// spotify
// break
// case omdb
var inquirer = require("inquirer")
// require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var spotifyApp = require("./spotify.js")
var bandsInTownApp = require("./bandsInTown.js")
var omdbApp = require("./omdb.js")


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
  switch(inquirerResponse.selection){
    case "Spotify": spotify(); break;
    case "spotify": spotify(); break;
    case "Bandsintown": bandsintown(); break;
    case "bandsintown": bandsintown(); break;
    case "OMDB": omdb(); break;
    case "Omdb": omdb(); break;
    case "omdb": omdb(); break;
    default: console.log("There was a problem with your entry: " + inquirerResponse.selection)
  }
})

function spotify(){
console.log("This'll be Spotify stuff.")
};

function bandsintown(){
console.log("This will be Bandsintown stuff.")
};

function omdb(){
console.log("this will be OMDB")
}



// pick (x,y)
// switch(x)
// case spotify
// spotify
// break
// case omdb
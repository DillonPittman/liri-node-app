var inquirer = require(inquirer)
// require("dotenv").config();
// var spotify = new Spotify(keys.spotify);

inquirer
  .prompt([
    {
      type:"input",
      message: "Search Spotify, Bands in Town, or OMDB?",
      name: "selection"
    }
  ])
.then(function(a){
  console.log('HERE', a)
  switch(inquirerResponse.name){
    case "spotify": spotify(); break;
    case "bands in town": bandsInTown(); break;
    case "omdb": omdb(); break;
    default: console.log("Insufficient clearance to access feature: "+inquirerResponse.name)
  }
})

function spotify(){
console.log("This'll be Spotify stuff.")
};

function bandsInTown(){
console.log("This will be Bands In Town stuff.")
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
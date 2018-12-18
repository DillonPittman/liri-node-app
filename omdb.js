var fs = require("fs");
var axios = require("axios");

var OmdbApp = function() {
  var divider = "\n------------------------------------------------------------\n\n";

  this.findMovie = function(show) {
    var URL = "http://www.omdbapi.com/?apikey=de45c0f0&t=" + show;

    axios.get(URL).then(function(response) {
      var jsonData = response.data;
      console.log(jsonData)
      var movieData = [
        "Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "IMDB Rating: " + jsonData.imdbRating,
        "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
        "Country: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Genre(s): " + jsonData.Genre,
        "Director: " + jsonData.Director,
        "Actors: " + jsonData.Actors,
        "Summary: " + jsonData.Plot
      ].join("\n\n");

      fs.appendFile("log.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log(movieData)
      });
    });
  };
};

module.exports = OmdbApp;
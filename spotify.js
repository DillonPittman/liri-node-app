var fs = require("fs");
// var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var SpotifyApp = function () {
  var divider = "\n------------------------------------------------------------\n\n";

  this.findSong = function (songName) {
    spotify.search({ type: "track", query: songName }, function (error, data) {
      if (!error) {
        var data = data.tracks.items[0];
        var songData = [
          "Song Name: " + data.name,
          "Artist: " + data.artists[0].name,
          "Album: " + data.album.name,
          "Preview URL: " + data.external_urls.spotify,
        ].join("\n\n");
        fs.appendFile("log.txt", songData + divider, function (err) {
          if (err) throw err;
          console.log(songData)
        });
      } else {
        console.log("error occurred:" + error);
      }
    });
  };
};

module.exports = SpotifyApp;
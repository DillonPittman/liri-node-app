var fs = require("fs");
var axios = require("axios");

var BandsInTownApp = function () {
  var divider = "\n------------------------------------------------------------\n\n";

  this.findArtist = function (artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function (response) {
      var data = response.data[0];
      var bandData = [
        "Venue: " + data.venue.name,
        "Country: " + data.venue.country,
        "Date: " + data.datetime
      ].join("\n\n");

      fs.appendFile("log.txt", bandData + divider, function (err) {
        if (err) throw err;
        console.log(bandData)
      });
    });
  };
};

module.exports = BandsInTownApp;
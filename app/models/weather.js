'use strict';

var request = require('request');
function Weather (){
  this.zip = 0;
}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/forecast/q/'+zip+'.json';

    request(url, function(error, response, body){
      debugger;
      body = JSON.parse(body);

     var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    var temp = high + 'F';
    cb(temp);
});
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/forecast/q/'+zip+'.json';

    request(url, function(error, response, body){
          body = JSON.parse(body);

     var low = body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var temp = low + 'F';
    cb(temp);
});

};
module.exports = Weather;





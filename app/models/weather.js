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


Weather.avgHigh = function(zip, cb){
  var temps = [];
  var sumTemp = 0;
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/forecast10day/q/'+zip+'.json';

    request(url, function(error, response, body){
          body = JSON.parse(body);
      for(var i=0; i<10; i++){
     var temp = body.forecast.simpleforecast.forecastday[i].high.fahrenheit;
      temps.push(parseInt(temp));
      } 
      console.log(temps);
      for(var j=0; j<10; j++){
      sumTemp +=temps[j];
      }
    var avgTemp =sumTemp/10;
    cb(avgTemp);
});

};

Weather.avgLow = function(zip, cb){
  var temps = [];
  var sumTemp = 0;
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/forecast10day/q/'+zip+'.json';

    request(url, function(error, response, body){
          body = JSON.parse(body);
      for(var i=0; i<10; i++){
     var temp = body.forecast.simpleforecast.forecastday[i].low.fahrenheit;
      temps.push(parseInt(temp));
      } 
      console.log(temps);
      for(var j=0; j<10; j++){
      sumTemp +=temps[j];
      }
    var avgTemp =sumTemp/10;
    cb(avgTemp);
});

};


module.exports = Weather;





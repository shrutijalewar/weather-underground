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
    //var sdHigh = Weather.stdev(temps, avgTemp);
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
    //var sdLow = Weather.stdev(temps, avgTemp);
    
    
});

};
Weather.Lows = function(zip, cb){
  var temps = [];
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/forecast10day/q/'+zip+'.json';

    request(url, function(error, response, body){
          body = JSON.parse(body);
      for(var i=0; i<10; i++){
     var temp = body.forecast.simpleforecast.forecastday[i].low.fahrenheit;
      temps.push(parseInt(temp));
      } 
    cb(temps);
    });
};
    

Weather.Highs = function(zip, cb){
  var temps = [];
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/forecast10day/q/'+zip+'.json';

    request(url, function(error, response, body){
          body = JSON.parse(body);
      for(var i=0; i<10; i++){
     var temp = body.forecast.simpleforecast.forecastday[i].high.fahrenheit;
      temps.push(parseInt(temp));
      } 
    cb(temps);
    });
};

Weather.Deltas = function(zip, cb){
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/forecast10day/q/'+zip+'.json';
    request(url, function(error, response, body){
      body = JSON.parse(body);
      var temps = [];
      var forecasts = body.forecast.simpleforecast.forecastday;

      for(var i = 0; i < forecasts.length; i++){
        temps.push(parseInt(forecasts[i].high.fahrenheit) - parseInt(forecasts[i].low.fahrenheit));
      }

      cb(temps);
    });

};
Weather.moon = function(zip, cb){
  var url = 'http://api.wunderground.com/api/536b90dc843299c1/astronomy/q/'+zip+'.json';
    request(url, function(error, response, body){
      body = JSON.parse(body);
      var phase = 0;
      var percent = parseInt(body.moon_phase.percentIlluminated);
    if(percent <= 5){
      phase = 'New';
    }else if (percent <=44){
      phase = 'Crescent';
    }else if(percent <= 55){
      phase = 'Quarter';
    }else if(percent <= 94){
      phase = 'Gibbous';
    }else{
    phase = 'full';
    }
    cb(phase);
    });
};
   
//helper function//

Weather.stdev = function(numbers,avg){ 
  var stdev = 0;

  for(var i = 0; i < numbers.length; i++){
    stdev += Math.pow((numbers[i] - avg), 2);
     }

  return Math.sqrt(stdev/numbers.length);
};

module.exports = Weather;





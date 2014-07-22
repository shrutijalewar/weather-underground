/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('constructor', function(){
    it('should check todays weather', function(){
    });
  });
  describe('.high', function(){
    it('should report the high temperature',function(done){
      Weather.high(37203, function(temp){
        expect(temp).to.have.length.above(1);
        done();
      });
    });
  });
  describe('.low', function(){
    it('should report the low temperature',function(done){
      Weather.low(37203, function(temp){
        expect(temp).to.have.length.above(1);
        done();
      });
    });


  });
  describe('.avgHigh', function(){
    it('should report the average of highs for ten days',function(done){
      Weather.avgHigh(37209, function(temp){
        expect(temp).to.be.closeTo(90, 10);
        done();
      });
      });
 });
  describe('.avgLow', function(){
    it('should report the average of lows for ten days',function(done){
      Weather.avgLow(37209, function(temp){
        expect(temp).to.be.closeTo(65, 10);
        done();
      });
      });
 });
  describe('.stdev',function(){
     it('should find the stdev of a list of numbers', function(){
       var stdev = Weather.stdev([4,7,9,11,8,2,6],6.71);
       expect(stdev).to.be.closeTo(2.81, 0.01);
       });
     });


  describe('.Lows', function(){
    it('should report all the lows for ten days',function(done){
      Weather.Lows(37209, function(lows){
        expect(lows).to.be.length(10);
        done();

});
});
});
 describe('.Highs', function(){
    it('should report all the highs for ten days',function(done){
      Weather.Highs(37209, function(highs){
        expect(highs).to.be.length(10);
        done();

});
});
});
  describe('.Deltas', function(){
    it('should report the difference between the highs and lows for ten days',function(done){
      Weather.Deltas(37209, function(deltas){
        expect(deltas).to.be.length(10);
        done();

});
});
});
  describe('.moon', function(){
    it('should report the phase of the moon',function(done){
      Weather.moon(37203, function(moon){
        expect(moon).to.equal('Crescent');
        done();

});
});
});

});







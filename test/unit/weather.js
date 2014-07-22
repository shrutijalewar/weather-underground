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
});






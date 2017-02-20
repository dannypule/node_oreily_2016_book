"use strict";

var util = require('util');
var eventEmitter = require('events').EventEmitter;

var Foo = function(){

};

util.inherits(Foo, eventEmitter);

Foo.prototype.bar = function(){
  this.emit('foobar');
};

var foo = new Foo();

foo.on('foobar', function(){
  console.log('foobar!!!');
});

foo.bar();

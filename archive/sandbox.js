"use strict";

let buf = new Buffer('this is my pretty example');
let json = JSON.stringify(buf);

console.log(json);
"use strict";

// let str = 'This is my pretty example';
// let buf = new Buffer (str);
// let json = JSON.stringify(buf);
// let buf2 = new Buffer(JSON.parse(json).data);

// console.log(buf2.toString('utf8', 11, 17));
/*-------------------------------------------------------*/

// let StringDecoder = require('string_decoder').StringDecoder;
// let decoder = new StringDecoder('utf8');

// let euro = new Buffer([0xE2, 0x82]);
// let euro2 = new Buffer([0xAC]);

// console.log(decoder.write(euro));
// console.log(decoder.write(euro2));
// console.log(euro.toString());
// console.log(euro2.toString());
/*-------------------------------------------------------*/

// let StringDecoder = require('string_decoder').StringDecoder;
// let decoder = new StringDecoder('utf8');
// let buf = new Buffer(3);
// buf.write('€', 'utf8');
// console.log(decoder.write(buf));
/*-------------------------------------------------------*/

// var buf = new Buffer(6);

// //write values to buffer
// buf.writeUInt8(0x63, 0);
// buf.writeUInt8(0x61, 1);
// buf.writeUInt8(0x74, 2);
// buf.writeUInt8(0x73, 3);
// buf.writeUInt8(0x73, 4);
// buf.writeUInt8(0x73, 5);

// // now print out buffer as string
// console.log(buf.readUInt8(1));
/*-------------------------------------------------------*/

// var buf = new Buffer(4);

// buf[0] = 0x63;
// buf[1] = 0x61;
// buf[2] = 0x74;
// buf[3] = 0x73;

// console.log(buf.toString());
/*-------------------------------------------------------*/

// var buf1 = new Buffer('this is the way we build our buffer');
// var lnth = buf1.length;

// //create new buffer as slice of old
// var buf2 = buf1.slice(19,lnth);
// console.log(buf2.toString()); // build our buffer

// //modify second buffer
// buf2.fill('+++++', 0, 5);
// console.log(buf1.toString()); // ***** our buffer

// //show impact on first buffer
// console.log(buf1.toString()); // this is the way we ***** our buffer

// if (buf1.equals(buf2)) console.log('buffers are equal');
/*-------------------------------------------------------*/

// var buf1 = new Buffer('this is a new buffer with a string');

// //copy buffer
// var buf2 = new Buffer(10);
// buf1.copy(buf2);

// console.log(buf2.toString());
/*-------------------------------------------------------*/

var buf1 = new Buffer('1 is number one');
var buf2 = new Buffer('2 is number two');

var buf3 = new Buffer(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2));
console.log(buf2.compare(buf1));
console.log(buf1.compare(buf3));
/*-------------------------------------------------------*/

var fs = require('fs');
var async = require('async');

async.waterfall([
    readData,
    modify,
    writeData
], function (err, result) {
    if (err) {
        console.error(err.message);
    } else {
        console.log(result);
    }
});

function readData(callback) {
    fs.readFile('./data/data1.txt', 'utf-8', function (err, data) {
        callback(err, data);
    });
}

function modify(text, callback) {
    // var adjdata = text.replace(/somecompany\.com/g, 'burningbird.net');
    var adjdata = new Date();
    callback(null, adjdata);
}

function writeData(text, callback) {
    fs.writeFile('./data/data1.txt', text, function (err) {
        callback(err, text);
    });
}
var fs = require('fs'),
    async = require('async');

async.parallel({
    fruit1: function (callback) {
        fs.readFile('./data/fruit1.txt', 'utf8', function (err, data) {
            callback(err, data);
        });
    },
    fruit2: function (callback) {
        fs.readFile('./data/fruit2.txt', 'utf8', function (err, data) {
            callback(err, data);
        });
    },
    fruit3: function readData3(callback) {
        fs.readFile('./data/fruit3.txt', 'utf8', function (err, data) {
            callback(err, data);
        });
    },
}, function (err, result) {
    if (err) {
        console.log(err.message);
    } else {
        console.log(result);
    }
});
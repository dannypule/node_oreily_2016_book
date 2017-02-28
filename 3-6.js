// Example 3-6. Get objects from directory, test to look for files, read file test, modify, and write back out log results

// var fs = require('fs'),
//     async = require('async'),
//     _dir = './data/';

// var writeStream = fs.createWriteStream('./log.txt', {
//     'flags': 'a',
//     'encoding': 'utf8',
//     'mode': 0666
// });

// async.waterfall([
//     readDir,
//     loopFiles,
//     checkFile,
//     readData,
//     modify,
//     writeData,
//     logChange
// ], (err) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log('modified files');
//     }
// });

// function readDir(cb) {
//     fs.readdir(_dir, (err, files) => {
//         cb(err, files);
//     });
// }

// function loopFiles(files, cb) {
//     files.forEach((name) => {
//         cb(null, name);
//     });
// }

// function checkFile(file, cb) {
//     fs.stat(_dir + file, (err, stats) => {
//         cb(err, stats, file);
//     });
// }

// function readData(stats, file, cb) {
//     if (stats.isFile()) {
//         fs.readFile(_dir + file, 'utf8', (err, dat) => {
//             cb(err, file, data);
//         });
//     }
// }

// function modify(file, text, cb) {
//     // var adjdata = text.replace(/somecompany\.com/g, 'burningbird.net');
//     var adjdata = new Date();
//     cb(null, adjdata);
// }

// function writeData(file, text, cb) {
//     fs.writeFile(_dir + file, text, err => {
//         cb(err, file);
//     });
// }

// function logChange(file, cb) {
//     writeStream.write(`Changed ${file}\n`, 'utf8', err => {
//         cb(err);
//     });
// }













/////////////

var fs = require('fs'),
    async = require('async'),
    _dir = './data/';
var writeStream = fs.createWriteStream('./log.txt',
    {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': 0666
    });
async.waterfall([
    function readDir(callback) {
        fs.readdir(_dir, function (err, files) {
            callback(err, files);
        });
    },
    function loopFiles(files, callback) {
        files.forEach(function (name) {
            callback(null, name);
        });
    },
    function checkFile(file, callback) {
        fs.stat(_dir + file, function (err, stats) {
            callback(err, stats, file);
        });
    },
    function readData(stats, file, callback) {
        if (stats.isFile())
            fs.readFile(_dir + file, 'utf8', function (err, data) {
                callback(err, file, data);
            });
    },
    function modify(file, text, callback) {
        var adjdata = text.replace(/somecompany\.com/g, 'burningbird.net');
        callback(null, file, adjdata);
    },
    function writeData(file, text, callback) {
        fs.writeFile(_dir + file, text, function (err) {
            callback(err, file);
        });
    },
    function logChange(file, callback) {

        writeStream.write('changed ' + file + '\n', 'utf8',
            function (err) {
                callback(err);
            });
    }
], function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log('modified files');
    }
});

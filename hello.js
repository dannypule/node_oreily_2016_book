var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var query = require('url').parse(req.url, true).query;
    var name = query.name;
    var book = query.book;
    var idea = query.idea;

    if (!name) name = 'world';
    if (!book) book = 'bible';

    if (name === 'burningbird') {
        var file = 'phoenix.png';
        fs.stat(file, function(err, stat){
            if (err) {
                console.log(err);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Sorry, Burningbird isn\'t around right now \n');
            } else {
                fs.readFile(file, function(err, data){
                    res.contentType = 'image/png';
                    res.contentLength = stat.size;
                    res.end(data, 'binary');
                });
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Good evening Mr. ' + name + '\n' + 'Have you read your ' + book + ' and made money off your ' + idea + '\n' + req.url);
    }
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124');








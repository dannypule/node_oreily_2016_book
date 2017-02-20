var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response){
    console.log('request event');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});

server.on('connection', function(){
    console.log('connection event');
});

server.listen(8124, function(){
    console.log('listening event');
});

console.log('Server running on port 8124');

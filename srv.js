var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response){
    fs.readFile('./index.html', function(err, html){
        if (err) throw err;
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    });
}).listen(8124, function(){
    console.log('listening on port 8124');
});

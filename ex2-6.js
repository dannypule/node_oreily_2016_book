var eventEmitter = require('events').EventEmitter;
var counter = 0;

var em = new eventEmitter();

setInterval(function() { em.emit('timed', counter++); }, 0);

em.on('timed', function(data){
    console.log('timed %d', data);
});
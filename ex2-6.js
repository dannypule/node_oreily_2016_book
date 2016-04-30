var eventEmitter = require('events').EventEmitter;
var counter = 0;

var em = new eventEmitter();

setInterval(function() { em.emit('foo', counter++); }, 200);

em.on('foo', function(data){
    if (data < 10) {
      console.log('Timed: %d', data);
    } else {
      console.log('Timed: %d, exiting.', data);
      process.exit(0);
    }
});

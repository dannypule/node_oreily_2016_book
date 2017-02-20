var timer = setTimeout(function(name){
    console.log('Hello ' + name);
}, 1000, 'Danny');

var timerTwo = setTimeout(function(name){
    console.log('Bye ' + name);
}, 2000, 'Danny');

timer.unref();

console.log('waiting on timer...');

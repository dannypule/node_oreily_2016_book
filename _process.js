process.stdin.setEncoding('utf8');

var name;
var firstTime = true;

process.stdin.on('readable', function(){
    var input = process.stdin.read();

    if (input !== null && !firstTime) {
        if (!name) {
            name = input.trim();
            process.stdout.write('Hello ' + name + '!\n');
        } else {
            input = input.trim();

            if (!isNaN(input) && input.length > 0){
                process.stdout.write(name + ', ' + input.trim() + ' multiplied by 3 is ' + (input * 3) + '\n');
            } else {
                if (input === 'cold') {
                    process.stdout.write('Brrr, yep it\'s cold outside.\n');
                } else {
                    process.stdout.write(name + ', you said: ' + input + '\n');
                }
            }

            if (input.trim() === 'exit') {
                process.stdout.write('Goodbye!');
                process.exit(0);
            }
        }

        process.stdout.write('Enter a word or number: ');
    } else if (firstTime) {
        process.stdout.write('What is your name?\n');
        firstTime = false;
    }
});

var fs = require('fs');

var writeStream = fs.createWriteStream('./log.txt',
{
  'flags': 'a',
  'encoding': 'utf8',
  'mode': '0666'
});

writeStream.on('open', function(){
  //before accessing the directory
  var counter = 0;

  // get list of files
  fs.readdir('./data/', function(err, files){

    // for each file
    if (err) {
      console.log(err.message);
    } else {
      files.forEach(function(name){

        // modify contents
        fs.readFile('./data/' + name, 'utf8', function(err, data){

          if (err) {
            console.log(err.message);
          } else {
            var adjData = data.replace(/somecompany\.com/g,
                          'burningbird.net');

            // write to file
            fs.writeFile('./data/' + name, adjData, function(err){
              if (err) {
                console.log(err.message);
              } else {

                //log write
                writeStream.write('changed ' + name + '\n',
                  'utf8',
                  function(err){
                    if (err) {
                      console.log(err.message);
                    } else {
                      console.log('finished ' + name);
                      counter++;
                      if (counter>=files.length){
                        console.log('all done');
                      }
                    }
                  });
              }
            });
          }
        });
      });

      // console.log('all finished');
    }
  });
});

writeStream.on('error', function(err){
  console.error('ERROR: ' + err);
});

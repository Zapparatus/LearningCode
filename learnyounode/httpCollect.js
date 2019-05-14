var http = require('http');

var collected = ""

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    collected += data;
  });
  response.on('end', function () {
    console.log(collected.length);
    console.log(collected);
  });
});
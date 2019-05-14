var http = require('http')
, async = require('async');

var info = '';
var count = 0;

async.whilst(function () {return info != 'meerkat';}, function (cb) {
  http.get(process.argv[2], function (response) {
    let body = '';
    
    response.on('data', function (chunk) {
      body += chunk.toString();
    })
    
    response.on('end', function () {
      info = body.trim();
      count += 1;
      cb(null, count);
    })
    
    response.on('error', function(err) {
      cb(err);
    })
  })
}, function (err, data) {
  if (err)
  console.error(err);
  console.log(data);
});
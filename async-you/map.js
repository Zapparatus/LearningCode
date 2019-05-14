var http = require('http')
, async = require('async');

async.map([process.argv[2], process.argv[3]], function (item, cb) {
  let body = '';
  
  http.get(item, function (response) {
    response.on("data", function (chunk) {
      body += chunk;
    });
    response.on("end", function () {
      return cb(null, body);
    });
    response.on("error", function (err) {
      cb(err);
    });
  });
}, function (err, data) {
  if (err)
  console.error(err);
  console.log(data);
});
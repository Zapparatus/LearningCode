var fs = require('fs')
, http = require('http')
, async = require('async');

async.waterfall([
  function (cb) {
    fs.readFile(process.argv[2], 'utf8', cb);
  },
  
  function (data, cb) {
    let body = '';
    
    http.get(data, function (response) {
      response.on("data", function (chunk) {
        body += chunk;
      });
      response.on("end", function () {
        cb(null, body);
      });
      response.on("error", function (err) {
        cb(err);
      });
    });
  }
], function (err, data) {
  if (err)
  console.error(err);
  console.log(data);
});
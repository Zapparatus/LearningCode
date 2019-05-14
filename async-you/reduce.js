var http = require('http')
, async = require('async')
, querystring = require('querystring');

async.reduce(['one', 'two', 'three'], 0, function (memo, item, cb) {
  http.get(process.argv[2], {path: '/?'+querystring.stringify({number: item})}, function (response) {
    let body = '';
    
    response.on('data', function (chunk) {
      body += chunk.toString();
    });
    
    response.on('end', function () {
      cb(null, Number(body) + memo);
    });
    
    response.on('error', function (err) {
      cb(err);
    })
  });
}, function (err, data) {
  if (err)
  console.error(err);
  console.log(data);
});
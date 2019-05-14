var http = require('http')
    , async = require('async');

async.series([
    function (cb) {
        async.times(5, function (n, cb) {
            let post = http.request({hostname: process.argv[2], port: process.argv[3], path: "/users/create", method: "POST"}, function (response) {
                let body = '';
    
                response.on('data', function (chunk) {
                    body += chunk.toString();
                });
                response.on('end', function () {
                    cb(null, body);
                });
                response.on('error', function (err) {
                    cb(err);
                });
            });
            post.write(JSON.stringify({"user_id": n+1}));
            post.end();
        }, function (err, data) {
            if (err)
                cb(err);
            else
                cb(null, data);
        });
    },
    function (cb) {
        http.get({hostname: process.argv[2], port: process.argv[3], path: "/users"}, function (response) {
            let body = '';

            response.on('data', function (chunk) {
                body += chunk.toString();
            });
            response.on('end', function () {
                cb(null, body);
            });
            response.on('error', function (err) {
                cb(err);
            });
        });
    }
], function (err, data) {
    if (err)
        console.error(err);
    console.log(data[1]);
});
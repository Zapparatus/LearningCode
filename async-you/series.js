var http = require('http')
    , async = require('async');

async.series({
    requestOne: function (cb) {
        let body = '';

        http.get(process.argv[2], function (response) {
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
    },

    requestTwo: function (cb) {
        let body = '';

        http.get(process.argv[3], function (response) {
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
}, function (err, data) {
    if (err)
        console.error(err);
    console.log(data);
});
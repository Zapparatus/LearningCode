var http = require('http')

var finished = 0;
var results = {};
var index = 0;

process.argv.slice(2, process.argv.length).forEach(function (url) {
    results[url] = [index, ""];

    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            results[url][1] += data;
        });
        response.on('end', function () {
            finished += 1;

            if (finished >= 3) {
                Object.keys(results).forEach(function (key) {
                    console.log(results[key][1]);
                });
            }
        });
    });
});
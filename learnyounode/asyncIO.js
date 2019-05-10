function callback(err, data) {
	if (!err) {
		console.log(data.toString().split('\n').length - 1);
	}
}

var fs = require('fs');
var path = require('path')

fs.readFile(process.argv[2], callback);
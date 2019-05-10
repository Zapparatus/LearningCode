function callback(err, data) {
	if (!err) {
		for (var file in data) {
			let extension = path.extname(data[file]);
			extension = extension.substring(1, extension.length);
			if (extension == process.argv[3]) {
				console.log(data[file]);
			}
		}
	}
}

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], callback);
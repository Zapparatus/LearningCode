var fs = require('fs');
var path = require('path');

module.exports = function (dir, filter, callback) {
	fs.readdir(dir, function (err, data) {
        if (err)
            return callback(err);
        filtered = [];
        for (var file in data) {
            let extension = path.extname(data[file]);
            extension = extension.substring(1, extension.length);
            if (extension == filter) {
                filtered.push(data[file]);
            }
        }
        return callback(null, filtered);
    });
}
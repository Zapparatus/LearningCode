var mod = require('./asyncModFile.js');

function callback(err, data) {
  if (err)
  return;
  for (var file in data) {
    console.log(data[file]);
  }
}

mod(process.argv[2], process.argv[3], callback);
var fs = require('fs');

var info = fs.readFileSync(process.argv[2], 'utf8');

console.log(info.split('\n').length-1);
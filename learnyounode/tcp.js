var net = require('net');

function format(num) {
  if (num < 9) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

function now() {
  let date = new Date();
  return date.getFullYear() + '-' +
  format(date.getMonth() + 1) + '-' +
  format(date.getDate()) + ' ' +
  format(date.getHours()) + ':' +
  format(date.getMinutes());
}

var server = net.createServer(function (socket) {
  let date = new Date();
  socket.end(now() + "\n");
});
server.listen(process.argv[2]);
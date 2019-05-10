var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    if (request.method !== 'GET') {
        return response.end('Only GET is implemented.\n');
    }

    let info = url.parse(request.url, true);

    response.writeHead(200, {'Content-Type': 'application/json'});

    let date = new Date(info.search.split('=')[1]);
    let responseInfo = {};
    if (info.pathname === '/api/parsetime') {
        responseInfo['hour'] = date.getHours();
        responseInfo['minute'] = date.getMinutes();
        responseInfo['second'] = date.getSeconds();
    } else if (info.pathname === '/api/unixtime') {
        responseInfo['unixtime'] = date.getTime();
    }
    response.end(JSON.stringify(responseInfo) + '\n');
});
server.listen(process.argv[2]);
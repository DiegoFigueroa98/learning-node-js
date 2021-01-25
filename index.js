'use strict'

const http = require('http');

const handleServer = function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write('This is a flat text');
  res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
  console.log('Server on port 3000');
});
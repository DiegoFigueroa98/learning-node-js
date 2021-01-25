'use strict'

// const http = require('http');

// const colors = require('colors');

// const handleServer = function (req, res) {
//   res.writeHead(200, { 'Content-type': 'text/html' });
//   res.write('This is a flat text');
//   res.end();
// }

// const server = http.createServer(handleServer);

// server.listen(3000, function () {
//   console.log('Server on port 3000'.yellow);
// });

const express = require('express');

const colors = require('colors');

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Hello world with Express + Node.js</h1>');   
  res.end();
});

server.listen(3000, () => {
  console.log('Server on port 3000'.red);
})
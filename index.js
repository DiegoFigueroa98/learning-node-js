'use strict'

const os = require('os');
const fs = require('fs');

// Using os module
console.log(os.platform());
console.log(os.release());
console.log(`Total memory: ${os.totalmem()} bytes`);
console.log(`Free memory: ${os.freemem()} bytes`);

// Using fs module
// Callback -> Function executed when the previous process has finished
fs.writeFile('./text.txt', 'first line', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('File successfully created');
  }
});

console.log('Last line of code');

fs.readFile('./text.txt', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log(`Hi I'm waiting for the Async functions response`);
// const user = query('SELECT * FROM Users ');

// query('SELECT * FROM Users', function (err, users) {
//   if (err) {
//     console.log(err);
//   }
//   if (users) {

//   }
// })


'use strict'

const math = {};

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return `${num1} cannot be divided by zero`;
  } else {
    return num1 / num2;
  }
}

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

// This exports properties
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

// This exports objects, functions, variables, etc.
module.exports = math;
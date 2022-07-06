const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let summation = array.reduce((sum, number) => sum + number, 0);
  return summation;
};

const multiply = function (array) {
  let result = array.reduce((multiple, number) => multiple * number, 1);
  return result;
};

const power = function (a,b) {
  return Math.pow(a,b);
};

const factorial = function (a) {
  let factorial = 1;
  if (a === 0) return factorial;
  for (i= a; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

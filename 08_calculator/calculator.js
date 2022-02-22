const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  let sum = 0
	for (i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
};

const multiply = function(arr) {
  let product = 1
  for (i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  return product
};

const power = function(base, exponent) {
  return base**exponent
};

const factorial = function(num) {
  let value = 1;
	for(i = 0; i < num; i++) {
    value *= (num - i)
  }
  return value
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

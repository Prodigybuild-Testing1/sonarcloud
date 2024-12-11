// Basic arithmetic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero");
    return NaN;
  }
  return a / b;
}

// Power and root operations
function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(number) {
  if (number < 0) {
    console.log("Error: Negative number");
    return NaN;
  }
  return Math.sqrt(number);
}

// Trigonometric functions
function sin(degrees) {
  return Math.sin(degrees * Math.PI / 180);
}

function cos(degrees) {
  return Math.cos(degrees * Math.PI / 180);
}

function tan(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}

// Logarithmic functions
function log(base, value) {
  if (value <= 0 || base <= 0 || base === 1) {
    console.log("Error: Invalid logarithm base or value");
    return NaN;
  }
  return Math.log(value) / Math.log(base);
}

function naturalLog(value) {
  if (value <= 0) {
    console.log("Error: Natural log of non-positive number");
    return NaN;
  }
  return Math.log(value);
}

// Generating random numbers
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Rounding operations
function roundToDecimal(value, decimalPlaces) {
  return parseFloat(value.toFixed(decimalPlaces));
}

function floor(value) {
  return Math.floor(value);
}

function ceil(value) {
  return Math.ceil(value);
}

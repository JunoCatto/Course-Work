// Create a function that takes the name of a person as an argument, and prints
// out “Hello <name>” to the console.
// Hint: search online on how to concatenate two strings.

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
// Create a function that takes the name of a person as an argument, and prints
// out “Hello <name>” to the console.
// Hint: search online on how to concatenate two strings.

function greet(name) {
  // console.log(`Hello ${name}!`);
  // Use backticks and $ much like in C#. Also known as template literals.
  // can also use concatenation ie:
  // console.log("Hello " + name);

  document.getElementById("greeting").innerHTML = `Hello ${name}!`;
}

// var firstName = document.getElementById("name").value;
// greet(firstName);
// greet("John");

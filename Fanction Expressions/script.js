// Define a function expression assigned to the variable 'fun1'
const fun1 = function () {
  console.log("Hello World"); // Log "Hello World" to the console
};

// Call the function 'fun1'
fun1(); // Output: Hello World

// Define a function expression assigned to the variable 'fun2'
const fun2 = function (name) {
  console.log(`Hello ${name}`); // Log a greeting with the provided name to the console
};

// Call the function 'fun2' with the argument "Dulitha"
fun2("Dulitha"); // Output: Hello Dulitha

// Define an array of numbers
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Define a function expression assigned to the variable 'sum'
const sum = function (num1, num2) {
  return num1 + num2; // Return the sum of num1 and num2
};

// Use the 'reduce' method to apply the 'sum' function to accumulate a result from the 'nums' array
console.log(nums.reduce(sum)); // Output: 450

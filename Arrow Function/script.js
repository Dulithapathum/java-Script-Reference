// Define an arrow function named 'sum' that takes two parameters and returns their sum
const sum = (num1, num2) => {
  return num1 + num2; // Return the sum of num1 and num2
};

// Call the 'sum' function with arguments 10 and 20, and log the result to the console
console.log(sum(10, 20)); // Output: 30

// Define an Immediately Invoked Function Expression (IIFE) using arrow function syntax
(() => {
  console.log("Hello World"); // Log "Hello World" to the console
})();

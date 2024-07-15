let num1 = 10;
let num2 = num1;

if (num1 == num2) {
  // Check if num1 is equal to num2 (value comparison)
  console.log("Equal"); // Outputs "Equal" since num1 and num2 are both 10
}

let num3 = "10";

if (num1 === num3) {
  // Check if num1 is equal to num3 (value and type comparison)
  console.log("Equal data type and value"); // This will not run since num1 is a number and num3 is a string
} else {
  console.log("Not Equal Data Type And Values"); // Outputs "Not Equal Data Type And Values"
}

if (num1 != num3) {
  // Check if num1 is not equal to num3 (value comparison)
  console.log("Equal value"); // This will not run since num1 and num3 have the same value (10)
} else {
  console.log("Not Equal Values"); // Outputs "Not Equal Values"
}

if (num1 !== num3) {
  // Check if num1 is not equal to num3 (value and type comparison)
  console.log("Equal data type and value"); // This will run since num1 is a number and num3 is a string
} else {
  console.log("Not Equal Data Type And Values"); // This will not run
}

let name = ["amal", "nimal", "kamal", "pathum"]; // Initialize an array with names
console.log(...name); // Output the array elements individually using the spread operator

let numbers = [12, 34, 12, 8, 90, 45, 87, 45, 23, 54]; // Initialize an array with numbers
console.log(Math.max(...numbers)); // Find and output the maximum value in the array using the spread operator
console.log(Math.min(...numbers)); // Find and output the minimum value in the array using the spread operator

let username = "Dulitha pathum"; // Initialize a string with a name
console.log(username); // Output the string
console.log([...username]); // Convert the string into an array of characters using the spread operator and output it

console.log([...username, "6", "8"]); // Convert the string into an array of characters, add "6" and "8" to the array, and output it

console.log([...username].join("|")); // Convert the string into an array of characters, join them with a "|" separator, and output it

console.log([...name, ...numbers]); // Merge the name array, numbers array

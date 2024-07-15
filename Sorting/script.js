// Define an array of numbers
const nums = [10, 45, 2, 84, 35, 76, 48, 39, 97];

// Sort the numbers in ascending order
console.log(
  nums.sort((a, b) => {
    return a - b; // Compare function to sort numbers in ascending order
  })
);
// Output: [2, 10, 35, 39, 45, 48, 76, 84, 97]

// Define an array of fruit objects
const fruits = [
  { name: "Banana", color: "yellow", price: 25 },
  { name: "orange", color: "orange", price: 10 },
  { name: "apple", color: "green", price: 30 },
];

// Sort the fruit objects by their price in ascending order
console.log(
  fruits.sort((a, b) => {
    return a.price - b.price; // Compare function to sort fruits by price in ascending order
  })
);
// Output:
// [
//   { name: "orange", color: "orange", price: 10 },
//   { name: "Banana", color: "yellow", price: 25 },
//   { name: "apple", color: "green", price: 30 }
// ]

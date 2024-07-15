// Define an array of fruit objects
const fruits = [
  { name: "Apple", color: "Green" },
  { name: "Orange", color: "Orange" },
  { name: "Banana", color: "Yellow" },
  { name: "Coconut", color: "White" },
];

console.log(fruits); // Output the entire array of fruits
console.log("/////////////////////////");
console.log(fruits[1]); // Output the second fruit object in the array
console.log("/////////////////////////");
console.log(fruits[1].name); // Output the name of the second fruit object

// Add a new fruit object to the array
fruits.push({ name: "Pineapple", color: "Yellow" });
console.log(fruits); // Output the updated array of fruits
console.log("/////////////////////////");

// Use forEach to log the name of each fruit
fruits.forEach((fruit) => {
  console.log(fruit.name);
});
console.log("/////////////////////////");

// Use map to create a new array with a formatted string of each fruit's name and color
fruits.map((fruit) => {
  console.log(`${fruit.name} is ${fruit.color}`);
});
console.log("/////////////////////////");

// Use filter to create a new array with fruits that have the color 'Yellow'
const filterfruits = fruits.filter((fruit) => {
  return fruit.color === "Yellow";
});

console.log(filterfruits); // Output the filtered fruits

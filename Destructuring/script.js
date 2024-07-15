// Swapping values using array destructuring
let a = 1;
let b = 2;
[a, b] = [b, a]; // Swaps the values of a and b

console.log(a); // Output: 2
console.log(b); // Output: 1

// Array destructuring with rest parameter
const color = ["red", "yellow", "black", "white"];
const [firstcolor, secondcolor, ...othercolors] = color;

console.log(firstcolor); // Output: red
console.log(secondcolor); // Output: yellow
console.log(othercolors); // Output: ["black", "white"]

// Swapping elements in an array
[color[0], color[3]] = [color[3], color[0]]; // Swaps the first and last elements

console.log(color); // Output: ["white", "yellow", "black", "red"]

// Object destructuring
const person = {
  firstname: "Dulitha",
  lastname: "Pathum",
  age: 23,
};
const { firstname, lastname, age } = person;

console.log(firstname); // Output: Dulitha
console.log(lastname); // Output: Pathum
console.log(age); // Output: 23

// Destructuring in function parameters
function Display({ firstname, lastname, age }) {
  console.log(`Firstname: ${firstname}, Lastname: ${lastname}, Age: ${age}`);
}

Display(person); // Output: Firstname: Dulitha, Lastname: Pathum, Age: 23

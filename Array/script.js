let names = ["dulitha", "pathum", "sachini", "vihari"];
console.log(names);

names.push("nipuni"); // Add "nipuni" to the end of the array
console.log(names); // Output the array after adding "nipuni"

names.pop(); // Remove the last element from the array
console.log(names); // Output the array after removing the last element

names.unshift("amara"); // Add "amara" to the beginning of the array
console.log(names); // Output the array after adding "amara"

names.shift(); // Remove the first element from the array
console.log(names); // Output the array after removing the first element

console.log(names.length); // Output the length of the array

console.log(names.indexOf("pathum")); // Output the index of the element "pathum"

console.log(names.sort().reverse()); // Sort the array in ascending order and then reverse it to descending order

for (let i = 0; i < names.length; i++) {
  // Loop through the array using a traditional for loop
  console.log(names[i]); // Output each element of the array
}

for (let index in names) {
  // Loop through the array using a for-in loop to get the index
  console.log(index); // Output the index of each element
}

for (let name of names) {
  // Loop through the array using a for-of loop to get the element
  console.log(name); // Output each element of the array
}

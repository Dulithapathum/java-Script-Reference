let nums = [10, 20, 30, 40, 50]; // Initialize an array with numbers

nums.forEach(display); // Apply the display function to each element in the nums array

nums.forEach(show); // Apply the show function to each element in the nums array

function display(element, index, array) {
  array[index] = element * 2; // Modify each element of the array (for example, doubling each number)
}

function show(element) {
  console.log(element); // Output each element to the console
}

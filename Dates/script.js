// Create a new Date object representing the current date and time
const date1 = new Date();
console.log(date1); // Output the current date and time

// Create a new Date object with specific date and time
const date2 = new Date(2001, 10, 25, 10, 45, 55);
console.log(date2); // Output: Sun Nov 25 2001 10:45:55 (Note: month is zero-indexed, so 10 is November)

// Create another Date object representing the current date and time
const date3 = new Date();
console.log(date3); // Output the current date and time

// Get and log the current year
console.log(date3.getFullYear()); // Output: e.g., 2024

// Get and log the current month (zero-indexed, so January is 0, February is 1, etc.)
console.log(date3.getMonth()); // Output: e.g., 6 for July

// Get and log the current day of the month
console.log(date3.getDate()); // Output: e.g., 12

// Get and log the current hour
console.log(date3.getHours()); // Output: e.g., 14 for 2 PM

// Get and log the current minute
console.log(date3.getMinutes()); // Output: e.g., 30

// Get and log the current second
console.log(date3.getSeconds()); // Output: e.g., 15

// Set the year to 2025
date3.setFullYear(2025); // Set the year to 2025

// Set the month to April (3 since months are zero-indexed)
date3.setMonth(3); // Set the month to April (zero-indexed, so 3 is April)

// Set the day of the month to 23
date3.setDate(23); // Set the day of the month to 23

// Set the hour to 12 (noon)
date3.setHours(12); // Set the hour to 12 (noon)

// Set the minute to 23
date3.setMinutes(23); // Set the minute to 23

// Set the second to 5
date3.setSeconds(5); // Set the second to 5

// Get and log the updated year
console.log(date3.getFullYear()); // Output: 2025

// Get and log the updated month (zero-indexed, so April is 3)
console.log(date3.getMonth()); // Output: 3

// Get and log the updated day of the month
console.log(date3.getDate()); // Output: 23

// Get and log the updated hour
console.log(date3.getHours()); // Output: 12

// Get and log the updated minute
console.log(date3.getMinutes()); // Output: 23

// Get and log the updated second
console.log(date3.getSeconds()); // Output: 5

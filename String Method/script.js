let name = "     Dulitha pathum";

console.log(name.charAt(5)); // Outputs the character at index 5 (space character in this case)

console.log(name.indexOf("i")); // Finds the first occurrence of "i" and outputs its index (10)
console.log(name.lastIndexOf("a")); // Finds the last occurrence of "a" and outputs its index (17)
console.log(name.length); // Outputs the length of the string including spaces (19)
console.log(name); // Outputs the original string with leading spaces
console.log(name.trim()); // Removes leading and trailing spaces and outputs the trimmed string
console.log(name.toUpperCase()); // Converts the string to uppercase
console.log(name.toLowerCase()); // Converts the string to lowercase
console.log(name.repeat(5)); // Repeats the string 5 times and outputs it

console.log(name.startsWith(" ")); // Checks if the string starts with a space (true)
console.log(name.endsWith(" ")); // Checks if the string ends with a space (false)

let number = "076-543-1217";
console.log(number.replaceAll("-", "")); // Replaces all hyphens with an empty string, removing them

console.log(number.padStart(15, "0")); // Pads the start of the string with "0" until the total length is 15
console.log(number.padEnd(15, "0")); // Pads the end of the string with "0" until the total length is 15

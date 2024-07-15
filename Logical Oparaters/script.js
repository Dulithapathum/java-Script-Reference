let mark = 35;

if (mark < 35) {
  console.log("F"); // Fail
} else if (mark >= 35 && mark < 45) {
  console.log("D"); // Pass
} else if (mark >= 45 && mark < 55) {
  console.log("C"); // Average
} else if (mark >= 55 && mark < 65) {
  console.log("B"); // Good
} else if (mark >= 65 && mark < 75) {
  console.log("A"); // Very Good
} else if (mark >= 75) {
  console.log("A+"); // Excellent
} else {
  console.log("Invalid mark"); // For any unexpected cases
}

let isok = false;

if (!isok) {
  console.log("ok");
} else {
  console.log("Not ok");
}

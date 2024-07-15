let nums = [10, 20, 30, 40, 50];
const name = document.getElementById("name");
nums.map((element) => {
  name.textContent += `${element}, `;
});

const products = [
  { name: "dulitha", age: 12, marks: 45 },
  { name: "pathum", age: 22, marks: 89 },
  { name: "amal", age: 32, marks: 58 },
];

products.map((element) => {
  console.log(`Student Name Is :${element.name}`);
});

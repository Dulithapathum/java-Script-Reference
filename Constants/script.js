const input = document.getElementById("input");
const btn = document.getElementById("btn");
let area = document.getElementById("area");

const PI = 3.14; // Value that can't change
let redius;
let value;

btn.onclick = () => {
  redius = Number(input.value);
  value = PI * redius * redius;
  area.textContent = value;
};

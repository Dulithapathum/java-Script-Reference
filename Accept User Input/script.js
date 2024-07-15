// const name = window.prompt("Enter Your Name:");

// const content = document.getElementById("content");

// content.textContent = name;

const btn = document.getElementById("btn");

const input = document.getElementById("input");
btn.onclick = () => {
  let value = input.value;
  console.log(value);
};

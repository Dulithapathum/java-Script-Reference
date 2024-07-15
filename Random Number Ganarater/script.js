const value = document.getElementById("value");
const btn = document.getElementById("btn");
value.textContent = 0;
btn.onclick = () => {
  let randomnum = Math.floor(Math.random() * 10 + 1);
  value.textContent = randomnum;
};

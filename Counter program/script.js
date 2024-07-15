const counter = document.getElementById("counter");
const decreacebtn = document.getElementById("decreace");
const increacebtn = document.getElementById("increace");
const reset = document.getElementById("reset");
let value = 0;
counter.textContent = 0;

decreacebtn.onclick = () => {
  value -= 1;
  counter.textContent = value;
};

increacebtn.onclick = () => {
  value += 1;
  counter.textContent = value;
};

reset.onclick = () => {
  value = 0;
  counter.textContent = value;
};

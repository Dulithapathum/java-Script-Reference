const value = document.getElementById("value");
const CF = document.getElementById("CF");
const FC = document.getElementById("FC");
const btn = document.getElementById("btn");
const Temperature = document.getElementById("Temperature");

btn.onclick = () => {
  let Temperature_value = Number(value.value);
  if (CF.checked) {
    Temperature_value = 1.8 * Temperature_value + 32;
    Temperature.textContent = `${Temperature_value} F`;
  } else if (FC.checked) {
    Temperature_value = (Temperature_value - 32) / 1.8;
    Temperature.textContent = `${Temperature_value} C`;
  }
};

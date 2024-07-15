const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const master_card = document.getElementById("master_card");
const paypal = document.getElementById("paypal");
const btn = document.getElementById("btn");
const subscribetxt = document.getElementById("subscribetxt");
const paymenttxt = document.getElementById("paymenttxt");

btn.onclick = () => {
  if (subscribe.checked) {
    subscribetxt.textContent = "You Are Subscribe";
  } else {
    subscribetxt.textContent = "You Are Not Subscribe";
  }

  if (visa.checked) {
    paymenttxt.textContent = "Your Paying With Visa";
  } else if (master_card.checked) {
    paymenttxt.textContent = "Your Paying With Master Card";
  } else if (paypal.checked) {
    paymenttxt.textContent = "Your Paying With Paypal";
  } else {
    paymenttxt.textContent = "Please Select Payment Method";
  }
};

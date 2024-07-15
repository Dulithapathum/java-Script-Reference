let uservalue = Number(window.prompt("Enter Your Guess Number(1 - 10):"));

const randomnum = Math.floor(Math.random() * 10 + 1);

if (isNaN(uservalue)) {
  window.alert("Enter Valid Number");
} else if (uservalue === randomnum) {
  window.alert(`Your Guess Number Is Correct. Number is ${randomnum}`);
} else {
  window.alert(`Your Guess Number Is Incorrect.Correct Number Is ${randomnum}`);
}

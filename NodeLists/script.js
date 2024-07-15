const mybtn = document.querySelectorAll(".mybtn");
console.log(mybtn);

mybtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.style.color = "red";
  });
});

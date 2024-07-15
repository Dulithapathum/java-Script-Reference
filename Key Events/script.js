// document.addEventListener("keydown", () => {
//   console.log(`Key down Event : ${event.key}`);
// });

// document.addEventListener("keyup", () => {
//   console.log(`Key Up Event : ${event.key}`);
// });

const box = document.getElementById("box");
const moveamount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        y -= moveamount;
        console.log(y);
        break;
      case "ArrowDown":
        y += moveamount;
        console.log(y);
        break;
      case "ArrowLeft":
        x -= moveamount;
        console.log(x);
        break;
      case "ArrowRight":
        x += moveamount;
        console.log(x);
        break;
    }
  }

  box.style.top = `${y}px`;
  box.style.left = `${x}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.getElementById("btnAdd");
  const btnRemove = document.getElementById("btnRemove");
  const btnReplace = document.getElementById("btnReplace");
  const btnContains = document.getElementById("btnContains");
  const btnToggle = document.getElementById("btnToggle");

  // Add 'blue' class to the button
  btnAdd.addEventListener("click", () => {
    btnAdd.classList.add("blue");
    btnAdd.textContent = "Blue Class Added";
  });

  // Remove 'red' class from the button
  btnRemove.addEventListener("click", () => {
    btnRemove.classList.remove("red");
    btnRemove.textContent = "Red Class Removed";
  });

  // Replace 'black' class with 'green' on the button
  btnReplace.addEventListener("click", () => {
    if (btnReplace.classList.contains("black")) {
      btnReplace.classList.replace("black", "green");
      btnReplace.textContent = "Black Replaced with Green";
    } else {
      btnReplace.textContent = "Button is not black";
    }
  });

  // Check if 'green' class is present on the button
  btnContains.addEventListener("click", () => {
    if (btnContains.classList.contains("green")) {
      alert("Green class is present.");
    } else {
      alert("Green class is not present.");
    }
  });

  // Toggle between 'red' and 'black' classes on the button
  btnToggle.addEventListener("click", () => {
    if (btnToggle.classList.contains("red")) {
      btnToggle.classList.replace("red", "black");
      btnToggle.textContent = "Switched to Black";
    } else {
      btnToggle.classList.replace("black", "red");
      btnToggle.textContent = "Switched to Red";
    }
  });
});

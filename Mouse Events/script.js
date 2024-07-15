document.addEventListener("DOMContentLoaded", function () {
  // Click event
  const clickButton = document.getElementById("clickButton");
  clickButton.addEventListener("click", function () {
    alert("Button clicked!");
  });

  // Mouseover and Mouseout events
  const hoverDiv = document.getElementById("hoverDiv");
  hoverDiv.addEventListener("mouseover", function () {
    hoverDiv.style.backgroundColor = "lightblue";
  });
  hoverDiv.addEventListener("mouseout", function () {
    hoverDiv.style.backgroundColor = "";
  });
});

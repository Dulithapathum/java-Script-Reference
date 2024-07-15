// Using ID Selector
const title = document.getElementById("title");
title.style.backgroundColor = "yellow";
title.style.textAlign = "center";

// Using ClassName Selector
const color = document.getElementsByClassName("color");
for (let i = 0; i < color.length; i++) {
  color[i].style.fontWeight = "bold";
}

// Applying different styles to each color element
color[0].style.color = "yellow"; // Yellow
color[1].style.color = "orange"; // Orange
color[2].style.color = "red"; // Red
color[3].style.color = "pink"; // Pink
color[4].style.color = "blue"; // Blue
color[5].style.color = "green"; // Green

// Using Tag Name Selector
const h2elements = document.getElementsByTagName("h2");
for (let i = 0; i < h2elements.length; i++) {
  h2elements[i].style.backgroundColor = "red";
}

// Using querySelectorAll to select all h2 elements and change their text color
const allH2 = document.querySelectorAll("h2");
allH2.forEach((h2) => {
  h2.style.color = "white";
});

// Using querySelectorAll to select all elements with class 'vegetable'
const vegetables = document.querySelectorAll(".vegetable");
vegetables.forEach((veg) => {
  veg.style.backgroundColor = "green";
  veg.style.color = "white";
});

// Using querySelectorAll to select all elements with class 'non-vegetable'
const nonVegetables = document.querySelectorAll(".non-vegetable");
nonVegetables.forEach((nonVeg) => {
  nonVeg.style.backgroundColor = "brown";
  nonVeg.style.color = "white";
});

// Using Tag Name Selector to select all li elements and apply styles
const lielements = document.getElementsByTagName("li");
for (let i = 0; i < lielements.length; i++) {
  lielements[i].style.backgroundColor = "pink";
  lielements[i].style.color = "black";
}

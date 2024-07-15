// Create a new <h1> element and set its text content
const newH1 = document.createElement("h1");
newH1.textContent = "This is Append";

// Append the new  element to the end of the body
document.body.append(newH1);

/////////////////////////////////////

// Create a new <h2> element and set its text content
const newH2 = document.createElement("h2");
newH2.textContent = "This is Prepend";

// Prepend the new  element to the beginning of the body
document.body.prepend(newH2);

/////////////////////////////////////

// Create a new <h2> element and set its text content
const newH3 = document.createElement("h2");
newH3.textContent = "This is appendChild";

// Select the element with the id "box1"
const box1 = document.getElementById("box1");

// Append the new <h2> element as a child of the element with id "box1"
box1.appendChild(newH3);

/////////////////////////////////////

// Create a new <h2> element and set its text content
const newH4 = document.createElement("h2");
newH4.textContent = "This is removeChild";

// Select the element with the id "box2"
const box2 = document.getElementById("box2");

// Remove the <h2> element from the element with id "box2"
// This will cause an error if the <h2> element does not exist in "box2"
try {
  box2.removeChild(newH4);
} catch (error) {
  console.error("Element not found:", error);
}

/////////////////////////////////////

// Select the element with the id "box3"
const box3 = document.getElementById("box3");

// Create a new <li> element and set its text content
const newli = document.createElement("li");
newli.textContent = "Strawberry";

// Select the element with the id "Orange"
const Orange = document.getElementById("Orange");

// Insert the new <li> element before the element with id "Orange" in the element with id "box3"
box3.insertBefore(newli, Orange);
// The new <li> element will appear before the "Orange" element within "box3"

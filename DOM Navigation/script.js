// Selecting the parent element
var parentElement = document.getElementById("parentElement");

// firstElementChild
var firstElementChild = parentElement.firstElementChild;
console.log("First Element Child:", firstElementChild);

// lastElementChild
var lastElementChild = parentElement.lastElementChild;
console.log("Last Element Child:", lastElementChild);

// nextElementSibling
var middleChild = document.getElementById("middleChild");
var nextElementSibling = middleChild.nextElementSibling;
console.log("Next Element Sibling:", nextElementSibling);

// previousElementSibling
var previousElementSibling = middleChild.previousElementSibling;
console.log("Previous Element Sibling:", previousElementSibling);

// parentElement
var parentOfMiddleChild = middleChild.parentElement;
console.log("Parent Element:", parentOfMiddleChild);

// children
var children = parentElement.children;
console.log("Children:");
for (var i = 0; i < children.length; i++) {
  console.log(children[i]);
}

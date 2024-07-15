let name = "Dulitha Pathum"; // Initialize a global variable 'name' with the value "Dulitha Pathum"

function fun1() {
  console.log(name);
}

fun1();

function fun2() {
  let x = "Welcome"; // Initialize a local variable 'x' with the value "Welcome" inside the function
  console.log(x);
}

fun2();

console.log(x); // Attempt to print the variable 'x' to the console (this will cause an error because 'x' is not defined in this scope)

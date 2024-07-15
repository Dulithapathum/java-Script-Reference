function sum(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}

function display(result) {
  console.log(result);
}

sum(10, 20, display);

// Function definitions for tasks with simulated delays

// Task 1: Waits for 1 second, then logs a message and calls the callback
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 Complete");
    callback();
  }, 1000);
}

// Task 2: Waits for 1.5 seconds, then logs a message and calls the callback
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 Complete");
    callback();
  }, 1500);
}

// Task 3: Waits for 0.5 seconds, then logs a message and calls the callback
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 Complete");
    callback();
  }, 500);
}

// Task 4: Waits for 2 seconds, then logs a message and calls the callback
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 Complete");
    callback();
  }, 2000);
}

// Execute tasks in sequence using callbacks to ensure one task starts after the previous one completes
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks complete");
      });
    });
  });
});

// Function for summing two numbers and then performing a callback with the result
function sum(num1, num2, callback) {
  console.log(num1 + num2); // Logs the sum of num1 and num2
  callback(num1, num2); // Calls the callback with num1 and num2
}

// Call the sum function and pass a callback that logs the product of num1 and num2
sum(10, 10, (num1, num2) => {
  console.log(num1 * num2); // Logs the product of num1 and num2
});

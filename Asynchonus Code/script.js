// Synchronous tasks
(() => {
  console.log("Task 1"); // This will be executed first
})();
(() => {
  console.log("Task 2"); // This will be executed second
})();
(() => {
  console.log("Task 3"); // This will be executed third
})();
(() => {
  console.log("Task 4"); // This will be executed fourth
})();

// Asynchronous task
(() => {
  setTimeout(() => {
    console.log("Get Data From DB"); // This will be executed after a 3-second delay
    somefun(); // Call somefun after the data is "fetched"
  }, 3000); // 3000 milliseconds (3 seconds) delay
})();

function somefun() {
  console.log("Show Data From DB"); // This function is called after "Get Data From DB" is logged
}

// Schedule a callback function to be executed after 3 seconds
const timeoutId = setTimeout(() => {
  console.log("Callback Function Run");
}, 3000);

// Simulate a condition to cancel the timeout before it executes
const shouldCancel = false;

if (shouldCancel) {
  // Cancel the scheduled timeout
  clearTimeout(timeoutId);
  console.log("Timeout canceled");
} else {
  // The callback function will run after 3 seconds
  console.log("Timeout not canceled");
}

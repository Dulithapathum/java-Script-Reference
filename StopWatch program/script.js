// Variables to keep track of time and interval
let startTime,
  elapsedTime = 0,
  interval;

// Function to update the stopwatch display
function updateTime() {
  elapsedTime = Date.now() - startTime;
  let totalSeconds = Math.floor(elapsedTime / 1000);
  let hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");

  let minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds = (totalSeconds % 60).toString().padStart(2, "0");

  document.getElementById(
    "stopwatch"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

// Start button event listener
document.getElementById("startButton").addEventListener("click", () => {
  if (!interval) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 1000);
  }
});

// Stop button event listener
document.getElementById("stopButton").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

// Reset button event listener
document.getElementById("resetButton").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
});

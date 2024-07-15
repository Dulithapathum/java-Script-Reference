// Set an interval to update the clock every second (1000 milliseconds)
setInterval(() => {
  // Get the clock element by its ID
  const clock = document.getElementById("clock");

  // Create a new Date object representing the current date and time
  let date = new Date();

  // Extract hours, minutes, and seconds from the date object
  // Convert them to strings and pad with leading zeros if necessary
  let hour = date.getHours().toString().padStart(2, "0");
  let minute = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  // Update the text content of the clock element to display the current time
  clock.textContent = `${hour}:${minute}:${second}`;
}, 1000); // Interval duration set to 1000 milliseconds (1 second)

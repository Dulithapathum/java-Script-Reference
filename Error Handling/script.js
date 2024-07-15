try {
  // Code that may throw an error
  let result = 10 / 2;

  console.log("Result:", result);
} catch (error) {
  // Handling the error
  console.error("An error occurred:", error.message);
} finally {
  // Code that will always execute, regardless of whether an error was thrown
  console.log("Cleanup actions, always runs.");
}

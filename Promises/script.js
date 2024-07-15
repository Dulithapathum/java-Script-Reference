document.addEventListener("DOMContentLoaded", () => {
  const getToyButton = document.getElementById("getToyButton");
  const message = document.getElementById("message");

  getToyButton.addEventListener("click", async () => {
    message.textContent = "Waiting for your toy...";
    try {
      const toy = await waitForToy();
      message.textContent = toy;
    } catch (error) {
      message.textContent = "Sorry, there was a problem: " + error;
    } finally {
      console.log("Toy fetching operation complete");
    }
  });

  // Function to simulate waiting for a toy
  async function waitForToy() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.1; // 90% chance of success
        if (success) { 
          resolve("Here is your toy!");
        } else {
          reject("The toy couldn't be delivered.");
        }
      }, 2000); // Wait for 2 seconds
    });
  }
});

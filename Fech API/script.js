// Example 1: Basic Fetch Request
// Fetch data for a specific Pokémon ("ditto") from the Pokémon API
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    // Convert the response to JSON
    return response.json();
  })
  .then((data) => {
    // Log the name of the Pokémon to the console
    console.log(data.name);
  })
  .catch((error) => {
    // Log any errors that occur during the fetch
    console.error(error);
  });

// Example 2: Fetch Request with Error Handling
// Fetch data for a specific Pokémon ("ditto") from the Pokémon API
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    // Check if the response is not okay (status not in the range 200-299)
    if (!response.ok) {
      // Throw an error with a custom message
      throw new Error("Could not fetch resource");
    } else {
      // Convert the response to JSON
      return response.json();
    }
  })
  .then((data) => {
    // Log the name of the Pokémon to the console
    console.log(data.name);
  })
  .catch((error) => {
    // Log any errors that occur during the fetch
    console.error(error);
  });

///////////////////////////////////////////////

// Get references to the input field and image element
const img = document.getElementById("img");
const input = document.getElementById("input");

// Async function to fetch data based on user input
async function fetchData() {
  try {
    // Fetch data from the Pokémon API using the name entered in the input field
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`
    );

    // Check if the response is not okay (status not in the range 200-299)
    if (!response.ok) {
      // Throw an error with a custom message
      throw new Error("Could not fetch resource");
    }

    // Convert the response to JSON
    const data = await response.json();
    console.log(data);

    // Get the image URL of the Pokémon from the response data
    const pokemonImg = data.sprites.front_default;

    // Set the image source to the fetched image URL
    img.src = pokemonImg;
    img.style.display = "block";
  } catch (error) { 
    // Log any errors that occur during the fetch
    console.error(error);
  }
}

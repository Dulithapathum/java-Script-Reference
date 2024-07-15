const json1 = ["Dulitha", "Pathum", "Amal", "Nimal"];
const json2 = {
  Name: "Dulitha",
  Age: 12,
  Class: 15,
  Marks: 75,
  Hobbies: ["cricket", "elle"],
};
const json3 = [
  {
    Name: "Dulitha",
    Age: 12,
    Class: 15,
    Marks: 75,
    Hobbies: ["cricket", "elle"],
  },
  {
    Name: "Pathum",
    Age: 12,
    Class: 15,
    Marks: 75,
    Hobbies: ["cricket", "elle"],
  },
  { Name: "Amal", Age: 12, Class: 15, Marks: 75, Hobbies: ["cricket", "elle"] },
  {
    Name: "Kamal",
    Age: 12,
    Class: 15,
    Marks: 75,
    Hobbies: ["cricket", "elle"],
  },
];

console.log(JSON.stringify(json1)); // Converts json1 to a JSON string
console.log(JSON.stringify(json2)); // Converts json2 to a JSON string
console.log(JSON.stringify(json3)); // Converts json3 to a JSON string

////////////////////////////////////////////////////////////////////////////////////////////
const jsonname = `["Dulitha", "Pathum", "Amal", "Nimal"]`;
const jsonstudent = `{
  "Name": "Dulitha",
  "Age": 12,
  "Class": 15,
  "Marks": 75,
  "Hobbies": ["cricket", "elle"]
}`;
const jsonpeople = `[
  {
    "Name": "Dulitha",
    "Age": 12,
    "Class": 15,
    "Marks": 75,
    "Hobbies": ["cricket", "elle"]
  },
  {
    "Name": "Pathum",
    "Age": 12,
    "Class": 15,
    "Marks": 75,
    "Hobbies": ["cricket", "elle"]
  },
  { "Name": "Amal", "Age": 12, "Class": 15, "Marks": 75, "Hobbies": ["cricket", "elle"] },
  {
    "Name": "Kamal",
    "Age": 12,
    "Class": 15,
    "Marks": 75,
    "Hobbies": ["cricket", "elle"]
  }
]`;

console.log(JSON.parse(jsonname)); // Converts jsonname JSON string to JavaScript array
console.log(JSON.parse(jsonpeople)); // Converts jsonpeople JSON string to JavaScript array of objects
console.log(JSON.parse(jsonstudent)); // Converts jsonstudent JSON string to JavaScript object

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const file = [
  {
    Name: "Dulitha",
    Age: 12,
    Class: 15,
    Marks: 75,
    Hobbies: ["cricket", "elle"],
  },
  {
    Name: "Pathum",
    Age: 12,
    Class: 15,
    Marks: 75,
    Hobbies: ["cricket", "elle"],
  },
  { Name: "Amal", Age: 12, Class: 15, Marks: 75, Hobbies: ["cricket", "elle"] },
  {
    Name: "Kamal",
    Age: 12,
    Class: 15,
    Marks: 75,
    Hobbies: ["cricket", "elle"],
  },
];

const converjsonsring = JSON.stringify(file); // Convert array to JSON string
console.log(converjsonsring);

const jsobject = JSON.parse(converjsonsring); // Convert JSON string back to array
console.log(jsobject);

/////////////////////////////////////////////////////////////////////////////////////
fetch("People.json")
  .then((response) => {
    return response.json(); // Return the parsed JSON promise
  })
  .then((data) => {
    console.log(data); // Now 'data' contains the parsed JSON
  })
  .catch((error) => {
    console.error("Error:", error); // Catch any errors
  });

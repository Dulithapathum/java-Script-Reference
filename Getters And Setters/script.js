class Person {
  constructor(name, age) {
    this._name = name; // Use an underscore to indicate a private property
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Invalid name");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Invalid age");
    }
  }
}

const person1 = new Person("Alice", 25);

console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 25

// Using setters
person1.name = "Bob"; // Sets a new name
person1.age = 30; // Sets a new age

console.log(person1.name); // Output: Bob
console.log(person1.age); // Output: 30

// Trying to set invalid values
person1.name = ""; // Output: Invalid name
person1.age = -5; // Output: Invalid age

console.log(person1.name); // Output: Bob (unchanged)
console.log(person1.age); // Output: 30 (unchanged)

// Define the Animal class
class Animal {
  // Constructor to initialize name and age properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to log a message indicating the animal is moving
  Move = function () {
    console.log(`This ${this.name} is moving`);
  };
}

// Define the Cat class that inherits from Animal
class Cat extends Animal {
  // Constructor to initialize name, age, and color properties
  constructor(name, age, color) {
    // Call the parent class's constructor with name and age
    super(name, age);
    // Initialize the color property
    this.color = color;
  }
}

// Create an instance of Cat
const cat1 = new Cat("Tommy", 12, "Black");

// Log the color property of cat1
console.log(cat1.color); // Output: Black
// Log the name property of cat1
console.log(cat1.name); // Output: Tommy
// Log the age property of cat1
console.log(cat1.age); // Output: 12

// Call the Move method on the cat1 instance
cat1.Move(); // Output: This Tommy is moving

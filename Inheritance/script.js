// Define the Animal class
class Animal {
  // Property indicating the animal is alive
  alive = true;

  // Method to log a message indicating the animal is working
  work = function () {
    console.log(`This ${this.name} is working`);
  };
}

// Define the Dog class that inherits from Animal
class Dog extends Animal {
  // Property specific to Dog class
  name = "Dog";
}

// Define the Human class that inherits from Animal
class Human extends Animal {
  // Property specific to Human class
  name = "Human";
}

// Create an instance of Dog
const Dog1 = new Dog();
// Create an instance of Human
const Human1 = new Human();

// Call the work method on the Dog instance
Dog1.work(); // Output: This Dog is working
// Call the work method on the Human instance
Human1.work(); // Output: This Human is working

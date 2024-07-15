const person1 = {
  firstname: "Dulitha",
  lastname: "Pathum",
  age: 23,
  fullname: () => {
    return "Dulitha Pathum";
  },
};

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.fullname());

const person2 = {
  firstname: "amal",
  lastname: "perera",
  age: 55,
  fullname: () => {
    return "amal perera";
  },
};

console.log("////////////////");
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.fullname());

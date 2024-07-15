function Car(name, color, model, year) {
  this.name = name;
  this.color = color;
  this.model = model;
  this.year = year;
}

const car1 = new Car("toyota", "blue", "ck-2", "2005");

console.log(car1.name);
console.log(car1.color);
console.log(car1.model);

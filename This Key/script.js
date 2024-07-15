const person1 = {
  firstname: "Dulitha",
  lastname: "Pathum",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

console.log(person1.fullname());

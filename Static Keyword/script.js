class User {
  static usercount = 0;
  constructor(name) {
    this.name = name;
    User.usercount++;
  }
}

const user1 = new User("Dulitha");
const user2 = new User("pathum");
const user3 = new User("amila");

console.log(user1.name);
console.log(User.usercount);

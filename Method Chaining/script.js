// NO METHOD CHAINING

let username = window.prompt("Enter User Name :");
username = username.trim();
let firstletter = username.charAt("0");

let otherletters = username.slice(1);
firstletter = firstletter.toUpperCase();
otherletters = otherletters.toLowerCase();

username = firstletter + otherletters;
console.log(username);

// USING METHOD CHAINING

console.log(
  username.trim().charAt("0").toUpperCase() +
    username.trim().username.slice(1).toLowerCase()
);

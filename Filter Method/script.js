let num = [10, 20, 30, 40, 50, 60, 70];

console.log(
  num.filter((element) => {
    return element > 50;
  })
);

const names = ["Dulitha", "pathum", "amal", "kamal"];

let letters = names.filter((element) => {
  return element.length <= 5;
});

console.log(letters);

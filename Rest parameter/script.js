function sum(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  console.log(total);
}

sum(1, 2, 10, 12, 34, 56, 78, 9);

function fun1(...params) {
  console.log(params.join(" "));
}

fun1("dulitha", "pathum", "thilakarathna");

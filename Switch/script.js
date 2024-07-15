const mark = document.getElementById("marks");
const btn = document.getElementById("btn");
const results = document.getElementById("result");

btn.onclick = () => {
  const marks = Number(mark.value);
  switch (marks) {
    case 35:
      results.textContent = "Fail";
      break;
    case 55:
      results.textContent = "Good";
      break;
    case 85:
      results.textContent = "Very Good";
      break;

    default:
      break;
  }
};

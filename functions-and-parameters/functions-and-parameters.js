console.log("===== FUNCTIONS AND PARAMETERS IN JS =====");


// console.log("M");
// console.log("U");
// console.log("B");
// console.log("A");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("R");

// const sayMyName = function () {
//   console.log("M");
//   console.log("U");
//   console.log("B");
//   console.log("A");
//   console.log("S");
//   console.log("H");
//   console.log("I");
//   console.log("R");
// }
// sayMyName();


// Add two numbers
const add = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide numbers";
  }

  return num1 + num2;
}

const result = add("5", 5);
console.log(result);

let score1 = "33"; // string NOT a number because it contains alphabets "33abc"
console.log(typeof score1);

let score2 = null; // null returns 0 in number
let score3 = undefined; // undefined returns NaN in number
let score7 = true; // boolean returns 1 in number

let isLoggedIn = 1; // boolean returns 1 in number

let isLoggedInOutput = Boolean(isLoggedIn);
console.log(isLoggedInOutput); // true


console.log("---------------------------------");

// let valueInNumber = Number(score1); // number

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
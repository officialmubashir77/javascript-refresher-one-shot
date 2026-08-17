console.log("Number and Math in JS");

const score = 400 ;
console.log(score);

// Number constructor 
const balance = new Number(500);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.4567;
console.log(otherNumber.toPrecision(4));

const hunderds = 100000;
console.log(hunderds.toLocaleString("en-IN"));

// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // 4

console.log(Math.round(4.9)); // 5

console.log(Math.ceil(4.1)); // 5

console.log(Math.floor(4.9)); // 4

console.log(Math.min(4,5,6,7)); // 4

console.log(Math.max(4,5,6,7)); // 7

console.log(Math.random()); // 0 to 1

console.log((Math.random() * 10 + 1).toFixed(0)); // 1 to 10 .toFixed  return as string

console.log(Math.floor(Math.random() * 10 + 1)); // 1 to 10


const minVal = 10 ;
const maxVal = 20 ;
// Values between 10 to 20
console.log(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)); // 10 to 20

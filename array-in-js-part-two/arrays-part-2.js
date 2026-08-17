console.log("===== ARRAYS IN JAVASCRIPT PART 2 =====");


// ==================================================
// 1. Do Arrays ko Combine karna
// ==================================================

const marvelHeroes = [
  "Thor",
  "Captain America",
  "Hulk",
  "Iron Man"
];

const dcHeroes = [
  "Superman",
  "Batman",
  "Flash",
  "Aquaman"
];


// --------------------------------------------------
// push()
// Agar poora array push karoge to array ke andar
// doosra array aa jayega.
//
// Original array CHANGE hota hai.
// --------------------------------------------------

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);

// Output:
// [
//   "Thor",
//   "Captain America",
//   "Hulk",
//   "Iron Man",
//   ["Superman", "Batman", "Flash", "Aquaman"]
// ]

// Yani DC Heroes ek nested array ban gaya.


// ==================================================
// 2. concat()
// Do ya zyada arrays ko combine karta hai.
//
// Original arrays ko CHANGE nahi karta.
// New array return karta hai.
// ==================================================

const allHeroes = marvelHeroes.concat(dcHeroes);

console.log("Using concat():", allHeroes);

// Output:
// [
//   "Thor",
//   "Captain America",
//   "Hulk",
//   "Iron Man",
//   "Superman",
//   "Batman",
//   "Flash",
//   "Aquaman"
// ]


// ==================================================
// 3. Spread Operator (...)
// Arrays ke elements ko spread/open kar deta hai.
//
// Modern JavaScript mein arrays combine karne ka
// bohat common tareeqa hai.
// ==================================================

const allHeroes2 = [...marvelHeroes, ...dcHeroes];

console.log("Using Spread Operator:", allHeroes2);


// Spread operator ko aise samjho:
//
// marvelHeroes
// ["Thor", "Captain America", "Hulk", "Iron Man"]
//
// ...marvelHeroes
// "Thor", "Captain America", "Hulk", "Iron Man"


// ==================================================
// 4. flat()
// Nested arrays ko simple / flat array mein convert karta hai.
// ==================================================

const nestedArray = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, 9, [10, 11]]
];

console.log("Nested Array:", nestedArray);


// flat(1)
// Sirf 1 level tak nested array kholega

const flatOneLevel = nestedArray.flat(1);

console.log("flat(1):", flatOneLevel);


// flat(Infinity)
// Har level ke nested arrays ko flat kar deta hai

const completelyFlatArray = nestedArray.flat(Infinity);

console.log("flat(Infinity):", completelyFlatArray);

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


// ==================================================
// 5. Array.isArray()
// Check karta hai value array hai ya nahi.
//
// true ya false return karta hai.
// ==================================================

console.log(Array.isArray("Mubashir"));
// false

console.log(Array.isArray(["Mubashir"]));
// true

console.log(Array.isArray([1, 2, 3]));
// true


// ==================================================
// 6. Array.from()
// Kisi iterable / array-like value ko array mein
// convert karta hai.
// ==================================================

const nameArray = Array.from("Mubashir");

console.log(nameArray);

// Output:
// ["M", "u", "b", "a", "s", "h", "i", "r"]


// --------------------------------------------------
// Important:
// Normal object ko directly Array.from() dene par
// expected object values nahi milti.
// --------------------------------------------------

const user = {
  name: "Mubashir"
};

console.log(Array.from(user));

// Output:
// []

// Kyun?
// Kyun ke normal object iterable nahi hota.


// Agar object ki values array mein chahiye:
console.log(Object.values(user));

// Output:
// ["Mubashir"]


// Agar object ki keys array mein chahiye:
console.log(Object.keys(user));

// Output:
// ["name"]


// Agar key + value dono chahiye:
console.log(Object.entries(user));

// Output:
// [["name", "Mubashir"]]


// ==================================================
// 7. Array.of()
// Multiple values ko ek new array mein convert karta hai.
// ==================================================

let score1 = "33";
let score2 = "200";
let score3 = "300";

const scores = Array.of(score1, score2, score3);

console.log(scores);

// Output:
// ["33", "200", "300"]


// Numbers hon tab bhi:
const numbers = Array.of(10, 20, 30);

console.log(numbers);

// Output:
// [10, 20, 30]
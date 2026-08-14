// console.log("Data Types Summary");

// Primitive Data Types and Non-Primitive Data Types

// Primitive Data Types:
// Null , Number, BigInt, Boolean, String, Symbol, Undefined
let age = 24; // number
let city = null; // object
let bigNumber = 1234567890123456789012345678901234567890n; // bigint
let isLoggedIn = false; // boolean
let name = "Mubashir"; // string
let symbol = Symbol("This is a symbol"); // symbol
let state; // undefined

// Non-Primitive Data Types: ||  Reference Types:
// Object, Array , Function
let myObj = {
    name: "Mubashir",
    age: 24,
    isLoggedIn: true,
    city: "Karachi"
};

let myArr = [ "Mubashir", 24, true, "Karachi" ];

let myFunc = function () {
    console.log("Hello World");
};
myFunc();


// In Type Script: // e.g let numberVal:number = 24;

let numberVal = 24;
let scoreVal = 100.3;

const isLoggedInNew = true;
const outSideTemp = null;
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumberNew = 1234567890123456789012345678901234567890n;
console.log(bigNumberNew);

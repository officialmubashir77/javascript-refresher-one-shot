"use strict"; // strict mode

// alert("Hello World!"); // we cant use in node.js because alert is not defined in node.js

console.log("Hello World!"); console.log("Hello World!"); // code readability is very important

// https://tc39.es/ecma262/ // ECMA-262 ECMAScript Language Specification 


// Data types in JavaScript are divided into two categories: 
// Primitive and Non-Primitive data types.

// Primitive data types:
// 1. Number
// 5. Null
// 3. Boolean
// 6. BigInt
// 2. String
// 7. Symbol
// 4. Undefined

// Non-Primitive data types:
// 1. Object
// 2. Function
// 3. Array
// 4. Date
// 5. RegExp
// 6. Error

let age = 24; // number
let city = null; // null
let BigInt = 1234567890123456789012345678901234567890n; // BigInt
let isLoggedIn = false; // boolean
let name = "Mubashir"; // string
let symbol = Symbol("This is a symbol"); // symbol
let state; // undefined

console.log(typeof age); // number
console.log(typeof city); // object
console.log(typeof BigInt); // bigint
console.log(typeof isLoggedIn); // boolean
console.log(typeof name); // string
console.log(typeof symbol); // symbol
console.log(typeof state); // undefined

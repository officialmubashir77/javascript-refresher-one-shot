console.log("===== OBJECTS IN JAVASCRIPT PART 2 =====");


// ==================================================
// 1. Creating an Object
// ==================================================

// Dono tarike object create karte hain:

// const tinderUser = new Object();

const tinderUser = {};


// Object mein properties add karna
tinderUser.id = "123abc";
tinderUser.name = "Mubashir";
tinderUser.isLoggedIn = true;

console.log("Tinder User:", tinderUser);

// Output:
// {
//   id: "123abc",
//   name: "Mubashir",
//   isLoggedIn: true
// }


// ==================================================
// 2. Nested Objects
// Object ke andar object ho sakta hai.
// ==================================================

const regularUser = {
  email: "0eB2A@example.com",

  fullName: {
    userFullName: {
      firstName: "Mubashir",
      lastName: "Ibrahim"
    }
  }
};

console.log("Regular User:", regularUser);


// Nested property access
console.log(
  "First Name:",
  regularUser.fullName.userFullName.firstName
);

// Output:
// Mubashir


// ==================================================
// 3. Optional Chaining (?.)
// ==================================================

// ?. ka use nested properties safely access karne ke liye hota hai.
//
// Agar koi property missing ho,
// JavaScript error throw karne ke bajaye
// undefined return karega.

console.log(
  regularUser.fullName?.userFullName?.firstName
);

// Output:
// Mubashir


// Example:
console.log(
  regularUser.address?.city
);

// Output:
// undefined


// Agar optional chaining na use karein:
//
// console.log(regularUser.address.city);
//
// Error aa sakta hai because address exist nahi karta.


// ==================================================
// 4. Combining Objects using Spread Operator (...)
// ==================================================

const obj1 = {
  1: "one",
  2: "two",
  3: "three"
};

const obj2 = {
  4: "four",
  5: "five",
  6: "six"
};


// Spread operator objects ko combine karta hai

const combinedObject = {
  ...obj1,
  ...obj2
};

console.log("Using Spread:", combinedObject);

// Output:
// {
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six"
// }


// ==================================================
// 5. Object.assign()
// Objects ko combine karne ka doosra method
// ==================================================

const assignedObject = Object.assign({}, obj1, obj2);

console.log("Using Object.assign:", assignedObject);


// Syntax:
//
// Object.assign(target, source1, source2)
//
// {} = target object
// obj1 & obj2 = source objects


// Usually modern JavaScript mein spread operator
// zyada readable aur commonly use hota hai:
//
// const combinedObject = { ...obj1, ...obj2 };


// ==================================================
// 6. Object.keys()
// Object ki sari keys ko array mein return karta hai.
// ==================================================

const obj1Keys = Object.keys(obj1);

console.log("Keys:", obj1Keys);

// Output:
// ["1", "2", "3"]

// Important:
// Object keys array ke form mein return hoti hain.


// ==================================================
// 7. Object.values()
// Object ki sari values ko array mein return karta hai.
// ==================================================

const obj2Values = Object.values(obj2);

console.log("Values:", obj2Values);

// Output:
// ["four", "five", "six"]


// ==================================================
// 8. Object.entries()
// Object ko key-value pair arrays mein convert karta hai.
// ==================================================

const obj1Entries = Object.entries(obj1);

console.log("Entries:", obj1Entries);

// Output:
// [
//   ["1", "one"],
//   ["2", "two"],
//   ["3", "three"]
// ]


// ==================================================
// 9. hasOwnProperty()
// Check karta hai property object ki apni property hai ya nahi.
//
// true / false return karta hai.
// ==================================================

console.log(obj1.hasOwnProperty("1"));
// true

console.log(obj1.hasOwnProperty("10"));
// false


// Modern alternative:
console.log(Object.hasOwn(obj1, "1"));
// true


// ==================================================
// 10. Array of Objects
// Real-world applications mein bohat common hai.
// ==================================================

const users = [
  {
    id: 1,
    email: "mubashir@example.com",
    name: "Mubashir"
  },

  {
    id: 2,
    email: "ali@example.com",
    name: "Ali"
  },

  {
    id: 3,
    email: "ashir@example.com",
    name: "Ashir"
  }
];

console.log("Users:", users);


// --------------------------------------------------
// Accessing specific user
// --------------------------------------------------

console.log(users[0]);

// Output:
// {
//   id: 1,
//   email: "mubashir@example.com",
//   name: "Mubashir"
// }


// Specific property
console.log(users[0].name);

// Output:
// Mubashir


console.log(users[1].email);

// Output:
// ali@example.com


// ==================================================
// 11. map() with Array of Objects
// ==================================================

// map() har element par function run karta hai
// aur normally ek NEW ARRAY return karta hai.

const userNames = users.map((user) => {
  return user.name;
});

console.log("User Names:", userNames);

// Output:
// ["Mubashir", "Ali", "Ashir"]


// Short syntax:
const userEmails = users.map(user => user.email);

console.log("User Emails:", userEmails);

// Output:
// [
//   "mubashir@example.com",
//   "ali@example.com",
//   "ashir@example.com"
// ]
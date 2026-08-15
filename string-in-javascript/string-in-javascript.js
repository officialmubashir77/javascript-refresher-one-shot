// console.log("Strings in JS");

// String Concatenation
let name1 = "Mubashir";
let age1 = 24;
console.log("My name is " + name1 + " and I am " + age1 + " years old and this console.log is called String Concatenation");

// String Interpolation with Template Literals
let name = "Mubashir Ibrahim";
let age = 24;
console.log(`My name is ${name} and I am ${age} years old and this console.log is called String Interpolation`);

// console.log(name.length);


// String Object
const gamgeName = new String("Mubashir String Object");
console.log(gamgeName.length); // 16
console.log(gamgeName[0]); // M
// console.log(gamgeName.__proto__); // {}
console.log(gamgeName.toUpperCase()); // MUBASHIR STRING OBJECT
console.log(gamgeName.charAt(0)); // M
console.log(gamgeName.indexOf("M")); // 0

// String Methods
let newstringOne = gamgeName.substring(0 , 4); // substring m start value negaive nhi de skty
console.log(newstringOne); 

// slice Method in String
let newstringTwo = gamgeName.slice(0 , 8);
console.log(newstringTwo); 

// trim Method in String
let newstringThree = "     Mubashir Ibrahim     ";
console.log(newstringThree); 
console.log(newstringThree.trim()); 

// replace Method in String
const url = "https://mubashir.com/mubashir%20ibrahim";
console.log(url);
console.log(url.replace("%20" , "-")); // https://mubashir.com/mubashir-ibrahim

// includes Method in String
console.log(url.includes("mubashir")); // true

// split Method in String
console.log(gamgeName.split(" "));
console.log("===== ARRAYS IN JAVASCRIPT =====");

// --------------------------------------------------
// 1. Array kya hota hai?
// --------------------------------------------------

const myArray = [ 1, 2, 3, 4, true, "Mubashir", null, undefined, { name: "Mubashir" }];
console.log(myArray);


// --------------------------------------------------
// 2. Simple Array
// --------------------------------------------------

const superHeroes = ["Superman", "Batman", "Flash", "Aquaman"];
console.log(superHeroes);

// Array ke kisi element ko index se access karna
console.log(superHeroes[0]); // Superman
console.log(superHeroes[2]); // Flash

// --------------------------------------------------
// 3. new Array()
// --------------------------------------------------
const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);
console.log(numbers[2]); // 3


// --------------------------------------------------
// 4. length
// --------------------------------------------------
const myArr = [1, 2, 3, 4, 5];

console.log("Array:", myArr);
console.log("Length:", myArr.length); // 5


// --------------------------------------------------
// 5. push()
// Last mein element ADD karta hai
// Original array change hota hai
// --------------------------------------------------
myArr.push(6);

console.log("After push:", myArr);
// [1, 2, 3, 4, 5, 6]


// --------------------------------------------------
// 6. pop()
// Last element REMOVE karta hai
// Original array change hota hai
// --------------------------------------------------
myArr.pop();

console.log("After pop:", myArr);
// [1, 2, 3, 4, 5]


// --------------------------------------------------
// 7. unshift()
// Start mein element ADD karta hai
// --------------------------------------------------
myArr.unshift(0);

console.log("After unshift:", myArr);
// [0, 1, 2, 3, 4, 5]


// --------------------------------------------------
// 8. shift()
// Start ka element REMOVE karta hai
// --------------------------------------------------
myArr.shift();

console.log("After shift:", myArr);
// [1, 2, 3, 4, 5]


// --------------------------------------------------
// 9. includes()
// Check karta hai value array mein hai ya nahi
// true / false return karta hai
// --------------------------------------------------

console.log("Includes 3:", myArr.includes(3)); // true
console.log("Includes 10:", myArr.includes(10)); // false


// --------------------------------------------------
// 10. indexOf()
// Element ka index return karta hai
// Agar element nahi mile to -1 return karta hai
// --------------------------------------------------

console.log("Index of 3:", myArr.indexOf(3)); // 2
console.log("Index of 100:", myArr.indexOf(100)); // -1


// --------------------------------------------------
// 11. join()
// Array ko STRING mein convert karta hai
// Original array change nahi hota
// --------------------------------------------------
const joinedArray = myArr.join("-");

console.log("Original Array:", myArr);
console.log("Joined:", joinedArray);
console.log("Type:", typeof joinedArray);

// Output:
// 1-2-3-4-5
// string


// --------------------------------------------------
// 12. reverse()
// Array ko reverse karta hai
// IMPORTANT: Original array bhi change hota hai
// --------------------------------------------------
const reverseExample = [1, 2, 3, 4, 5];

reverseExample.reverse();

console.log("Reversed:", reverseExample);
// [5, 4, 3, 2, 1]


// ==================================================
// SLICE vs SPLICE
// Sabse important part
// ==================================================


// --------------------------------------------------
// 13. slice()
// Array ka kuch part COPY karta hai
//
// Original array ko CHANGE NAHI karta
//
// Syntax:
// array.slice(startIndex, endIndex)
//
// endIndex include NAHI hota
// --------------------------------------------------

const sliceArray = [1, 2, 3, 4, 5];

console.log("Before slice:", sliceArray);

const slicedPart = sliceArray.slice(0, 2);

console.log("Sliced Part:", slicedPart);
// [1, 2]

console.log("After slice Original:", sliceArray);
// [1, 2, 3, 4, 5]


// --------------------------------------------------
// 14. splice()
// Original array ko CHANGE karta hai
//
// Syntax:
// array.splice(startIndex, deleteCount)
//
// startIndex = kaha se start karna hai
// deleteCount = kitne elements remove karne hain
// --------------------------------------------------

const spliceArray = [1, 2, 3, 4, 5];

console.log("Before splice:", spliceArray);

const removedElements = spliceArray.splice(0, 2);

console.log("Removed Elements:", removedElements);
// [1, 2]

console.log("After splice Original:", spliceArray);
// [3, 4, 5]
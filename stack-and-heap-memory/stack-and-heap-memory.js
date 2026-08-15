// console.log("Stack and Heap Memory");

// ++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive Data Types)
// Stack memory me agar ham ne variable bnaya toh uska copy hamen milta hy.

// Heap Memory  (Non-Primitive Data Types)
// Heap memory me agar ham ne object bnaya toh uska reference hamen milta hy.


let myFullName = "Mubashir Ibrahim";

let anotherName = myFullName;
anotherName = "Mubashir Muhammad Ibrahim";

console.log(myFullName);
console.log(anotherName);
console.log(myFullName);

let userOne = {
    email: "mubashir@example.com",
    upi: "mubashir@ybl"
};

let userTwo = userOne;

userTwo.upi = "mubashirtwo77@ybl";
console.log(userOne.upi); // mubashirtwo77@ybl
console.log(userTwo.upi); // mubashirtwo77@ybl

console.log(userOne); // { email: 'mubashir@example.com', upi: 'mubashirtwo77@ybl' }
console.log(userTwo); // { email: 'mubashir@example.com', upi: 'mubashirtwo77@ybl' }

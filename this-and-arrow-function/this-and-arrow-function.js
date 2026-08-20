console.log("===== THIS AND ARROW FUNCTIONS =====");


// ======================================================
// 1. THIS INSIDE AN OBJECT METHOD
// ======================================================

const user = {
  name: "Mubashir",
  age: 24,

  about: function () {
    console.log(`Welcome to Website ${this.name}`);
    console.log(this);
  }
};

user.about();

// Change object value
user.name = "Ali";

user.about();


// ======================================================
// 2. THIS INSIDE A NORMAL FUNCTION
// ======================================================

function chai() {
  const username = "Mubashir";

  console.log(this.username);
  console.log(this);
}

chai();

// this.username => usually undefined
// because username is a local variable,
// not a property of this


// ======================================================
// 3. THIS INSIDE AN ARROW FUNCTION
// ======================================================

const chaiCode = () => {
  console.log(this);
};

chaiCode();

// Important:
// Arrow functions do NOT create their own `this`.
// They use `this` from the surrounding scope.


// ======================================================
// 4. BASIC ARROW FUNCTION
// ======================================================

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwoNumbers(5, 10)); // 15


// ======================================================
// 5. IMPLICIT RETURN
// ======================================================

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(5, 5)); // 10


// Parentheses are also valid

const multiplyTwo = (num1, num2) => (num1 * num2);

console.log(multiplyTwo(5, 4)); // 20


// ======================================================
// 6. RETURN OBJECT FROM ARROW FUNCTION
// ======================================================

// Object ko implicitly return karne ke liye
// parentheses () use karte hain.

const createUser = (username) => ({
  username: username
});

console.log(createUser("Mubashir"));

// Output:
// { username: "Mubashir" }


// Shorter version

const createUserShort = (username) => ({
  username
});

console.log(createUserShort("Ali"));

// Output:
// { username: "Ali" }


// ======================================================
// 7. DEFAULT PARAMETER WITH ARROW FUNCTION
// ======================================================

const createGuestUser = (username = "Guest") => ({
  username
});

console.log(createGuestUser());
console.log(createGuestUser("Mubashir"));

// Output:
// { username: "Guest" }
// { username: "Mubashir" }


// ======================================================
// 8. ARROW FUNCTION WITH ARRAY MAP()
// ======================================================

const myArr = [1, 2, 3, 4, 5];

const doubledArr = myArr.map((num) => num * 2);

console.log("Original:", myArr);
console.log("Doubled:", doubledArr);

// Original: [1, 2, 3, 4, 5]
// Doubled:  [2, 4, 6, 8, 10]


// ======================================================
// 9. MORE MAP() EXAMPLES
// ======================================================

const prices = [100, 200, 300];

const updatedPrices = prices.map((price) => price + 50);

console.log(updatedPrices);

// [150, 250, 350]


const names = ["Ali", "Ahmed", "Mubashir"];

const greetings = names.map(
  (name) => `Hello ${name}`
);

console.log(greetings);

// [
//   "Hello Ali",
//   "Hello Ahmed",
//   "Hello Mubashir"
// ]
console.log("===== FUNCTIONS AND PARAMETERS IN JAVASCRIPT =====");


// ======================================================
// 1. BASIC FUNCTION
// ======================================================

// Function banaya
const sayMyName = function () {
  console.log("M");
  console.log("U");
  console.log("B");
  console.log("A");
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("R");
};

// Function call kiya
sayMyName();


// ======================================================
// 2. FUNCTION WITH PARAMETERS
// ======================================================

// num1 aur num2 = PARAMETERS
const addTwoNumbers = function (num1, num2) {
  console.log(num1 + num2);
};

// 5 aur 10 = ARGUMENTS
addTwoNumbers(5, 10); // 15

addTwoNumbers(20, 30); // 50


// ======================================================
// 3. RETURN VALUE FROM FUNCTION
// ======================================================

const sumTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

// Function ka returned result variable mein save ho gaya
const result = sumTwoNumbers(5, 5);

console.log("Result:", result); // 10


// ======================================================
// 4. RETURN VS CONSOLE.LOG
// ======================================================

const multiplyNumbers = function (num1, num2) {
  const result = num1 * num2;

  return result;
};

const multiplicationResult = multiplyNumbers(5, 4);

console.log("Multiplication:", multiplicationResult); // 20


// ======================================================
// 5. RETURN KE BAAD CODE EXECUTE NAHI HOTA
// ======================================================

const subtractNumbers = function (num1, num2) {
  return num1 - num2;

  // Ye code kabhi execute nahi hoga
  console.log("Hello");
};

console.log(subtractNumbers(10, 5)); // 5


// ======================================================
// 6. LOGIN USER MESSAGE
// ======================================================

const loginUserMessage = function (name) {

  if (!name) {
    return "Please enter a name";
  }

  return `${name} just logged in`;
};

const userMessage = loginUserMessage("Mubashir M. Ibrahim");

console.log(userMessage);


// ======================================================
// 7. FUNCTION WITHOUT ARGUMENT
// ======================================================

const messageWithoutName = loginUserMessage();

console.log(messageWithoutName);
// Please enter a name


// ======================================================
// 8. DEFAULT PARAMETERS
// ======================================================

// Agar name provide nahi kiya,
// to automatically "Guest" use hoga

const welcomeUser = function (name = "Guest") {
  return `Welcome, ${name}!`;
};

console.log(welcomeUser("Mubashir"));
// Welcome, Mubashir!

console.log(welcomeUser());
// Welcome, Guest!


// ======================================================
// 9. MULTIPLE PARAMETERS
// ======================================================

const introduceUser = function (name, age, city) {
  return `My name is ${name}, I am ${age} years old and I live in ${city}.`;
};

const introduction = introduceUser( "Mubashir", 25, "Karachi");

console.log(introduction);


// ======================================================
// 10. DEFAULT VALUES WITH MULTIPLE PARAMETERS
// ======================================================

const createUser = function ( name = "Guest", age = 18, country = "Pakistan") {
  return ` Name: ${name} Age: ${age} Country: ${country}`;
};

console.log(
  createUser("Mubashir", 25, "Pakistan")
);

console.log(
  createUser()
);


// ======================================================
// 11. SIMPLE DISCOUNT FUNCTION
// ======================================================

const calculateDiscount = function (price, discountPercentage) {

  const discountAmount =
    (price * discountPercentage) / 100;

  const finalPrice =
    price - discountAmount;

  return finalPrice;
};

const discountedPrice =
  calculateDiscount(1000, 20);

console.log(
  "Price after discount:",
  discountedPrice
);
// 800


// ======================================================
// 12. CHECK USER AGE
// ======================================================

const checkAge = function (age) {

  if (age >= 18) {
    return "User is an adult";
  }

  return "User is under 18";
};

console.log(checkAge(25));
// User is an adult

console.log(checkAge(15));
// User is under 18


// ======================================================
// 13. EVEN OR ODD FUNCTION
// ======================================================

const checkEvenOdd = function (number) {

  if (number % 2 === 0) {
    return `${number} is Even`;
  }

  return `${number} is Odd`;
};

console.log(checkEvenOdd(10));
// 10 is Even

console.log(checkEvenOdd(7));
// 7 is Odd


// ======================================================
// 14. CALCULATOR FUNCTION
// ======================================================

const calculator = function (num1, num2, operator) {

  if (operator === "+") {
    return num1 + num2;
  }

  if (operator === "-") {
    return num1 - num2;
  }

  if (operator === "*") {
    return num1 * num2;
  }

  if (operator === "/") {
    return num1 / num2;
  }

  return "Invalid operator";
};

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
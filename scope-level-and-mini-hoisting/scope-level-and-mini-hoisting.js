console.log("===== SCOPE LEVEL AND MINI HOISTING =====");


// ======================================================
// 1. NESTED FUNCTION SCOPE
// ======================================================

const one = function () {
  const username = "Mubashir";

  console.log("Function One");

  const two = function () {
    const website = "YouTube";

    console.log(username); // Mubashir
    console.log(website);  // YouTube
  };

  two();

  // console.log(website);
  // Error: website is not defined
};

one();


// ======================================================
// 2. NESTED IF BLOCK SCOPE
// ======================================================

if (true) {
  const username = "Mubashir";

  if (username === "Mubashir") {
    const website = "YouTube";

    console.log(username + " " + website);
    // Mubashir YouTube
  }

  // console.log(website);
  // Error: website is not defined
}

// console.log(username);
// Error: username is not defined


// ======================================================
// 3. FUNCTION DECLARATION + HOISTING
// ======================================================

// Function declaration ko declaration se pehle call kar sakte hain.

console.log(addOne(5)); // 6

function addOne(num) {
  return num + 1;
}


// ======================================================
// 4. FUNCTION EXPRESSION + HOISTING
// ======================================================

// Ye declaration se pehle call nahi ho sakta.

// console.log(addTwo(5));
// ReferenceError:
// Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5)); // 7


// ======================================================
// 5. ANOTHER NESTED SCOPE EXAMPLE
// ======================================================

const parent = function () {
  const parentName = "Parent";

  const child = function () {
    const childName = "Child";

    console.log(parentName); // Parent
    console.log(childName);  // Child
  };

  child();

  console.log(parentName); // Parent

  // console.log(childName);
  // Error: childName is not defined
};

parent();
console.log("===== IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) =====");


// ======================================================
// 1. NORMAL IIFE
// ======================================================

(function chaiOrCode() {
  console.log("Chai Or Code");
})();

// Output:
// Chai Or Code


// ======================================================
// 2. ARROW FUNCTION IIFE
// ======================================================

(() => {
  console.log("Arrow Function IIFE");
})();

// Output:
// Arrow Function IIFE


// ======================================================
// 3. IIFE WITH PARAMETER
// ======================================================

((name) => {
  console.log(`Welcome to Website ${name}`);
})("Mubashir");

// Output:
// Welcome to Website Mubashir


// ======================================================
// 4. IIFE WITH MULTIPLE PARAMETERS
// ======================================================

((name, age) => {
  console.log(`Name: ${name}, Age: ${age}`);
})("Ali", 24);

// Output:
// Name: Ali, Age: 24


// ======================================================
// 5. IIFE WITH LOCAL VARIABLE
// ======================================================

(() => {
  const username = "Mubashir";
  const website = "YouTube";

  console.log(`${username} uses ${website}`);
})();

// username and website sirf IIFE ke andar available hain


// ======================================================
// INVALID EXAMPLE
// ======================================================

// ❌ const declaration ko is tarah IIFE nahi bana sakte

// (
//   const chaiOrCode = () => {
//     console.log("Chai Or Code");
//   }
// )();
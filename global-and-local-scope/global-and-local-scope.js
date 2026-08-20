console.log("===== GLOBAL AND LOCAL SCOPE =====");


// ======================================================
// 1. GLOBAL SCOPE
// ======================================================

let a = 10;
const b = 20;
var c = 30;


// ======================================================
// 2. BLOCK / LOCAL SCOPE
// ======================================================

{
  let a = 40;
  const b = 50;
  var c = 60;

  console.log("Inside block a:", a); // 40
  console.log("Inside block b:", b); // 50
  console.log("Inside block c:", c); // 60
}


// ======================================================
// 3. OUTSIDE THE BLOCK
// ======================================================

console.log("Outside block a:", a); // 10
console.log("Outside block b:", b); // 20
console.log("Outside block c:", c); // 60
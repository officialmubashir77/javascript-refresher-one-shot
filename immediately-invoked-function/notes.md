# JavaScript IIFE — Immediately Invoked Function Expression — Short Notes

JavaScript me **IIFE** ka full form hota hai:

```text
Immediately Invoked Function Expression
```

Simple meaning:

> Aisi function expression jo define hote hi turant execute ho jaye.

Basic syntax:

```js
(function () {
  // code
})();
```

Ya arrow function ke saath:

```js
(() => {
  // code
})();
```

---

# 1. Normal IIFE

Tumhara code:

```js
(function chaiOrCode() {
  console.log("Chai Or Code");
})();
```

Output:

```text
Chai Or Code
```

Yahan function:

```js
function chaiOrCode() {
  console.log("Chai Or Code");
}
```

parentheses ke andar wrap hai:

```js
(function chaiOrCode() {
  ...
})
```

Aur end me:

```js
();
```

use karke turant call ki gayi hai.

---

# 2. IIFE ka Basic Structure

```js
(function () {
  console.log("Hello");
})();
```

Isko do parts me samjho:

```text
(function () {
  ...
})
```

→ function expression

Aur:

```text
()
```

→ immediately invoke / call

### Memory Trick

```text
(function(){})()
→ define + immediately run
```

---

# 3. Arrow Function IIFE

Tumhara code:

```js
(() => {
  console.log("Arrow Function IIFE");
})();
```

Output:

```text
Arrow Function IIFE
```

Normal function ke bajaye arrow function use ki gayi hai.

Structure:

```js
(() => {
  // code
})();
```

---

# 4. Normal IIFE vs Arrow IIFE

Normal:

```js
(function () {
  console.log("Normal IIFE");
})();
```

Arrow:

```js
(() => {
  console.log("Arrow IIFE");
})();
```

Dono:

```text
define hote hi execute
```

hoti hain.

---

# 5. IIFE with Parameter

Tumhara code:

```js
((name) => {
  console.log(`Welcome to Website ${name}`);
})("Mubashir");
```

Output:

```text
Welcome to Website Mubashir
```

Yahan:

```text
name
```

parameter hai.

Aur:

```text
"Mubashir"
```

argument hai.

---

# 6. IIFE Parameter Flow

Function:

```js
(name) => {
  console.log(name);
}
```

Immediately call:

```js
("Mubashir")
```

Flow:

```text
"Mubashir"
↓
name
↓
console.log(name)
```

---

# 7. IIFE with Multiple Parameters

Tumhara code:

```js
((name, age) => {
  console.log(`Name: ${name}, Age: ${age}`);
})("Ali", 24);
```

Output:

```text
Name: Ali, Age: 24
```

Yahan:

```text
name, age
```

parameters hain.

Aur:

```text
"Ali", 24
```

arguments hain.

---

# 8. Multiple Parameter Syntax

```js
((a, b) => {
  console.log(a, b);
})(10, 20);
```

Flow:

```text
10 → a
20 → b
```

---

# 9. IIFE with Local Variable

Tumhara code:

```js
(() => {
  const username = "Mubashir";
  const website = "YouTube";

  console.log(`${username} uses ${website}`);
})();
```

Output:

```text
Mubashir uses YouTube
```

Yahan:

```js
username
website
```

IIFE ke local variables hain.

---

# 10. IIFE ka Local Scope

Tumhare notes ka important point:

```text
username and website sirf IIFE ke andar available hain
```

Simple samajh:

```js
(() => {
  const username = "Mubashir";
})();
```

`username` ko IIFE ke bahar access nahi kar sakte.

Conceptually:

```text
IIFE
└── local scope
```

---

# 11. IIFE ka Fayda

Tumhare source ke examples se ek important concept clear hota hai:

```text
IIFE apna local scope create kar sakti hai
```

Isse variables function ke andar limited rehte hain.

Example:

```js
(() => {
  const message = "Hello";

  console.log(message);
})();
```

`message` IIFE ke andar available hai.

---

# 12. Named IIFE

Tumhara first example:

```js
(function chaiOrCode() {
  console.log("Chai Or Code");
})();
```

Yahan function ka naam hai:

```text
chaiOrCode
```

Isko named function expression ke form me IIFE banaya gaya hai.

---

# 13. Anonymous IIFE

Arrow IIFE:

```js
(() => {
  console.log("Arrow Function IIFE");
})();
```

Isme explicit function name nahi hai.

Ye immediately execute hoti hai.

---

# 14. Invalid Example

Tumhara commented example:

```js
// (
//   const chaiOrCode = () => {
//     console.log("Chai Or Code");
//   }
// )();
```

Ye valid IIFE syntax nahi hai.

Kyunki:

```js
const chaiOrCode = () => {
  ...
}
```

ek variable declaration hai.

Is declaration ko is tarah parentheses me wrap karke directly:

```js
()
```

se invoke nahi kar sakte.

---

# 15. Correct Way

Agar arrow function ko IIFE banana ho:

```js
(() => {
  console.log("Chai Or Code");
})();
```

Agar pehle variable me function store karna ho:

```js
const chaiOrCode = () => {
  console.log("Chai Or Code");
};

chaiOrCode();
```

Ye normal function call hai, IIFE nahi.

---

# 16. IIFE vs Normal Function

## Normal Function

```js
const greet = () => {
  console.log("Hello");
};

greet();
```

Pehle function variable me store hoti hai.

Phir separately call hoti hai.

---

## IIFE

```js
(() => {
  console.log("Hello");
})();
```

Function define hote hi immediately call ho gayi.

---

# Quick Revision

## Normal IIFE

```js
(function () {
  console.log("Hello");
})();
```

---

## Named IIFE

```js
(function chai() {
  console.log("Chai");
})();
```

---

## Arrow IIFE

```js
(() => {
  console.log("Arrow IIFE");
})();
```

---

## IIFE with Parameter

```js
((name) => {
  console.log(name);
})("Mubashir");
```

---

## IIFE with Multiple Parameters

```js
((name, age) => {
  console.log(name, age);
})("Ali", 24);
```

---

## Local Variables

```js
(() => {
  const username = "Mubashir";
  const website = "YouTube";
})();
```

```text
username aur website
→ IIFE ke andar local
```

---

# Important Table

| Concept | Syntax | Meaning |
|---|---|---|
| Normal IIFE | `(function(){})()` | Function immediately run |
| Named IIFE | `(function chai(){})()` | Named function immediately run |
| Arrow IIFE | `(() => {})()` | Arrow function immediately run |
| Parameter | `((name)=>{})("Ali")` | Argument immediately pass |
| Multiple Params | `((a,b)=>{})(1,2)` | Multiple arguments |
| Local Scope | `const x` inside IIFE | IIFE ke andar available |

---

# One-line Formula 🧠

```text
IIFE
→ Immediately Invoked Function Expression
```

```text
(function(){})()
→ normal IIFE
```

```text
(() => {})()
→ arrow IIFE
```

```text
((name) => {})("Mubashir")
→ parameter + argument
```

```text
(() => {
  const x = 10;
})()
→ x local to IIFE
```

Sabse important:

```text
IIFE
→ function define hote hi execute
```

```text
IIFE ke local variables
→ bahar available nahi
```

```text
const function declaration ko parentheses me wrap karke
direct IIFE nahi bana sakte
```

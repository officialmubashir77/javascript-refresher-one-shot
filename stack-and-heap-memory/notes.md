# JavaScript Stack & Heap Memory — Short Notes

JavaScript me memory ko samajhne ke liye beginners ke liye do important concepts hain:

```text
Stack Memory
Heap Memory
```

Tumhare code ke context me:

```text
Primitive Data Types     → Stack-style copy behavior
Non-Primitive Data Types → Reference behavior
```

---

# 1. Stack Memory

Tumhara comment:

```js
// Stack Memory (Primitive Data Types)
// Stack memory me agar ham ne variable bnaya toh uska copy hamen milta hy.
```

Simple samajh:

Primitive value ko doosre variable me assign karne par hame us value ki **copy** milti hai.

Example:

```js
let myFullName = "Mubashir Ibrahim";

let anotherName = myFullName;
```

Ab:

```text
myFullName   → "Mubashir Ibrahim"
anotherName  → "Mubashir Ibrahim"
```

Dono variables ki values same hain.

Lekin primitive value ke case me ye independently behave karte hain.

---

## 2. Primitive Value ki Copy

Tumhara code:

```js
let myFullName = "Mubashir Ibrahim";

let anotherName = myFullName;
anotherName = "Mubashir Muhammad Ibrahim";
```

Pehle:

```text
myFullName  → "Mubashir Ibrahim"
anotherName → "Mubashir Ibrahim"
```

Phir:

```js
anotherName = "Mubashir Muhammad Ibrahim";
```

Ab:

```text
myFullName  → "Mubashir Ibrahim"
anotherName → "Mubashir Muhammad Ibrahim"
```

Important:

`anotherName` change karne se `myFullName` change nahi hota.

---

## 3. Tumhare `console.log()` ka Output

```js
console.log(myFullName);
console.log(anotherName);
console.log(myFullName);
```

Output:

```text
Mubashir Ibrahim
Mubashir Muhammad Ibrahim
Mubashir Ibrahim
```

Notice:

`myFullName` ki original value same rehti hai.

---

## 4. Stack Memory Memory Trick

```text
Primitive → copy
```

Simple flow:

```text
myFullName
   ↓
"Mubashir Ibrahim"

anotherName = myFullName
   ↓
value ki copy
```

Phir `anotherName` change karne se `myFullName` affect nahi hota.

---

# 5. Heap Memory

Tumhara comment:

```js
// Heap Memory  (Non-Primitive Data Types)
// Heap memory me agar ham ne object bnaya toh uska reference hamen milta hy.
```

Simple samajh:

Object ko doosre variable me assign karne par normally naya independent object nahi banta.

Dono variables **same object ko reference** karte hain.

---

## 6. Object Example

Tumhara code:

```js
let userOne = {
    email: "mubashir@example.com",
    upi: "mubashir@ybl"
};

let userTwo = userOne;
```

Conceptually:

```text
userOne ───┐
           ├──→ same object
userTwo ───┘
```

Dono variables same object ko reference kar rahe hain.

---

## 7. Reference Behavior

Tumhara code:

```js
userTwo.upi = "mubashirtwo77@ybl";
```

Tumne property `userTwo` ke through change ki.

Lekin kyunki:

```text
userOne
and
userTwo
```

same object ko reference karte hain, change dono se nazar aata hai.

---

## 8. `userOne.upi`

```js
console.log(userOne.upi);
```

Output:

```text
mubashirtwo77@ybl
```

Original object ki property bhi changed nazar aati hai.

---

## 9. `userTwo.upi`

```js
console.log(userTwo.upi);
```

Output:

```text
mubashirtwo77@ybl
```

Dono same value show karte hain.

---

## 10. Complete Object Output

```js
console.log(userOne);
console.log(userTwo);
```

Dono me same updated object nazar aayega:

```text
{
  email: "mubashir@example.com",
  upi: "mubashirtwo77@ybl"
}
```

---

# 11. Primitive vs Object Example

## Primitive

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Yahan:

```text
b ko a ki value ki copy mili
```

Isliye `b` change karne se `a` change nahi hota.

---

## Object

```js
let obj1 = {
    name: "Mubashir"
};

let obj2 = obj1;

obj2.name = "Ibrahim";

console.log(obj1.name); // Ibrahim
console.log(obj2.name); // Ibrahim
```

Yahan:

```text
obj1 aur obj2 same object ko reference karte hain
```

Isliye property change dono se visible hoti hai.

---

# 12. Important Difference

Primitive:

```text
value copy hoti hai
```

Reference type:

```text
same object ka reference share hota hai
```

---

# 13. Visual Understanding

## Primitive

```text
myFullName
┌─────────────────────────────┐
│ "Mubashir Ibrahim"          │
└─────────────────────────────┘

anotherName
┌─────────────────────────────┐
│ "Mubashir Ibrahim"          │
└─────────────────────────────┘
```

Agar `anotherName` change karo:

```text
myFullName
→ "Mubashir Ibrahim"

anotherName
→ "Mubashir Muhammad Ibrahim"
```

Dono independently behave karte hain.

---

## Object Reference

```text
userOne ───────┐
               │
               ▼
        ┌──────────────────────────┐
        │ email: mubashir@...      │
        │ upi: mubashir@ybl        │
        └──────────────────────────┘
               ▲
               │
userTwo ───────┘
```

Agar:

```js
userTwo.upi = "mubashirtwo77@ybl";
```

to same object update hota hai.

---

# 14. Primitive Data Types Reminder

Primitive data types:

```text
String
Number
Boolean
Null
Undefined
Symbol
BigInt
```

Example:

```js
let name = "Mubashir";
let age = 24;
let isLoggedIn = true;
```

Assignment par simple value-copy behavior samajh sakte ho.

---

# 15. Non-Primitive / Reference Types Reminder

Common reference types:

```text
Object
Array
Function
```

Example:

```js
let obj = {};
let arr = [];
let func = function () {};
```

In values ko assign karne par variables same reference share kar sakte hain.

---

# Quick Revision

## Primitive Example

```js
let myFullName = "Mubashir Ibrahim";

let anotherName = myFullName;

anotherName = "Mubashir Muhammad Ibrahim";

console.log(myFullName);
// Mubashir Ibrahim

console.log(anotherName);
// Mubashir Muhammad Ibrahim
```

Meaning:

```text
Primitive → copy
```

---

## Object Example

```js
let userOne = {
    email: "mubashir@example.com",
    upi: "mubashir@ybl"
};

let userTwo = userOne;

userTwo.upi = "mubashirtwo77@ybl";
```

Ab:

```js
console.log(userOne.upi);
// mubashirtwo77@ybl

console.log(userTwo.upi);
// mubashirtwo77@ybl
```

Meaning:

```text
Object → same reference
```

---

# Most Important Difference 🧠

```text
Primitive:
anotherName = myFullName
→ value ki copy
```

```text
Object:
userTwo = userOne
→ same object ka reference
```

---

# One-line Formula 🧠

```text
Primitive value assign karo
→ independent copy jaisa behavior
```

```text
Object assign karo
→ same reference share hota hai
```

Sabse important:

```text
Primitive change
→ original variable affect nahi hota
```

```text
Shared object ki property change
→ same object reference karne wale variables me change nazar aata hai
```

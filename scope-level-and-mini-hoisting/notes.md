# JavaScript Scope Level & Mini Hoisting — Short Notes

JavaScript me **scope** batata hai ke koi variable ya function code ke kis area se accessible hai.

Is file me hum mainly ye topics samajhte hain:

```text
Nested Function Scope
Nested Block Scope
Parent vs Child Scope
Function Declaration Hoisting
Function Expression Hoisting
```

---

# 1. Nested Function Scope

Tumhara code:

```js
const one = function () {
  const username = "Mubashir";

  console.log("Function One");

  const two = function () {
    const website = "YouTube";

    console.log(username);
    console.log(website);
  };

  two();
};
```

Yahan function `two()` function `one()` ke andar bana hua hai.

Isliye:

```text
two → child function
one → parent function
```

---

# 2. Child Function Parent Variable Access Kar Sakta Hai

Parent function ke andar:

```js
const username = "Mubashir";
```

Child function `two()` me:

```js
console.log(username);
```

Output:

```text
Mubashir
```

Yani:

```text
child scope
→ parent scope ki values access kar sakta hai
```

---

# 3. Child ka Apna Local Variable

Child function me:

```js
const website = "YouTube";
```

Aur:

```js
console.log(website);
```

Output:

```text
YouTube
```

Ye variable child function ke local scope me hai.

---

# 4. Parent Child Variable Access Nahi Kar Sakta

Tumhara commented code:

```js
// console.log(website);
```

Agar `one()` ke andar but `two()` ke bahar access karo:

```text
Error: website is not defined
```

Kyunki `website` sirf `two()` ke andar exist karta hai.

### Memory Trick

```text
Child → Parent ko dekh sakta hai
Parent → Child ke local variables ko nahi
```

---

# 5. Nested Function Scope Visual

```text
one()
│
├── username = "Mubashir"
│
└── two()
    └── website = "YouTube"
```

`two()` access kar sakta hai:

```text
username
website
```

`one()` access kar sakta hai:

```text
username
```

Lekin `website` ko `two()` ke bahar access nahi kar sakta.

---

# 6. Nested `if` Block Scope

Tumhara code:

```js
if (true) {
  const username = "Mubashir";

  if (username === "Mubashir") {
    const website = "YouTube";

    console.log(username + " " + website);
  }
}
```

Yahan ek `if` block ke andar doosra `if` block hai.

---

# 7. Inner Block Outer Variable Access Kar Sakta Hai

Outer block:

```js
const username = "Mubashir";
```

Inner block me:

```js
console.log(username + " " + website);
```

Output:

```text
Mubashir YouTube
```

Inner block outer block ka variable access kar sakta hai.

---

# 8. Inner Block ka Variable Bahar Access Nahi Hota

Inner block me:

```js
const website = "YouTube";
```

Lekin outer block me:

```js
// console.log(website);
```

Error:

```text
website is not defined
```

Kyunki `const` block scoped hota hai.

---

# 9. Outer Block Variable bhi Block ke Bahar Access Nahi Hota

Tumhara code:

```js
// console.log(username);
```

Agar outer `if` block ke bahar access karo:

```text
Error: username is not defined
```

Kyunki `const username` sirf us block ke andar available hai.

---

# 10. Nested Block Scope Rule

Simple rule:

```text
Inner scope
→ outer scope ko access kar sakta hai
```

Lekin:

```text
Outer scope
→ inner scope ke local variables ko access nahi kar sakta
```

---

# 11. Function Declaration + Hoisting

Tumhara code:

```js
console.log(addOne(5));
```

Function baad me defined hai:

```js
function addOne(num) {
  return num + 1;
}
```

Phir bhi output:

```text
6
```

Kyunki function declaration ko declaration se pehle call kiya ja sakta hai.

---

# 12. Hoisting ka Simple Meaning

Beginner level par hoisting ko aise samjho:

```text
JavaScript function declaration ko execution se pehle available kar deta hai.
```

Isliye:

```js
addOne(5);
```

function definition se pehle bhi work karta hai.

### Memory Trick

```text
function declaration
→ before declaration call possible
```

---

# 13. Function Declaration Example

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Ye work karega.

Kyunki ye:

```text
Function Declaration
```

hai.

---

# 14. Function Expression + Hoisting

Tumhara code:

```js
const addTwo = function (num) {
  return num + 2;
};
```

Agar isse pehle call karo:

```js
// console.log(addTwo(5));
```

to error:

```text
ReferenceError:
Cannot access 'addTwo' before initialization
```

aa sakta hai.

---

# 15. Function Expression Pehle Kyun Nahi Chalti?

Yahan:

```js
const addTwo = function (num) {
  return num + 2;
};
```

function ek `const` variable me assign ki gayi hai.

`addTwo` ko initialization se pehle access nahi kar sakte.

Isliye pehle:

```js
const addTwo = ...
```

initialize hoga, phir:

```js
addTwo(5);
```

call karoge.

---

# 16. Correct Function Expression Call

```js
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
```

Output:

```text
7
```

---

# 17. Function Declaration vs Function Expression

### Function Declaration

```js
function addOne(num) {
  return num + 1;
}
```

Before definition call:

```js
addOne(5);
```

works.

### Function Expression

```js
const addTwo = function (num) {
  return num + 2;
};
```

Before initialization call:

```js
addTwo(5);
```

error de sakta hai.

---

# 18. Hoisting Quick Difference

```text
Function Declaration
→ declaration se pehle call ho sakti hai
```

```text
Function Expression with const
→ initialization se pehle call nahi
```

---

# 19. Another Nested Scope Example

Tumhara code:

```js
const parent = function () {
  const parentName = "Parent";

  const child = function () {
    const childName = "Child";

    console.log(parentName);
    console.log(childName);
  };

  child();

  console.log(parentName);
};
```

---

# 20. Child Access

Inside `child()`:

```js
console.log(parentName);
```

Output:

```text
Parent
```

Aur:

```js
console.log(childName);
```

Output:

```text
Child
```

Child function parent aur apna dono scope access kar sakta hai.

---

# 21. Parent Access

Parent function me:

```js
console.log(parentName);
```

Output:

```text
Parent
```

Lekin:

```js
// console.log(childName);
```

Error:

```text
childName is not defined
```

Kyunki `childName` child function ke andar local hai.

---

# 22. Scope Chain ka Basic Concept

JavaScript variable dhoondte waqt current scope se outer scope ki taraf check karta hai.

Conceptually:

```text
Current Scope
↓
Parent Scope
↓
Outer Scope
```

Is behavior ko:

```text
Scope Chain
```

kehte hain.

Tumhare examples isi concept ko show karte hain.

---

# Quick Revision

## Nested Function

```js
const parent = function () {
  const parentValue = "Parent";

  const child = function () {
    console.log(parentValue);
  };

  child();
};
```

Child parent value access kar sakta hai.

---

## Child Variable

```js
const parent = function () {
  const child = function () {
    const childValue = "Child";
  };

  // childValue yahan accessible nahi
};
```

---

## Nested Block

```js
if (true) {
  const username = "Mubashir";

  if (true) {
    console.log(username);
  }
}
```

Inner block outer value access kar sakta hai.

---

## Function Declaration Hoisting

```js
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}
```

Output:

```text
6
```

---

## Function Expression

```js
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
```

Works after initialization.

---

# Important Table

| Concept | Behavior |
|---|---|
| Child Function | Parent scope access kar sakta hai |
| Parent Function | Child local variable access nahi kar sakta |
| Inner Block | Outer block variable access kar sakta hai |
| Outer Block | Inner block variable access nahi kar sakta |
| Function Declaration | Definition se pehle call ho sakti hai |
| Function Expression | Initialization se pehle call nahi |

---

# One-line Formula 🧠

```text
Child Scope
→ Parent Scope access kar sakta hai
```

```text
Parent Scope
→ Child ke local variables access nahi kar sakta
```

```text
Inner Block
→ Outer Block access kar sakta hai
```

```text
Function Declaration
→ hoisted
→ before declaration call possible
```

```text
Function Expression + const
→ before initialization call nahi
```

Sabse important:

```text
Inner → Outer access ✅
Outer → Inner access ❌
```

```text
function addOne() {}
→ declaration se pehle call possible
```

```text
const addTwo = function () {}
→ pehle initialize, phir call
```

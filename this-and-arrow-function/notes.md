# JavaScript `this` & Arrow Functions — Short Notes

Is file me hum JavaScript ke do important concepts samajhte hain:

```text
this keyword
Arrow Functions
```

Saath hi hum:

```text
Implicit Return
Object Return
Default Parameters
Array map()
```

bhi cover karte hain.

---

# 1. `this` Inside an Object Method

Tumhara code:

```js
const user = {
  name: "Mubashir",
  age: 24,

  about: function () {
    console.log(`Welcome to Website ${this.name}`);
    console.log(this);
  }
};
```

Yahan:

```js
this.name
```

current object ki `name` property ko access kar raha hai.

Current object:

```js
user
```

Isliye:

```js
this.name
```

conceptually:

```js
user.name
```

ke barabar samjho.

---

# 2. Object Method Call

Tumhara code:

```js
user.about();
```

Possible output:

```text
Welcome to Website Mubashir
```

Aur:

```js
console.log(this);
```

current object ko show karega.

---

# 3. Object Value Change Hone par `this`

Tumhara code:

```js
user.name = "Ali";
```

Phir:

```js
user.about();
```

Ab output:

```text
Welcome to Website Ali
```

Kyunki:

```js
this.name
```

hardcoded `"Mubashir"` nahi hai.

Ye current object ki latest `name` value read karta hai.

### Memory Trick

```text
this.key
→ current object ki property
```

---

# 4. `this` Inside a Normal Function

Tumhara code:

```js
function chai() {
  const username = "Mubashir";

  console.log(this.username);
  console.log(this);
}

chai();
```

Important:

```js
username
```

ek local variable hai.

Ye:

```text
this.username
```

nahi hai.

Isliye tumhare notes ke mutabiq:

```js
this.username
```

usually:

```text
undefined
```

dega.

---

# 5. Local Variable vs `this` Property

Inside function:

```js
const username = "Mubashir";
```

Ye local variable hai.

Access:

```js
console.log(username);
```

Correct local variable access hai.

Lekin:

```js
console.log(this.username);
```

`this` object ki `username` property dhoond raha hai.

Agar property exist nahi karti:

```text
undefined
```

mil sakta hai.

---

# 6. `this` Inside an Arrow Function

Tumhara code:

```js
const chaiCode = () => {
  console.log(this);
};

chaiCode();
```

Important rule:

```text
Arrow functions apna khud ka `this` create nahi karti.
```

Wo:

```text
surrounding scope ka `this`
```

use karti hain.

### Memory Trick

```text
Normal function
→ apna this context ho sakta hai

Arrow function
→ own this nahi
→ surrounding this use
```

---

# 7. Basic Arrow Function

Tumhara code:

```js
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
```

Call:

```js
addTwoNumbers(5, 10);
```

Output:

```text
15
```

Arrow function syntax:

```js
const functionName = (parameters) => {
  return value;
};
```

---

# 8. Normal Function vs Arrow Function

Normal function expression:

```js
const add = function (a, b) {
  return a + b;
};
```

Arrow function:

```js
const add = (a, b) => {
  return a + b;
};
```

Dono same calculation kar sakte hain.

---

# 9. Implicit Return

Tumhara code:

```js
const addTwo = (num1, num2) => num1 + num2;
```

Isme:

```js
return
```

explicitly nahi likha.

Phir bhi result return hota hai.

Isko:

```text
Implicit Return
```

kehte hain.

---

# 10. Explicit vs Implicit Return

### Explicit Return

```js
const add = (a, b) => {
  return a + b;
};
```

### Implicit Return

```js
const add = (a, b) => a + b;
```

Dono same result dete hain.

### Memory Trick

```text
{ } use karo
→ usually return likhna padega

single expression
→ implicit return possible
```

---

# 11. Parentheses with Implicit Return

Tumhara code:

```js
const multiplyTwo = (num1, num2) => (num1 * num2);
```

Output:

```text
20
```

Parentheses optional ho sakti hain:

```js
const multiplyTwo = (num1, num2) => num1 * num2;
```

Aur:

```js
const multiplyTwo = (num1, num2) => (num1 * num2);
```

Dono valid hain.

---

# 12. Return Object from Arrow Function

Tumhara code:

```js
const createUser = (username) => ({
  username: username
});
```

Output:

```js
{
  username: "Mubashir"
}
```

Important:

Object ko implicitly return karte waqt:

```text
({ ... })
```

parentheses use karte hain.

---

# 13. Object Return me Parentheses Kyun?

Agar tum simply:

```js
const createUser = (username) => {
  username: username
};
```

likho, JavaScript `{}` ko function body samajh sakta hai.

Isliye object implicit return ke liye:

```js
const createUser = (username) => ({
  username: username
});
```

use karte hain.

### Memory Trick

```text
Arrow se object implicit return
→ ({ object })
```

---

# 14. Object Property Shorthand

Tumhara shorter code:

```js
const createUserShort = (username) => ({
  username
});
```

Ye:

```js
{
  username: username
}
```

ka shorter version hai.

Agar key aur variable name same ho:

```js
username: username
```

ko:

```js
username
```

likh sakte ho.

---

# 15. Default Parameter with Arrow Function

Tumhara code:

```js
const createGuestUser = (username = "Guest") => ({
  username
});
```

Without argument:

```js
createGuestUser();
```

Output:

```js
{
  username: "Guest"
}
```

With argument:

```js
createGuestUser("Mubashir");
```

Output:

```js
{
  username: "Mubashir"
}
```

---

# 16. Default Parameter Rule

```js
(username = "Guest")
```

Meaning:

```text
argument missing ho
→ "Guest" use karo
```

---

# 17. Arrow Function with `map()`

Tumhara code:

```js
const myArr = [1, 2, 3, 4, 5];

const doubledArr = myArr.map((num) => num * 2);
```

`map()` array ke har element par function run karta hai.

Flow:

```text
1 → 2
2 → 4
3 → 6
4 → 8
5 → 10
```

Result:

```js
[2, 4, 6, 8, 10]
```

---

# 18. `map()` Original Array Change Nahi Karta

Tumhara code:

```js
console.log("Original:", myArr);
console.log("Doubled:", doubledArr);
```

Original:

```js
[1, 2, 3, 4, 5]
```

New:

```js
[2, 4, 6, 8, 10]
```

Meaning:

```text
map()
→ new array return karta hai
```

Original array same rehti hai.

---

# 19. `map()` with Prices

Tumhara code:

```js
const prices = [100, 200, 300];

const updatedPrices = prices.map((price) => price + 50);
```

Flow:

```text
100 → 150
200 → 250
300 → 350
```

Output:

```js
[150, 250, 350]
```

---

# 20. `map()` with Strings

Tumhara code:

```js
const names = ["Ali", "Ahmed", "Mubashir"];

const greetings = names.map(
  (name) => `Hello ${name}`
);
```

Output:

```js
[
  "Hello Ali",
  "Hello Ahmed",
  "Hello Mubashir"
]
```

Yani `map()` sirf numbers ke saath nahi, strings aur objects ke saath bhi use ho sakta hai.

---

# 21. Arrow Functions aur `map()` ka Relation

Arrow functions array methods ke saath bohat common hain.

Example:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(
  (num) => num * 2
);
```

Short aur readable syntax:

```text
map + arrow function
```

---

# Quick Revision

## `this` in Object

```js
const user = {
  name: "Mubashir",

  greet: function () {
    console.log(this.name);
  }
};
```

```text
this.name
→ current object ki name property
```

---

## Normal Function

```js
function chai() {
  const username = "Mubashir";

  console.log(this.username);
}
```

```text
username local variable hai
this.username alag property lookup hai
```

---

## Arrow Function

```js
const chai = () => {
  console.log(this);
};
```

```text
Arrow function ka own this nahi hota
```

---

## Explicit Return

```js
const add = (a, b) => {
  return a + b;
};
```

---

## Implicit Return

```js
const add = (a, b) => a + b;
```

---

## Object Return

```js
const createUser = (username) => ({
  username
});
```

---

## Default Parameter

```js
const createGuest = (username = "Guest") => ({
  username
});
```

---

## `map()`

```js
const doubled = [1, 2, 3].map(
  (num) => num * 2
);
```

Result:

```js
[2, 4, 6]
```

---

# Important Table

| Concept | Syntax | Meaning |
|---|---|---|
| Object `this` | `this.name` | Current object property |
| Arrow Function | `(a,b) => {}` | Short function syntax |
| Explicit Return | `return a+b` | Return manually |
| Implicit Return | `(a,b) => a+b` | Automatic return |
| Return Object | `() => ({})` | Object implicit return |
| Default Param | `(name="Guest")` | Missing arg ka default |
| `map()` | `arr.map(...)` | New transformed array |

---

# One-line Formula 🧠

```text
this.name
→ current object ki property
```

```text
Arrow function
→ own `this` nahi banati
```

```text
(a, b) => {
  return a + b;
}
→ explicit return
```

```text
(a, b) => a + b
→ implicit return
```

```text
(username) => ({ username })
→ object implicit return
```

```text
arr.map(item => ...)
→ har item transform
→ new array
```

Sabse important:

```text
Object method me this
→ current object context
```

```text
Arrow function
→ surrounding scope ka this
```

```text
map()
→ original array same
→ new array return
```

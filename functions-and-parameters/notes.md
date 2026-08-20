# JavaScript Functions & Parameters — Short Notes

JavaScript me **Function** reusable code block hota hai.

Function ka faida:

```text
same code baar baar likhne ki zarurat nahi
```

Basic syntax:

```js
const functionName = function () {
  // code
};
```

Function ko run karne ke liye:

```js
functionName();
```

---

# 1. Basic Function

Tumhara code:

```js
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

sayMyName();
```

Output:

```text
M
U
B
A
S
H
I
R
```

### Memory Trick

```text
function banana → definition
functionName()  → function call
```

---

# 2. Function with Parameters

Tumhara code:

```js
const addTwoNumbers = function (num1, num2) {
  console.log(num1 + num2);
};
```

Yahan:

```text
num1, num2 → parameters
```

Function call:

```js
addTwoNumbers(5, 10);
```

Yahan:

```text
5, 10 → arguments
```

Output:

```text
15
```

---

# 3. Parameters vs Arguments

```text
Parameters → function define karte waqt
Arguments  → function call karte waqt
```

Example:

```js
const add = function (a, b) {
  return a + b;
};

add(5, 10);
```

```text
a, b  → parameters
5, 10 → arguments
```

---

# 4. Return Value

Tumhara code:

```js
const sumTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

const result = sumTwoNumbers(5, 5);
```

Ab:

```text
result → 10
```

`return` function se value bahar bhejta hai.

---

# 5. `console.log()` vs `return`

Tumhara example:

```js
const multiplyNumbers = function (num1, num2) {
  const result = num1 * num2;
  return result;
};
```

Difference:

```text
console.log()
→ sirf console me output show karta hai

return
→ value function se bahar deta hai
```

---

# 6. Return ke Baad Code Execute Nahi Hota

Tumhara code:

```js
const subtractNumbers = function (num1, num2) {
  return num1 - num2;

  console.log("Hello");
};
```

`return` ke baad function stop ho jata hai.

Isliye:

```js
console.log("Hello");
```

execute nahi hoga.

### Memory Trick

```text
return → result bhi deta hai + function stop bhi karta hai
```

---

# 7. Login User Message

Tumhara code:

```js
const loginUserMessage = function (name) {
  if (!name) {
    return "Please enter a name";
  }

  return `${name} just logged in`;
};
```

Agar:

```js
loginUserMessage("Mubashir M. Ibrahim");
```

to result:

```text
Mubashir M. Ibrahim just logged in
```

---

# 8. Function Without Argument

Tumhara code:

```js
const messageWithoutName = loginUserMessage();
```

Argument pass nahi hua, isliye:

```text
name → undefined
```

Aur:

```js
if (!name)
```

true ho jata hai.

Output:

```text
Please enter a name
```

---

# 9. Default Parameters

Tumhara code:

```js
const welcomeUser = function (name = "Guest") {
  return `Welcome, ${name}!`;
};
```

With argument:

```js
welcomeUser("Mubashir");
```

Output:

```text
Welcome, Mubashir!
```

Without argument:

```js
welcomeUser();
```

Output:

```text
Welcome, Guest!
```

### Memory Trick

```text
name = "Guest"
→ argument missing ho to Guest
```

---

# 10. Multiple Parameters

Tumhara code:

```js
const introduceUser = function (name, age, city) {
  return `My name is ${name}, I am ${age} years old and I live in ${city}.`;
};
```

Call:

```js
introduceUser("Mubashir", 25, "Karachi");
```

Result:

```text
My name is Mubashir, I am 25 years old and I live in Karachi.
```

---

# 11. Multiple Default Parameters

Tumhara code:

```js
const createUser = function (
  name = "Guest",
  age = 18,
  country = "Pakistan"
) {
  return ` Name: ${name} Age: ${age} Country: ${country}`;
};
```

With arguments:

```js
createUser("Mubashir", 25, "Pakistan");
```

Without arguments:

```js
createUser();
```

Result:

```text
Name: Guest Age: 18 Country: Pakistan
```

---

# 12. Discount Function

Tumhara code:

```js
const calculateDiscount = function (price, discountPercentage) {
  const discountAmount =
    (price * discountPercentage) / 100;

  const finalPrice =
    price - discountAmount;

  return finalPrice;
};
```

Example:

```js
calculateDiscount(1000, 20);
```

Calculation:

```text
discount = (1000 × 20) / 100
         = 200

final price = 1000 - 200
            = 800
```

Output:

```text
800
```

---

# 13. Check User Age

Tumhara code:

```js
const checkAge = function (age) {
  if (age >= 18) {
    return "User is an adult";
  }

  return "User is under 18";
};
```

Examples:

```js
checkAge(25);
// User is an adult
```

```js
checkAge(15);
// User is under 18
```

---

# 14. Even or Odd Function

Tumhara code:

```js
const checkEvenOdd = function (number) {
  if (number % 2 === 0) {
    return `${number} is Even`;
  }

  return `${number} is Odd`;
};
```

Rule:

```text
number % 2 === 0
→ Even
```

```text
number % 2 !== 0
→ Odd
```

Examples:

```js
checkEvenOdd(10);
// 10 is Even
```

```js
checkEvenOdd(7);
// 7 is Odd
```

---

# 15. Calculator Function

Tumhara code:

```js
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
```

Examples:

```js
calculator(10, 5, "+"); // 15
calculator(10, 5, "-"); // 5
calculator(10, 5, "*"); // 50
calculator(10, 5, "/"); // 2
```

Agar unsupported operator ho:

```js
calculator(10, 5, "%");
```

Result:

```text
Invalid operator
```

---

# Quick Revision

```js
const greet = function () {
  console.log("Hello");
};

greet();
```

```text
Function definition + function call
```

---

```js
const add = function (a, b) {
  return a + b;
};
```

```text
a, b → parameters
```

```js
add(5, 10);
```

```text
5, 10 → arguments
```

---

```js
const greet = function (name = "Guest") {
  return `Hello ${name}`;
};
```

```text
default parameter
```

---

```js
if (!name) {
  return "Please enter a name";
}
```

```text
missing/falsy name check
```

---

```js
number % 2 === 0
```

```text
Even number check
```

---

# Important Table

| Concept | Example | Meaning |
|---|---|---|
| Function Definition | `const fn = function(){}` | Function banana |
| Function Call | `fn()` | Function run |
| Parameter | `function(a)` | Placeholder |
| Argument | `fn(5)` | Actual value |
| Return | `return value` | Result bahar |
| Default Param | `name="Guest"` | Missing value ka default |
| Condition | `if (...)` | Decision |
| Even Check | `num % 2 === 0` | Even |
| Calculator | `operator === "+"` | Operation choose |

---

# One-line Formula 🧠

```text
functionName()
→ function call

parameters
→ function definition ke variables

arguments
→ function call ki actual values

return
→ value bahar + function stop

name = "Guest"
→ default parameter

if (!name)
→ missing/falsy value check

number % 2 === 0
→ Even

number % 2 !== 0
→ Odd
```

Sabse important:

```text
Parameters ≠ Arguments
```

```text
console.log()
→ output show

return
→ result return
```

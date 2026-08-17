# JavaScript Number & Math — Short Notes

JavaScript me **Number** aur **Math** ka use numeric values, formatting, rounding, random numbers, minimum/maximum values aur calculations ke liye hota hai.

---

# 1. Basic Number

Tumhara code:

```js
const score = 400;

console.log(score);
```

Output:

```text
400
```

Yahan:

```text
400 → number
```

Check:

```js
typeof score;
```

Output:

```text
number
```

---

# 2. Number Constructor

Tumhara code:

```js
const balance = new Number(500);
```

Yahan:

```js
new Number(500)
```

ek **Number object** create karta hai.

Normally:

```js
const score = 400;
```

primitive number hota hai.

Lekin:

```js
const balance = new Number(500);
```

Number object hota hai.

---

## 3. Primitive Number vs Number Object

Primitive:

```js
const score = 400;
```

Number Object:

```js
const balance = new Number(500);
```

Check:

```js
typeof score;   // "number"
typeof balance; // "object"
```

---

# 4. `.toString()`

Tumhara code:

```js
console.log(balance.toString().length);
```

`.toString()` number ko string me convert karta hai.

Example:

```js
balance.toString();
```

Result:

```text
"500"
```

Ab:

```js
balance.toString().length;
```

Output:

```text
3
```

Kyunki `"500"` me total 3 characters hain.

### Memory Trick

```text
toString() → number ko string banata hai
```

---

# 5. `.toFixed()`

Tumhara code:

```js
console.log(balance.toFixed(2));
```

Output:

```text
500.00
```

`.toFixed(number)` decimal ke baad fixed digits show karta hai.

Example:

```js
let price = 45.6789;

price.toFixed(2);
```

Result:

```text
"45.68"
```

Important:

```text
.toFixed() string return karta hai
```

---

# 6. `.toPrecision()`

Tumhara code:

```js
const otherNumber = 23.4567;

console.log(otherNumber.toPrecision(4));
```

Output:

```text
23.46
```

`.toPrecision()` total **significant digits** control karta hai.

Difference:

```text
toFixed()     → decimal ke baad kitne digits
toPrecision() → total significant digits
```

---

# 7. `.toLocaleString()`

Tumhara code:

```js
const hunderds = 100000;

console.log(hunderds.toLocaleString("en-IN"));
```

Output:

```text
1,00,000
```

`toLocaleString()` number ko locale ke according format karta hai.

`"en-IN"` Indian numbering format use karta hai.

Example:

```js
const amount = 1000000;

amount.toLocaleString("en-IN");
// "10,00,000"

amount.toLocaleString("en-US");
// "1,000,000"
```

---

# Maths in JavaScript

JavaScript ka built-in:

```js
Math
```

object mathematical operations ke liye use hota hai.

Important methods:

```text
Math.abs()
Math.round()
Math.ceil()
Math.floor()
Math.min()
Math.max()
Math.random()
```

---

# 8. `Math.abs()`

Tumhara code:

```js
console.log(Math.abs(-4));
```

Output:

```text
4
```

`Math.abs()` absolute value return karta hai.

Examples:

```js
Math.abs(-10); // 10
Math.abs(10);  // 10
```

---

# 9. `Math.round()`

Tumhara code:

```js
console.log(Math.round(4.9));
```

Output:

```text
5
```

`Math.round()` nearest integer par round karta hai.

Examples:

```js
Math.round(4.4); // 4
Math.round(4.5); // 5
Math.round(4.9); // 5
```

---

# 10. `Math.ceil()`

Tumhara code:

```js
console.log(Math.ceil(4.1));
```

Output:

```text
5
```

`Math.ceil()` upper integer ki taraf round karta hai.

### Memory Trick

```text
ceil → ceiling → upar
```

---

# 11. `Math.floor()`

Tumhara code:

```js
console.log(Math.floor(4.9));
```

Output:

```text
4
```

`Math.floor()` lower integer ki taraf round karta hai.

### Memory Trick

```text
floor → neeche
```

---

# 12. `round()` vs `ceil()` vs `floor()`

```js
Math.round(4.4); // 4
Math.ceil(4.4);  // 5
Math.floor(4.4); // 4
```

```text
round() → nearest integer
ceil()  → upar
floor() → neeche
```

---

# 13. `Math.min()`

Tumhara code:

```js
console.log(Math.min(4, 5, 6, 7));
```

Output:

```text
4
```

`Math.min()` smallest value return karta hai.

---

# 14. `Math.max()`

Tumhara code:

```js
console.log(Math.max(4, 5, 6, 7));
```

Output:

```text
7
```

`Math.max()` largest value return karta hai.

---

# 15. `Math.random()`

Tumhara code:

```js
console.log(Math.random());
```

`Math.random()` random decimal number generate karta hai.

Range:

```text
0 inclusive
1 exclusive
```

Simple understanding:

```text
0 se 1 ke beech random decimal
```

Har run par value change ho sakti hai.

---

# 16. Random Number 1 to 10

Tumhara code:

```js
console.log(Math.floor(Math.random() * 10 + 1));
```

Possible output:

```text
1 to 10
```

Flow:

```text
Math.random()
↓
0 to below 1

* 10
↓
0 to below 10

+ 1
↓
1 to below 11

Math.floor()
↓
1 to 10
```

---

# 17. `.toFixed(0)` with Random

Tumhara code:

```js
console.log((Math.random() * 10 + 1).toFixed(0));
```

Important:

```js
.toFixed(0)
```

rounded value ko **string** me return karta hai.

Example:

```js
(4.67).toFixed(0);
```

Output:

```text
"5"
```

Isliye random integer ke liye usually:

```js
Math.floor(...)
```

wala approach zyada clear hota hai.

---

# 18. Random Number Between Custom Min and Max

Tumhara code:

```js
const minVal = 10;
const maxVal = 20;

console.log(
    Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
);
```

Possible values:

```text
10 to 20
```

General formula:

```js
Math.floor(Math.random() * (max - min + 1) + min);
```

---

# 19. Formula Breakdown

Given:

```js
minVal = 10;
maxVal = 20;
```

First:

```js
maxVal - minVal + 1
```

becomes:

```text
20 - 10 + 1
= 11
```

Then:

```js
Math.random() * 11
```

random decimal range banata hai.

Then:

```js
+ minVal
```

yaani:

```js
+ 10
```

range ko 10 se start karwata hai.

Finally:

```js
Math.floor()
```

decimal ko lower integer me convert karta hai.

---

# Quick Revision

```js
const score = 400;
// number
```

```js
const balance = new Number(500);
// Number object
```

```js
balance.toString();
// "500"
```

```js
balance.toFixed(2);
// "500.00"
```

```js
const otherNumber = 23.4567;
otherNumber.toPrecision(4);
// "23.46"
```

```js
const hundreds = 100000;
hundreds.toLocaleString("en-IN");
// "1,00,000"
```

---

# Math Revision

```js
Math.abs(-4); // 4
Math.round(4.9); // 5
Math.ceil(4.1); // 5
Math.floor(4.9); // 4
Math.min(4, 5, 6, 7); // 4
Math.max(4, 5, 6, 7); // 7
Math.random(); // random decimal
```

---

## Random 1 to 10

```js
Math.floor(Math.random() * 10 + 1);
```

---

## Random 10 to 20

```js
const minVal = 10;
const maxVal = 20;

Math.floor(
    Math.random() * (maxVal - minVal + 1) + minVal
);
```

---

# One-line Formula 🧠

```text
.toString()       → number ko string
.toFixed(2)       → fixed decimal places
.toPrecision(4)   → significant digits
.toLocaleString() → locale formatting

Math.abs()        → absolute value
Math.round()      → nearest integer
Math.ceil()       → upper integer
Math.floor()      → lower integer
Math.min()        → smallest value
Math.max()        → largest value
Math.random()     → random decimal
```

Sabse important random formula:

```js
Math.floor(Math.random() * (max - min + 1) + min);
```

Meaning:

```text
min se max tak random integer
```

# JavaScript Data Types Summary — Short Notes

JavaScript me data types ko generally do main categories me divide kiya jata hai:

```text
Primitive Data Types
Non-Primitive / Reference Data Types
```

---

# 1. Primitive Data Types

JavaScript ke important primitive data types:

```text
Null
Number
BigInt
Boolean
String
Symbol
Undefined
```

Tumhara code:

```js
let age = 24; // number
let city = null; // object
let bigNumber = 1234567890123456789012345678901234567890n; // bigint
let isLoggedIn = false; // boolean
let name = "Mubashir"; // string
let symbol = Symbol("This is a symbol"); // symbol
let state; // undefined
```

---

## 2. Number

```js
let age = 24;
```

Yahan:

```text
24 → number
```

Check:

```js
typeof age;
```

Output:

```text
number
```

Decimal values bhi number hi hoti hain:

```js
let scoreVal = 100.3;
```

```js
typeof scoreVal;
```

Output:

```text
number
```

---

## 3. String

```js
let name = "Mubashir";
```

Quotes ke andar likhi hui text value string hoti hai.

```js
typeof name;
```

Output:

```text
string
```

Examples:

```js
"Hello"
"Mubashir"
"24"
```

Important:

```text
24   → number
"24" → string
```

---

## 4. Boolean

Boolean ke sirf do possible values hoti hain:

```text
true
false
```

Tumhara code:

```js
let isLoggedIn = false;
```

Check:

```js
typeof isLoggedIn;
```

Output:

```text
boolean
```

Another example:

```js
const isLoggedInNew = true;
```

---

## 5. Undefined

Agar variable declare ho lekin usko value assign na ki gayi ho:

```js
let state;
```

to uski value hoti hai:

```text
undefined
```

Check:

```js
typeof state;
```

Output:

```text
undefined
```

Tumhara another example:

```js
let userEmail;
```

Yahan bhi:

```text
userEmail → undefined
```

---

## 6. Null

Tumhara code:

```js
let city = null;
```

`null` ka matlab generally hota hai:

```text
intentionally empty value
```

Another example:

```js
const outSideTemp = null;
```

Important JavaScript behavior:

```js
typeof null;
```

Output:

```text
object
```

Ye JavaScript ka ek old / confusing behavior hai.

### Yaad rakho

```text
null ki actual value → null
typeof null          → "object"
```

Iska matlab ye nahi ke `null` normal object hai.

---

## 7. BigInt

Bahut bade integers ke liye JavaScript me `BigInt` use hota hai.

Tumhara code:

```js
let bigNumber = 1234567890123456789012345678901234567890n;
```

Notice:

```text
number ke end me n
```

Ye `n` batata hai ke value BigInt hai.

Check:

```js
typeof bigNumber;
```

Output:

```text
bigint
```

Another example:

```js
const bigNumberNew = 1234567890123456789012345678901234567890n;

console.log(bigNumberNew);
```

---

## 8. Symbol

`Symbol` unique values create karne ke liye use hota hai.

Tumhara code:

```js
let symbol = Symbol("This is a symbol");
```

Check:

```js
typeof symbol;
```

Output:

```text
symbol
```

---

## 9. Symbol Values Unique Hoti Hain

Tumhara code:

```js
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
```

Output:

```text
false
```

Important:

Dono symbols ke descriptions same hain:

```text
"123"
```

Lekin dono symbols alag unique values hain.

```js
Symbol("123") === Symbol("123");
```

Output:

```text
false
```

### Memory Trick

```text
same description ≠ same Symbol
```

---

# Non-Primitive / Reference Data Types

Important reference types:

```text
Object
Array
Function
```

---

## 10. Object

Tumhara code:

```js
let myObj = {
    name: "Mubashir",
    age: 24,
    isLoggedIn: true,
    city: "Karachi"
};
```

Object me data:

```text
key : value
```

pairs me store hota hai.

Example:

```text
name       → "Mubashir"
age        → 24
isLoggedIn → true
city       → "Karachi"
```

Check:

```js
typeof myObj;
```

Output:

```text
object
```

---

## 11. Array

Tumhara code:

```js
let myArr = ["Mubashir", 24, true, "Karachi"];
```

Array multiple values ko ordered form me store karta hai.

Array ke andar different data types bhi ho sakte hain.

Yahan:

```text
"Mubashir" → string
24         → number
true       → boolean
"Karachi"  → string
```

Check:

```js
typeof myArr;
```

Output:

```text
object
```

Important:

JavaScript me:

```js
typeof [];
```

Output:

```text
object
```

Agar specifically check karna ho ke value array hai:

```js
Array.isArray(myArr);
```

Output:

```text
true
```

---

## 12. Function

Tumhara code:

```js
let myFunc = function () {
    console.log("Hello World");
};
```

Function ko call karne ke liye:

```js
myFunc();
```

Output:

```text
Hello World
```

Check:

```js
typeof myFunc;
```

Output:

```text
function
```

Function technically reference type hota hai, lekin `typeof` uske liye:

```text
function
```

return karta hai.

---

# Primitive vs Non-Primitive

## 13. Primitive

```text
String
Number
Boolean
Null
Undefined
Symbol
BigInt
```

Examples:

```js
let name = "Mubashir";
let age = 24;
let loggedIn = true;
let temp = null;
let email;
let id = Symbol("id");
let big = 123n;
```

---

## 14. Non-Primitive / Reference

```text
Object
Array
Function
```

Examples:

```js
let obj = {};
let arr = [];
let func = function () {};
```

---

# `typeof` Summary

```js
typeof 24;
```

Output:

```text
number
```

```js
typeof "Mubashir";
```

Output:

```text
string
```

```js
typeof true;
```

Output:

```text
boolean
```

```js
typeof undefined;
```

Output:

```text
undefined
```

```js
typeof Symbol("123");
```

Output:

```text
symbol
```

```js
typeof 123n;
```

Output:

```text
bigint
```

```js
typeof {};
```

Output:

```text
object
```

```js
typeof [];
```

Output:

```text
object
```

```js
typeof function () {};
```

Output:

```text
function
```

```js
typeof null;
```

Output:

```text
object
```

---

# 15. TypeScript Example

Tumhara comment:

```js
// In Type Script:
// e.g let numberVal:number = 24;
```

TypeScript me variable ka type explicitly define kiya ja sakta hai:

```ts
let numberVal: number = 24;
```

Yahan:

```text
numberVal → variable name
number    → type
24        → value
```

JavaScript me normally:

```js
let numberVal = 24;
```

JavaScript automatically infer karta hai ke ye number hai.

---

# 16. JavaScript Type Inference

Tumhara code:

```js
let numberVal = 24;
let scoreVal = 100.3;
```

JavaScript automatically types samajh leta hai:

```text
24    → number
100.3 → number
```

Check:

```js
typeof numberVal; // "number"
typeof scoreVal;  // "number"
```

---

# 17. Important `typeof` Quirks

Do important cheezein yaad rakho:

### `null`

```js
typeof null;
```

Output:

```text
object
```

### Array

```js
typeof [];
```

Output:

```text
object
```

### Function

```js
typeof function () {};
```

Output:

```text
function
```

---

# Quick Revision

```js
let age = 24;
// number
```

```js
let city = null;
// null
// typeof → object
```

```js
let bigNumber = 1234567890n;
// bigint
```

```js
let isLoggedIn = false;
// boolean
```

```js
let name = "Mubashir";
// string
```

```js
let symbol = Symbol("123");
// symbol
```

```js
let state;
// undefined
```

```js
let myObj = {};
// object
```

```js
let myArr = [];
// Array
// typeof → object
```

```js
let myFunc = function () {};
// function
```

---

## Symbol Revision

```js
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
```

Output:

```text
false
```

Reason:

```text
Every Symbol is unique
```

---

## Important Table

| Value | Data Type | `typeof` Result |
|---|---|---|
| `24` | Number | `"number"` |
| `"Mubashir"` | String | `"string"` |
| `true` | Boolean | `"boolean"` |
| `undefined` | Undefined | `"undefined"` |
| `null` | Null | `"object"` |
| `123n` | BigInt | `"bigint"` |
| `Symbol("id")` | Symbol | `"symbol"` |
| `{}` | Object | `"object"` |
| `[]` | Array | `"object"` |
| `function(){}` | Function | `"function"` |

---

# One-line Formula 🧠

```text
Primitive:
String, Number, Boolean, Null, Undefined, Symbol, BigInt
```

```text
Non-Primitive:
Object, Array, Function
```

Most important:

```text
typeof null     → "object"
typeof []       → "object"
typeof function → "function"

Symbol("123") !== Symbol("123")
```

Aur:

```text
Number with n at end → BigInt
123n                  → bigint
```

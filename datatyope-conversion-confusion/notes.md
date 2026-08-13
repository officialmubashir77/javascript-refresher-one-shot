# JavaScript Type Conversion — Short Notes

JavaScript me **Type Conversion** ka matlab hai ek data type ko doosre data type me convert karna.

Main conversions:

```js
Number()
String()
Boolean()
```

---

## 1. String → Number

```js
let score = "33";

let valueInNumber = Number(score);

console.log(valueInNumber);        // 33
console.log(typeof valueInNumber); // number
```

Agar string me sirf valid number ho:

```js
Number("33"); // 33
```

Lekin:

```js
Number("33abc"); // NaN
```

`NaN` ka matlab:

> Not a Number

Important:

```js
typeof NaN;
```

Output:

```text
number
```

Ye JavaScript ka ek confusing behavior hai.

---

## 2. Different values ko `Number()` me convert karna

```js
Number("33");      // 33
Number("33abc");   // NaN
Number(null);      // 0
Number(undefined); // NaN
Number(true);      // 1
Number(false);     // 0
```

### Yaad rakho

```text
"33"      → 33
"33abc"   → NaN
null      → 0
undefined → NaN
true      → 1
false     → 0
```

---

## 3. Boolean Conversion

Tumhara code:

```js
let isLoggedIn = 1;

let isLoggedInOutput = Boolean(isLoggedIn);

console.log(isLoggedInOutput);
```

Output:

```text
true
```

Kyunki:

```js
Boolean(1); // true
```

### Important Boolean conversions

```js
Boolean(1);          // true
Boolean(0);          // false
Boolean("");         // false
Boolean("Mubashir"); // true
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false
```

Memory trick:

```text
1          → true
0          → false
""         → false
"text"     → true
null       → false
undefined  → false
NaN        → false
```

---

## 4. Falsy Values

JavaScript me kuch values automatically `false` consider hoti hain.

Important falsy values:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Baaki almost sab values **truthy** hoti hain.

Example:

```js
Boolean("hello"); // true
Boolean("0");     // true
Boolean("false"); // true
```

Notice:

```js
Boolean("false"); // true
```

Kyunki `"false"` ek **non-empty string** hai.

---

## 5. Number → String

Tumhara code:

```js
let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);        // "33"
console.log(typeof stringNumber); // string
```

Matlab:

```text
33 → "33"
```

Example:

```js
String(100);   // "100"
String(true);  // "true"
String(false); // "false"
```

---

## 6. Tumhare `score1` comment me correction

Tumne likha:

```js
let score1 = "33"; // string NOT a number because it contains alphabets "33abc"
```

Ye comment thoda mix ho gaya hai.

Correct:

```js
let score1 = "33"; // string because value quotes ke andar hai
```

Aur agar:

```js
let score1 = "33abc";
```

to bhi type:

```js
typeof score1; // string
```

Lekin conversion karoge:

```js
Number("33");    // 33
Number("33abc"); // NaN
```

---

# Quick Revision

```js
Number("33");      // 33
Number("33abc");   // NaN
Number(null);      // 0
Number(undefined); // NaN
Number(true);      // 1
Number(false);     // 0
```

```js
Boolean(1);         // true
Boolean(0);         // false
Boolean("");        // false
Boolean("hello");   // true
Boolean(null);      // false
Boolean(undefined); // false
```

```js
String(33);    // "33"
String(true);  // "true"
String(false); // "false"
```

## One-line Formula 🧠

```text
Number()  → number me convert
String()  → string me convert
Boolean() → true/false me convert
```

Aur sabse important:

```text
"33"    → Number() → 33
"33abc" → Number() → NaN
null    → Number() → 0
undefined → Number() → NaN
1       → Boolean() → true
0       → Boolean() → false
33      → String() → "33"
```
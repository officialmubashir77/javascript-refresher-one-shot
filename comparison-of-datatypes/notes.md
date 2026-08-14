# JavaScript Comparison of Data Types — Short Notes

JavaScript me **comparison operators** ka use do values ko compare karne ke liye hota hai.

Comparison ka result normally:

```text
true
```

ya:

```text
false
```

hota hai.

---

## 1. Basic Comparison Operators

Common comparison operators:

```js
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
==  Loose equality
!=  Not equal
=== Strict equality
```

Tumhara commented code:

```js
console.log(2 > 1);  // true
console.log(2 < 1);  // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
```

---

## 2. Greater Than `>`

```js
console.log(2 > 1);
```

Output:

```text
true
```

Kyunki:

```text
2 is greater than 1
```

Lekin:

```js
console.log(1 > 2);
```

Output:

```text
false
```

---

## 3. Less Than `<`

```js
console.log(2 < 1);
```

Output:

```text
false
```

Kyunki `2`, `1` se chota nahi hai.

Example:

```js
console.log(1 < 2); // true
```

---

## 4. Greater Than or Equal `>=`

```js
console.log(2 >= 1);
```

Output:

```text
true
```

Is operator me do conditions check hoti hain:

```text
greater than
OR
equal to
```

Examples:

```js
2 >= 1; // true
2 >= 2; // true
1 >= 2; // false
```

---

## 5. Less Than or Equal `<=`

```js
console.log(2 <= 1);
```

Output:

```text
false
```

Examples:

```js
1 <= 2; // true
2 <= 2; // true
3 <= 2; // false
```

---

## 6. Loose Equality `==`

`==` values ko compare karta hai.

JavaScript zarurat par **type conversion** bhi kar sakta hai.

Example:

```js
console.log("2" == 2);
```

Output:

```text
true
```

Yahan:

```text
"2" → string
2   → number
```

Types different hain.

Lekin `==` comparison ke waqt JavaScript string `"2"` ko number `2` me convert kar deta hai.

Conceptually:

```text
"2" == 2
↓
2 == 2
↓
true
```

---

## 7. Strict Equality `===`

`===` ko **strict equality operator** kehte hain.

Ye:

```text
value
+
data type
```

dono compare karta hai.

Tumhara code:

```js
console.log("2" === 2);
```

Output:

```text
false
```

Kyunki:

```text
"2" → string
2   → number
```

Values dekhne me same hain, lekin data types different hain.

Isliye:

```js
"2" === 2; // false
```

Lekin:

```js
2 === 2; // true
```

Aur:

```js
"2" === "2"; // true
```

---

## 8. `==` vs `===`

Compare:

```js
console.log("2" == 2);  // true
console.log("2" === 2); // false
```

### `==`

```text
sirf value compare karta hai
aur type conversion ho sakti hai
```

### `===`

```text
value + data type dono compare karta hai
```

### Yaad rakho

```js
"2" == 2;  // true
"2" === 2; // false
```

---

## 9. String aur Number ka Comparison

Tumhara code:

```js
console.log("2" > 1);
```

Output:

```text
true
```

Yahan:

```text
"2" → string
1   → number
```

Comparison ke waqt JavaScript `"2"` ko numeric value me convert karta hai.

Conceptually:

```text
"2" > 1
↓
2 > 1
↓
true
```

---

## 10. `"02" > 1`

Tumhara code:

```js
console.log("02" > 1);
```

Output:

```text
true
```

JavaScript comparison ke waqt `"02"` ko number me convert karta hai.

```text
"02" → 2
```

Phir:

```text
2 > 1
```

Result:

```text
true
```

---

## 11. Important: Comparison me Type Conversion

Examples:

```js
"2" > 1;  // true
"02" > 1; // true
```

Concept:

```text
numeric string + number comparison
↓
string ko number me convert kiya ja sakta hai
```

Lekin confusing comparisons ko avoid karna better hota hai.

Prefer:

```js
Number("2") > 1;
```

instead of relying too much on implicit conversion.

---

# `null` Comparisons

`null` ke comparison results beginners ko confusing lag sakte hain.

Tumhara code:

```js
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
```

---

## 12. `null > 0`

```js
console.log(null > 0);
```

Output:

```text
false
```

Relational comparison ke waqt `null` numeric conversion me `0` ban sakta hai.

Conceptually:

```text
null > 0
↓
0 > 0
↓
false
```

---

## 13. `null == 0`

```js
console.log(null == 0);
```

Output:

```text
false
```

Important:

`==` equality ke rules aur relational comparison ke rules exactly same nahi hain.

Isliye:

```js
null == 0; // false
```

---

## 14. `null >= 0`

```js
console.log(null >= 0);
```

Output:

```text
true
```

Relational comparison ke context me `null` ko numeric `0` treat kiya ja sakta hai.

Conceptually:

```text
null >= 0
↓
0 >= 0
↓
true
```

---

## 15. `null` ka Confusing Behavior

Ye teen lines yaad rakho:

```js
null > 0;  // false
null == 0; // false
null >= 0; // true
```

Iska reason ye hai ke:

```text
equality comparison
aur
relational comparison
```

ke JavaScript rules different hain.

### Important

Is tarah ke comparisons ko production code me avoid karna better hota hai.

---

# `undefined` Comparisons

Tumhara code:

```js
console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
```

---

## 16. `undefined > 0`

```js
undefined > 0;
```

Output:

```text
false
```

Numeric conversion me:

```js
Number(undefined);
```

Result:

```text
NaN
```

Comparison with `NaN` normally false hota hai.

---

## 17. `undefined == 0`

```js
undefined == 0;
```

Output:

```text
false
```

`undefined`, `0` ke equal nahi hai.

---

## 18. `undefined >= 0`

```js
undefined >= 0;
```

Output:

```text
false
```

Kyunki numeric comparison me `undefined` effectively:

```text
NaN
```

ban jata hai.

Aur `NaN` ke comparisons false hote hain.

---

## 19. `null` vs `undefined`

Compare:

```js
null > 0;       // false
undefined > 0;  // false
```

```js
null == 0;      // false
undefined == 0; // false
```

Lekin:

```js
null >= 0;      // true
undefined >= 0; // false
```

Important difference:

```text
Number(null)      → 0
Number(undefined) → NaN
```

---

## 20. `null == undefined`

Ek important JavaScript behavior:

```js
null == undefined;
```

Output:

```text
true
```

Lekin:

```js
null === undefined;
```

Output:

```text
false
```

Kyunki strict equality me types different hain.

```text
null      → null
undefined → undefined
```

---

# Best Practice

## 21. Prefer `===`

Usually JavaScript me:

```js
===
```

ko prefer kiya jata hai.

Instead of:

```js
value == 2
```

prefer:

```js
value === 2
```

Kyunki `===` implicit type conversion nahi karta aur code zyada predictable hota hai.

---

# Quick Revision

```js
2 > 1;  // true
2 < 1;  // false
2 >= 1; // true
2 <= 1; // false
2 == 1; // false
2 != 1; // true
```

```js
"2" > 1;  // true
"02" > 1; // true
```

```js
null > 0;  // false
null == 0; // false
null >= 0; // true
```

```js
undefined > 0;  // false
undefined == 0; // false
undefined >= 0; // false
```

```js
"2" == 2;  // true
"2" === 2; // false
```

---

## Important Differences

```text
==  → value compare + type conversion ho sakti hai
=== → value + data type compare
```

```text
"2" == 2  → true
"2" === 2 → false
```

```text
Number(null)      → 0
Number(undefined) → NaN
```

```text
null > 0  → false
null == 0 → false
null >= 0 → true
```

---

## One-line Formula 🧠

```text
>   → greater than
<   → less than
>=  → greater than or equal
<=  → less than or equal
==  → loose equality
=== → strict equality
!=  → not equal
```

Sabse important:

```text
"2" == 2   → true
"2" === 2  → false

null >= 0       → true
undefined >= 0  → false

=== is usually safer and preferred
```

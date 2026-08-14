# JavaScript Operations & String Conversion — Short Notes

JavaScript me operators ka use **calculations**, **negative values**, **string concatenation**, aur **type conversion** ke liye hota hai.

---

## 1. Negative Value Banana

Tumhara code:

```js
const value = 3;
const negValue = -value;

console.log(negValue);
```

Output:

```text
-3
```

Yahan:

```js
-value
```

`value` ko negative bana deta hai.

Matlab:

```text
3 → -3
```

Example:

```js
let num = 10;

console.log(-num); // -10
```

---

## 2. Basic Arithmetic Operators

JavaScript me common mathematical operators:

```js
+   Addition
-   Subtraction
*   Multiplication
**  Exponent / Power
/   Division
%   Remainder / Modulus
```

Tumhara code:

```js
console.log(2 + 2);  // 4
console.log(2 - 2);  // 0
console.log(2 * 2);  // 4
console.log(2 ** 2); // 4
console.log(2 / 2);  // 1
console.log(2 % 2);  // 0
```

### `+` Addition

```js
2 + 2; // 4
```

### `-` Subtraction

```js
2 - 2; // 0
```

### `*` Multiplication

```js
2 * 2; // 4
```

### `**` Exponent / Power

```js
2 ** 2; // 4
```

Matlab:

```text
2² = 4
```

Example:

```js
3 ** 2; // 9
2 ** 3; // 8
```

### `/` Division

```js
2 / 2; // 1
```

### `%` Modulus / Remainder

`%` division ke baad **remainder** deta hai.

```js
2 % 2; // 0
5 % 2; // 1
10 % 3; // 1
```

Example:

```text
5 ÷ 2 = 2 remainder 1
```

Isliye:

```js
5 % 2; // 1
```

---

## 3. String Concatenation

Concatenation ka matlab:

> Do ya zyada strings ko aapas me join karna.

Tumhara code:

```js
let str1 = "Mubashir";
let str2 = " M. Ibrahim";

console.log(str1 + str2);
```

Output:

```text
Mubashir M. Ibrahim
```

Yahan `+` numbers ko add nahi kar raha.

Yahan `+` strings ko **join** kar raha hai.

```js
"Hello" + " World";
```

Output:

```text
Hello World
```

---

## 4. String + Number

Tumhara code:

```js
let str3 = "20";
let age = 26;

console.log(str3 + age);
```

Output:

```text
2026
```

Important:

```js
"20" + 26
```

ka result:

```text
"2026"
```

hota hai.

Ye:

```text
46
```

nahi hota.

### Kyun?

Kyunki `"20"` ek **string** hai.

Jab `+` operator ke saath ek value string ho, JavaScript doosri value ko bhi string me convert karke concatenate kar sakta hai.

```js
"20" + 26; // "2026"
```

Matlab:

```text
"20" + 26
↓
"20" + "26"
↓
"2026"
```

---

## 5. Number Addition vs String Concatenation

Compare:

```js
20 + 26;
```

Output:

```text
46
```

Lekin:

```js
"20" + 26;
```

Output:

```text
2026
```

Difference:

```text
20   → number
"20" → string
```

### Yaad rakho

```js
20 + 26;     // 46
"20" + 26;   // "2026"
20 + "26";   // "2026"
"20" + "26"; // "2026"
```

---

## 6. Boolean ko Number me Convert Karna Using `+`

Tumhara code:

```js
console.log(true);
console.log(+true);
```

Output:

```text
true
1
```

Normally:

```js
true
```

ek boolean value hai.

Lekin unary plus `+` lagane par:

```js
+true
```

JavaScript us value ko **number** me convert karta hai.

```js
+true;  // 1
+false; // 0
```

Same result:

```js
Number(true);  // 1
Number(false); // 0
```

---

## 7. Empty String ko Number me Convert Karna

Tumhara code:

```js
console.log(+"");
```

Output:

```text
0
```

Yahan:

```js
+""
```

empty string ko number me convert karta hai.

Result:

```text
"" → 0
```

Same as:

```js
Number(""); // 0
```

---

## 8. Unary Plus `+`

Unary plus ka use kisi value ko number me convert karne ke liye kiya ja sakta hai.

Examples:

```js
+"33";    // 33
+true;    // 1
+false;   // 0
+"";      // 0
+"hello"; // NaN
```

Equivalent:

```js
Number("33");    // 33
Number(true);    // 1
Number(false);   // 0
Number("");      // 0
Number("hello"); // NaN
```

### Important

```js
+"33"; // 33
```

Yahan result number hai.

Lekin:

```js
+"33abc"; // NaN
```

Kyunki `"33abc"` valid numeric string nahi hai.

---

## 9. Confusing Chained Assignment Avoid Karna

Tumhara commented code:

```js
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
```

Ye JavaScript me possible ho sakta hai, lekin beginners ke liye confusing hai.

Better:

```js
let num1 = 4;
let num2 = 4;
let num3 = 4;
```

Ya:

```js
const result = 2 + 2;

let num1 = result;
let num2 = result;
let num3 = result;
```

Readable code zyada prefer karna chahiye.

---

## 10. Increment Operator `++`

Tumhara code:

```js
let gameCouner = 100;

gameCouner++;
++gameCouner;

console.log(gameCouner);
```

Starting value:

```text
100
```

Pehle:

```js
gameCouner++;
```

Value:

```text
101
```

Phir:

```js
++gameCouner;
```

Value:

```text
102
```

Final output:

```text
102
```

---

## 11. Postfix Increment

Postfix:

```js
gameCouner++;
```

`++` variable ke **baad** hota hai.

Example:

```js
let score = 10;

score++;

console.log(score); // 11
```

Agar expression ke andar use karo:

```js
let score = 10;

console.log(score++); // 10
console.log(score);   // 11
```

Postfix pehle **old value return** karta hai, phir increment karta hai.

---

## 12. Prefix Increment

Prefix:

```js
++gameCouner;
```

`++` variable ke **pehle** hota hai.

Example:

```js
let score = 10;

console.log(++score); // 11
console.log(score);   // 11
```

Prefix pehle value increment karta hai, phir **new value return** karta hai.

---

## 13. Prefix vs Postfix

### Postfix

```js
let x = 5;

console.log(x++); // 5
console.log(x);   // 6
```

Flow:

```text
return 5
then x = 6
```

### Prefix

```js
let x = 5;

console.log(++x); // 6
console.log(x);   // 6
```

Flow:

```text
first x = 6
then return 6
```

### Memory Trick

```text
x++ → pehle use, phir increase
++x → pehle increase, phir use
```

---

# Quick Revision

```js
const value = 3;
const negValue = -value;

console.log(negValue); // -3
```

```js
2 + 2;  // 4
2 - 2;  // 0
2 * 2;  // 4
2 ** 2; // 4
2 / 2;  // 1
2 % 2;  // 0
```

```js
"Mubashir" + " Ibrahim";
// "Mubashir Ibrahim"
```

```js
"20" + 26;
// "2026"
```

```js
20 + 26;
// 46
```

```js
+true;  // 1
+false; // 0
+"";    // 0
+"33";  // 33
```

```js
let gameCounter = 100;

gameCounter++; // 101
++gameCounter; // 102
```

---

## Important Differences

```text
20 + 26       → 46
"20" + 26     → "2026"

true           → boolean
+true          → 1

""             → empty string
+""            → 0

x++            → postfix increment
++x            → prefix increment
```

---

## One-line Formula 🧠

```text
-number  → value ko negative banata hai
+        → numbers add / strings concatenate
**       → power
%        → remainder
+value   → value ko number me convert karne ki koshish
x++      → pehle old value use, phir +1
++x      → pehle +1, phir new value use
```

Sabse important:

```text
"20" + 26 → "2026"
20 + 26   → 46

+true  → 1
+false → 0
+""    → 0

100 → gameCounter++ → 101
101 → ++gameCounter → 102
```

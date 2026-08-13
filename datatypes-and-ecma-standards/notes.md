# JavaScript Data Types — Notes

Ye notes tumhare ab tak ke code aur concepts ke hisaab se hain.

## 1. `"use strict"` kya hota hai?

```js
"use strict";
```

`"use strict"` JavaScript ko **strict mode** me run karta hai.

Strict mode ka purpose hai common mistakes ko pakarna aur code ko zyada safe banana.

Example:

```js
"use strict";

accountCity = "Karachi";
```

Agar `accountCity` declare nahi kiya, to error milega:

```text
ReferenceError: accountCity is not defined
```

Correct way:

```js
let accountCity = "Karachi";
```

### Yaad rakho

```text
"use strict" → JavaScript ke stricter rules enable karta hai
```

Modern JavaScript modules me strict mode automatically enabled hota hai.

---

# 2. `alert()` Node.js me kyun nahi chalta?

Tumhara code:

```js
// alert("Hello World!");
```

Browser me:

```js
alert("Hello World!");
```

✅ kaam karta hai.

Lekin Node.js me:

```js
alert("Hello World!");
```

❌ error deta hai:

```text
ReferenceError: alert is not defined
```

Kyunki `alert()` **browser environment ki functionality** hai.

Node.js browser nahi hai.

Node.js me output ke liye generally:

```js
console.log("Hello World!");
```

use karte hain.

### Simple difference

```text
Browser → alert() available
Node.js → alert() available nahi
```

---

# 3. Code readability

Ye technically valid hai:

```js
console.log("Hello World!"); console.log("Hello World!");
```

Lekin readable version:

```js
console.log("Hello World!");
console.log("Hello World!");
```

Better hai.

Programming me sirf code chalna important nahi hota.

Code:

* readable
* understandable
* maintainable

bhi hona chahiye.

---

# 4. ECMAScript kya hai?

Tumne ye link mention kiya:

```text
https://tc39.es/ecma262/
```

JavaScript language ki official specification ko **ECMAScript specification** kehte hain.

`ECMA-262` JavaScript/ECMAScript language standard ko define karta hai.

Simple way:

```text
ECMAScript = JavaScript language ke official rules/specification
JavaScript = un rules ki practical implementation
```

Beginner level par specification ko line-by-line padhna zaroori nahi hai, lekin ye jaanna useful hai ki JavaScript ke official rules kahan defined hain.

---

# 5. JavaScript Data Types

Tumhari study ke current level par JavaScript values ko do broad groups me samajh sakte ho:

```text
1. Primitive
2. Objects / Non-Primitive
```

---

# 6. Primitive Data Types

JavaScript me **7 primitive data types** hain:

```text
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol
```

Important:

```text
Total Primitive Types = 7
```

---

# 7. Number

Tumhara code:

```js
let age = 24;
```

Yahan:

```text
age → variable
24 → Number value
```

Check:

```js
console.log(typeof age);
```

Output:

```text
number
```

JavaScript me normal integer aur decimal dono generally `number` type hote hain.

Example:

```js
let age = 24;
let price = 99.99;
let temperature = -5;

console.log(typeof age);         // number
console.log(typeof price);       // number
console.log(typeof temperature); // number
```

---

# 8. String

Tumhara code:

```js
let name = "Mubashir";
```

Textual data ko `string` kehte hain.

Check:

```js
console.log(typeof name);
```

Output:

```text
string
```

Strings different quotes se ban sakti hain:

```js
let firstName = "Mubashir";
let city = 'Karachi';
let message = `Hello World`;
```

Teeno strings hain.

---

# 9. Boolean

Tumhara code:

```js
let isLoggedIn = false;
```

Boolean ke sirf do possible values hoti hain:

```text
true
false
```

Check:

```js
console.log(typeof isLoggedIn);
```

Output:

```text
boolean
```

Boolean mostly conditions ke liye use hota hai.

Example:

```js
let isLoggedIn = true;
let hasPermission = false;
let isAdult = true;
```

---

# 10. Undefined

Tumhara code:

```js
let state;
```

Tumne variable declare kar diya:

```js
let state;
```

lekin koi value assign nahi ki.

Isliye:

```js
console.log(state);
```

Output:

```text
undefined
```

Aur:

```js
console.log(typeof state);
```

Output:

```text
undefined
```

Simple meaning:

> `undefined` usually batata hai ki variable ke paas abhi koi assigned value nahi hai.

Example:

```js
let username;

console.log(username);        // undefined
console.log(typeof username); // undefined
```

Baad me:

```js
username = "Mubashir";
```

Ab:

```js
console.log(username);        // Mubashir
console.log(typeof username); // string
```

---

# 11. Null

Tumhara code:

```js
let city = null;
```

`null` ka matlab generally hota hai:

> Intentionally empty value.

Tum khud explicitly keh rahe ho:

```js
let city = null;
```

ke filhaal `city` ki meaningful value available nahi hai.

Example:

```js
let selectedUser = null;
```

Matlab abhi koi user selected nahi.

---

# 12. `typeof null` ka strange behavior

Tumhara code:

```js
console.log(typeof city);
```

Output:

```text
object
```

Jab:

```js
city === null
```

hai.

Ye JavaScript ka **historical legacy behavior** hai.

Important:

> `null` actually primitive value hai. Lekin `typeof null` `"object"` return karta hai.

Isliye:

```js
typeof null;
```

Output:

```text
"object"
```

Iska matlab ye nahi ki `null` actually object hai.

### `null` ko check karne ka correct way

```js
let city = null;

console.log(city === null);
```

Output:

```text
true
```

Memory trick:

```text
null → Primitive
typeof null → "object" ⚠️ historical JavaScript quirk
```

---

# 13. `null` vs `undefined`

Ye difference important hai.

```js
let city = null;
let state;
```

`city`:

```js
let city = null;
```

Tumne intentionally empty value di hai.

`state`:

```js
let state;
```

Tumne koi value assign hi nahi ki.

So:

```text
null      → intentionally empty
undefined → value assign nahi hui
```

Example:

```js
let city = null;
let state;

console.log(city);  // null
console.log(state); // undefined
```

---

# 14. BigInt

Tumhara code:

```js
let BigInt = 1234567890123456789012345678901234567890n;
```

Large integers ke liye JavaScript me `BigInt` use hota hai.

Notice end me:

```text
n
```

hai.

```js
12345678901234567890n
```

`n` batata hai ki ye `BigInt` value hai.

Check:

```js
console.log(typeof BigInt);
```

Output:

```text
bigint
```

Ek better variable name use karna useful hoga:

```js
let bigNumber = 123456789012345678901234567890n;
```

Kyunki `BigInt` JavaScript ka built-in constructor bhi hai:

```js
BigInt(123);
```

Isliye ye:

```js
let BigInt = ...
```

technically ho sakta hai, lekin naming ke liye avoid karna better hai.

Prefer:

```js
let bigNumber = 12345678901234567890n;
```

---

# 15. BigInt kyun hota hai?

JavaScript `number` type bahut large integers ko exact precision ke saath represent nahi kar sakta.

Isliye extremely large integer values ke liye `BigInt` use kiya ja sakta hai.

Example:

```js
let hugeNumber = 999999999999999999999999999999n;
```

Check:

```js
console.log(typeof hugeNumber);
```

Output:

```text
bigint
```

---

# 16. Symbol

Tumhara code:

```js
let symbol = Symbol("This is a symbol");
```

`Symbol` unique values create karne ke liye use hota hai.

Check:

```js
console.log(typeof symbol);
```

Output:

```text
symbol
```

Example:

```js
let id1 = Symbol("id");
let id2 = Symbol("id");
```

Descriptions same hain:

```js
Symbol("id")
Symbol("id")
```

Lekin:

```js
console.log(id1 === id2);
```

Output:

```text
false
```

Kyunki har `Symbol()` call ek unique symbol create karta hai.

Beginner level par yaad rakho:

> `Symbol` unique identifiers banane ke liye use hota hai.

---

# 17. Tumhare Primitive Types ka summary

Tumhara code:

```js
let age = 24;
let city = null;
let bigNumber = 1234567890123456789012345678901234567890n;
let isLoggedIn = false;
let name = "Mubashir";
let symbol = Symbol("This is a symbol");
let state;
```

Types:

```js
console.log(typeof age);        // number
console.log(typeof city);       // object ⚠️ null quirk
console.log(typeof bigNumber);  // bigint
console.log(typeof isLoggedIn); // boolean
console.log(typeof name);       // string
console.log(typeof symbol);     // symbol
console.log(typeof state);      // undefined
```

Mapping:

| Value        | Actual Type | `typeof` Result |
| ------------ | ----------- | --------------- |
| `24`         | Number      | `"number"`      |
| `"Mubashir"` | String      | `"string"`      |
| `false`      | Boolean     | `"boolean"`     |
| `undefined`  | Undefined   | `"undefined"`   |
| `null`       | Null        | `"object"` ⚠️   |
| `123n`       | BigInt      | `"bigint"`      |
| `Symbol()`   | Symbol      | `"symbol"`      |

---

# 18. `typeof` Operator

`typeof` kisi value ka type check karne ke liye use hota hai.

Syntax:

```js
typeof value
```

Example:

```js
let age = 24;

console.log(typeof age);
```

Output:

```text
number
```

Direct values par bhi use kar sakte ho:

```js
console.log(typeof 100);          // number
console.log(typeof "Mubashir");   // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof 123n);         // bigint
console.log(typeof Symbol("id")); // symbol
console.log(typeof null);         // object ⚠️
```

---

# 19. Non-Primitive / Object Types

Tumne notes me likha hai:

```text
Object
Function
Array
Date
RegExp
Error
```

Beginner understanding ke liye ye useful categories hain, lekin ek important concept samjho:

JavaScript me `Array`, `Date`, `RegExp`, etc. technically **objects** hain.

Example:

```js
let user = {
    name: "Mubashir"
};

console.log(typeof user);
```

Output:

```text
object
```

---

# 20. Array

Example:

```js
let cities = ["Karachi", "Lahore", "Islamabad"];
```

Check:

```js
console.log(typeof cities);
```

Output:

```text
object
```

Interesting:

```text
Array ka typeof → "object"
```

Isliye array correctly check karne ke liye:

```js
console.log(Array.isArray(cities));
```

Output:

```text
true
```

---

# 21. Function

Example:

```js
function greet() {
    console.log("Hello");
}
```

Check:

```js
console.log(typeof greet);
```

Output:

```text
function
```

Technically functions JavaScript me special callable objects hain, lekin `typeof` unke liye `"function"` return karta hai.

---

# 22. Date

Example:

```js
let today = new Date();

console.log(typeof today);
```

Output:

```text
object
```

`Date` object hai.

---

# 23. RegExp

Regular expressions text patterns ko match/search karne ke liye use hote hain.

Example:

```js
let pattern = /hello/;

console.log(typeof pattern);
```

Output:

```text
object
```

---

# 24. Error

Example:

```js
let error = new Error("Something went wrong");

console.log(typeof error);
```

Output:

```text
object
```

---

# 25. Primitive vs Object — Basic Difference

Primitive values simple values hoti hain:

```js
let age = 24;
let name = "Mubashir";
let loggedIn = false;
```

Objects multiple values/properties contain kar sakte hain:

```js
let user = {
    name: "Mubashir",
    age: 24,
    city: "Karachi"
};
```

Primitive:

```text
"Mubashir"
24
false
null
undefined
123n
Symbol()
```

Object:

```js
{
    name: "Mubashir",
    age: 24
}
```

---

# 26. Important interview-style question

### JavaScript me kitne primitive data types hain?

Answer:

```text
7
```

They are:

```text
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

---

# 27. Important `typeof` outputs yaad karo

```js
typeof 24;
```

```text
"number"
```

```js
typeof "Mubashir";
```

```text
"string"
```

```js
typeof true;
```

```text
"boolean"
```

```js
typeof undefined;
```

```text
"undefined"
```

```js
typeof null;
```

```text
"object"
```

```js
typeof 123n;
```

```text
"bigint"
```

```js
typeof Symbol("id");
```

```text
"symbol"
```

```js
typeof {};
```

```text
"object"
```

```js
typeof [];
```

```text
"object"
```

```js
typeof function () {};
```

```text
"function"
```

---

# 28. Tumhare current code ka cleaner version

```js
"use strict";

console.log("Hello World!");
console.log("Hello World!");

// Primitive Data Types

let age = 24; // Number

let city = null; // Null

let bigNumber =
    1234567890123456789012345678901234567890n; // BigInt

let isLoggedIn = false; // Boolean

let name = "Mubashir"; // String

let uniqueSymbol = Symbol("This is a symbol"); // Symbol

let state; // Undefined


console.log(typeof age);          // number
console.log(typeof city);         // object (historical null behavior)
console.log(typeof bigNumber);    // bigint
console.log(typeof isLoggedIn);   // boolean
console.log(typeof name);         // string
console.log(typeof uniqueSymbol); // symbol
console.log(typeof state);        // undefined
```

---

# 29. Ek important naming improvement

Ye avoid karna better hai:

```js
let BigInt = 12345n;
```

Kyunki JavaScript me already built-in hai:

```js
BigInt()
```

Example:

```js
let number = BigInt(123);
```

Isliye variable ka naam:

```js
let bigNumber = 12345n;
```

better hai.

Isi tarah built-in names ko variable names banane se generally bachna chahiye.

---

# 30. Quick Revision

```text
JavaScript Data Types

Primitive:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Objects / Non-Primitive:
- Object
- Array
- Function
- Date
- RegExp
- Error
- etc.
```

### `typeof` revision:

```text
Number      → number
String      → string
Boolean     → boolean
Undefined   → undefined
Null        → object ⚠️
BigInt      → bigint
Symbol      → symbol

Object      → object
Array       → object
Function    → function
Date        → object
```

---

# Memory Trick 🧠

Primitive ke 7 types ko is sequence me yaad kar sakte ho:

```text
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

Short form:

```text
S N B U N B S
```

Sabse important exceptions:

```text
typeof null  → "object"
typeof []    → "object"
typeof function(){} → "function"
```

Aur sabse important concept:

```text
null      = jaan-bujhkar empty value
undefined = value assign nahi hui
```
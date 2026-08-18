# JavaScript Objects Part 1 — Short Notes

JavaScript me **Object** ka use related data ko **key-value pairs** ki form me store karne ke liye hota hai.

Example:

```js
const person = {
    name: "Mubashir",
    age: 24,
    city: "Karachi"
};
```

Yahan:

```text
name → key
"Mubashir" → value
```

---

# 1. Singleton Object

Tumhara comment:

```js
// singleton object
// Object.create();
```

JavaScript me object create karne ka ek tareeqa:

```js
Object.create();
```

Tumhare current code me main object **object literal** se create hua hai.

---

# 2. Object Literal

Tumhara code:

```js
const person2 = {
    name: "Mubashir",
    myFullName: "Mubashir Ibrahim",
    age: 24,
    city: "Karachi",
    isLoggedIn: true,
    occupation: "Software Engineer"
};
```

Ye:

```text
Object Literal
```

kehlata hai.

Syntax:

```js
const objectName = {
    key: value,
    key: value
};
```

---

# 3. Object me Different Data Types

Tumhare object me different data types hain:

```text
name: "Mubashir"         → string
age: 24                  → number
isLoggedIn: true         → boolean
lastLoginDays: [...]     → array
myDetails: function(){}  → function / method
```

Object ke andar different types ki values store ki ja sakti hain.

---

# 4. Symbol Key

Tumhara code:

```js
const mySym = Symbol("Key1");
```

Ye ek unique Symbol create karta hai.

Phir object me:

```js
[mySym]: "myKey1"
```

use hua hai.

Important:

```text
Symbol ko object key banane ke liye square brackets use hote hain.
```

Correct:

```js
[mySym]: "myKey1"
```

---

# 5. Symbol ko Access Karna

Tumhara code:

```js
console.log(person2[mySym]);
```

Output:

```text
myKey1
```

Correct access:

```js
person2[mySym]
```

---

# 6. Dot Notation

Tumhara code:

```js
console.log(person2.occupation);
```

Output:

```text
Software Engineer
```

Syntax:

```js
object.key
```

Examples:

```js
person2.name;
person2.age;
person2.city;
```

---

# 7. Bracket Notation

Tumhara code:

```js
console.log(person2["occupation"]);
```

Output:

```text
Software Engineer
```

Syntax:

```js
object["key"]
```

Examples:

```js
person2["name"];
person2["age"];
```

---

# 8. Dot vs Bracket Notation

Dono ka result same ho sakta hai:

```js
person2.occupation;
```

Aur:

```js
person2["occupation"];
```

Bracket notation useful hoti hai jab:

```text
key dynamic ho
key me spaces hon
Symbol key ho
```

Symbol ke liye:

```js
person2[mySym]
```

use karna hota hai.

---

# 9. Array Inside Object

Tumhara code:

```js
lastLoginDays: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
```

Object ke andar array bhi store ho sakta hai.

---

# 10. Array Element Access Inside Object

Tumhara code:

```js
console.log(person2.lastLoginDays[2]);
```

Indexes:

```text
0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
```

Output:

```text
Tuesday
```

Flow:

```text
person2
↓
lastLoginDays
↓
index 2
↓
Tuesday
```

---

# 11. Function Inside Object

Tumhara code:

```js
myDetails: function () {
    console.log(
        `My name is ${this.name} and I am ${this.age} years old and I live in ${this.city}`
    );
}
```

Object ke andar function ko generally:

```text
Method
```

kehte hain.

So:

```text
myDetails → object method
```

---

# 12. `this` Keyword

Tumhare method me:

```js
this.name
this.age
this.city
```

use hua hai.

Yahan `this` current object ko refer karta hai.

Conceptually:

```js
this.name
```

means:

```js
person2.name
```

Aur:

```js
this.age
```

means:

```js
person2.age
```

---

# 13. Object Method Call

Tumhara code:

```js
person2.myDetails();
```

Output:

```text
My name is Mubashir and I am 24 years old and I live in Karachi
```

Method call syntax:

```js
object.method();
```

---

# 14. New Property Add Karna

Tumhara code:

```js
person2.email = "officialmubashir77@gmail.com";
```

Object create hone ke baad new property add ki ja sakti hai.

After:

```text
email → "officialmubashir77@gmail.com"
```

---

# 15. Existing Property Update Karna

Normally object ki property update bhi kar sakte ho:

```js
person2.city = "Lahore";
```

Agar object freeze nahi hai, property value change ho sakti hai.

---

# 16. `Object.freeze()`

Tumhara code:

```js
Object.freeze(person2);
```

`Object.freeze()` object ko freeze karta hai.

Simple understanding:

```text
freeze ke baad:
existing properties change nahi hoti
new properties add nahi hoti
properties delete nahi hoti
```

---

# 17. Freeze ke Baad Update

Tumhara code:

```js
Object.freeze(person2);

person2.email = "officialmubashir77new@gmail.com";
```

Tum email update karne ki koshish kar rahe ho.

Lekin object freeze ho chuka hai.

Isliye old value same rehti hai:

```text
officialmubashir77@gmail.com
```

---

# 18. Freeze Before and After

Before freeze:

```js
person2.email = "officialmubashir77@gmail.com";
```

Ye work karta hai.

After:

```js
Object.freeze(person2);
```

Then:

```js
person2.email = "officialmubashir77new@gmail.com";
```

change apply nahi hota.

---

# 19. Complete Object Structure

Tumhara object:

```js
const person2 = {
    name: "Mubashir",
    myFullName: "Mubashir Ibrahim",
    [mySym]: "myKey1",
    age: 24,
    city: "Karachi",
    isLoggedIn: true,
    occupation: "Software Engineer",
    lastLoginDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    myDetails: function () {
        console.log(
            `My name is ${this.name} and I am ${this.age} years old and I live in ${this.city}`
        );
    }
};
```

Isme:

```text
strings
number
boolean
Symbol key
array
function/method
```

sab included hain.

---

# Quick Revision

## Object Literal

```js
const person = {
    name: "Mubashir",
    age: 24
};
```

---

## Dot Notation

```js
person.name;
```

---

## Bracket Notation

```js
person["name"];
```

---

## Symbol Key

```js
const mySym = Symbol("Key1");

const obj = {
    [mySym]: "myKey1"
};

obj[mySym];
```

---

## Array Inside Object

```js
const person = {
    days: ["Sunday", "Monday", "Tuesday"]
};

person.days[2];
// Tuesday
```

---

## Method Inside Object

```js
const person = {
    name: "Mubashir",

    greet: function () {
        console.log(this.name);
    }
};

person.greet();
```

---

## Add Property

```js
person.email = "example@gmail.com";
```

---

## Freeze Object

```js
Object.freeze(person);
```

After freeze:

```text
property update nahi hoti
```

---

# Important Table

| Concept | Syntax | Meaning |
|---|---|---|
| Object Literal | `{}` | Object create |
| Dot Notation | `obj.key` | Property access |
| Bracket Notation | `obj["key"]` | Property access |
| Symbol Key | `[mySym]` | Symbol as object key |
| Array in Object | `obj.arr[0]` | Nested array access |
| Method | `obj.method()` | Function inside object |
| `this` | `this.name` | Current object property |
| Add Property | `obj.email = ...` | New key/value |
| Freeze | `Object.freeze(obj)` | Changes stop |

---

# One-line Formula 🧠

```text
{}               → object literal
obj.key          → dot notation
obj["key"]       → bracket notation
obj[symbol]      → Symbol property access
obj.arr[index]   → array inside object
obj.method()     → object method
this.key         → current object ki property
obj.newKey=value → property add
Object.freeze()  → object changes stop
```

Sabse important:

```text
[mySym]
→ Symbol ko key banane ke liye
```

```text
person2[mySym]
→ Symbol key access
```

```text
this.name
→ current object ka name
```

```text
Object.freeze(person2)
→ uske baad property update nahi hoti
```

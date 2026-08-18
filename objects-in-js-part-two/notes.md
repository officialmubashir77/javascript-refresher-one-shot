# JavaScript Objects Part 2 — Short Notes

JavaScript Objects Part 2 me hum object creation, nested objects, optional chaining, objects combine karna, object keys/values/entries, property checking, array of objects aur `map()` ko samajhte hain.

Important topics:

```text
Object creation
Nested Objects
Optional Chaining (?.)
Spread Operator (...)
Object.assign()
Object.keys()
Object.values()
Object.entries()
hasOwnProperty()
Object.hasOwn()
Array of Objects
map()
```

---

# 1. Creating an Object

JavaScript me object create karne ke multiple tareeqe hain.

Tumhara code:

```js
// const tinderUser = new Object();

const tinderUser = {};
```

Dono object create karte hain.

### Object Literal

```js
const tinderUser = {};
```

Ye modern JavaScript me common aur simple syntax hai.

---

# 2. Object me Properties Add Karna

Tumhara code:

```js
tinderUser.id = "123abc";
tinderUser.name = "Mubashir";
tinderUser.isLoggedIn = true;
```

Object pehle empty tha:

```js
{}
```

Properties add karne ke baad:

```js
{
  id: "123abc",
  name: "Mubashir",
  isLoggedIn: true
}
```

### Memory Trick

```text
object.key = value
→ object me property add/update
```

---

# 3. Nested Objects

Object ke andar object store ho sakta hai.

Tumhara code:

```js
const regularUser = {
  email: "0eB2A@example.com",

  fullName: {
    userFullName: {
      firstName: "Mubashir",
      lastName: "Ibrahim"
    }
  }
};
```

Structure:

```text
regularUser
│
├── email
│
└── fullName
    │
    └── userFullName
        ├── firstName
        └── lastName
```

Isko:

```text
Nested Object
```

kehte hain.

---

# 4. Nested Property Access

Tumhara code:

```js
regularUser.fullName.userFullName.firstName;
```

Output:

```text
Mubashir
```

Flow:

```text
regularUser
↓
fullName
↓
userFullName
↓
firstName
↓
"Mubashir"
```

---

# 5. Optional Chaining `?.`

Tumhara code:

```js
regularUser.fullName?.userFullName?.firstName;
```

Optional chaining ka syntax:

```js
?.
```

Ye nested property ko safely access karne ke liye use hota hai.

Agar property exist karti ho:

```js
regularUser.fullName?.userFullName?.firstName;
```

Output:

```text
Mubashir
```

---

# 6. Missing Property with Optional Chaining

Tumhara code:

```js
regularUser.address?.city;
```

Output:

```text
undefined
```

Kyunki:

```text
address property exist nahi karti
```

Optional chaining error throw karne ke bajaye:

```text
undefined
```

return karti hai.

---

# 7. Without Optional Chaining

Agar tum likho:

```js
regularUser.address.city;
```

aur `address` exist nahi karta, to error aa sakta hai.

Isliye nested objects me:

```js
?.
```

useful hota hai.

### Memory Trick

```text
?. → safe property access
```

---

# 8. Objects Combine Using Spread Operator

Tumhare objects:

```js
const obj1 = {
  1: "one",
  2: "two",
  3: "three"
};

const obj2 = {
  4: "four",
  5: "five",
  6: "six"
};
```

Spread operator:

```js
const combinedObject = {
  ...obj1,
  ...obj2
};
```

Result:

```js
{
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six"
}
```

---

# 9. Spread Operator `...`

Spread operator:

```text
...
```

object ki properties ko spread/open karta hai.

Conceptually:

```js
...obj1
```

means obj1 ki properties ko new object me copy/spread karo.

### Memory Trick

```text
{ ...obj1, ...obj2 }
→ objects combine
```

---

# 10. `Object.assign()`

Tumhara code:

```js
const assignedObject = Object.assign({}, obj1, obj2);
```

Syntax:

```js
Object.assign(target, source1, source2);
```

Yahan:

```text
{}   → target
obj1 → source 1
obj2 → source 2
```

Result:

```js
{
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six"
}
```

---

# 11. Spread vs `Object.assign()`

### Spread

```js
const result = {
  ...obj1,
  ...obj2
};
```

### Object.assign

```js
const result = Object.assign({}, obj1, obj2);
```

Dono objects combine kar sakte hain.

Modern JavaScript me spread syntax generally zyada readable hoti hai.

---

# 12. `Object.keys()`

Tumhara code:

```js
const obj1Keys = Object.keys(obj1);
```

Output:

```js
["1", "2", "3"]
```

`Object.keys()` object ki sari keys ko array me return karta hai.

Important:

```text
result → array
```

---

# 13. Numeric-Looking Object Keys

Tumhare object me:

```js
{
  1: "one",
  2: "two",
  3: "three"
}
```

`Object.keys()` result:

```js
["1", "2", "3"]
```

Notice:

```text
keys strings ke form me milti hain
```

---

# 14. `Object.values()`

Tumhara code:

```js
const obj2Values = Object.values(obj2);
```

Output:

```js
["four", "five", "six"]
```

`Object.values()` object ki sari values ko array me return karta hai.

### Memory Trick

```text
Object.keys()   → keys
Object.values() → values
```

---

# 15. `Object.entries()`

Tumhara code:

```js
const obj1Entries = Object.entries(obj1);
```

Output:

```js
[
  ["1", "one"],
  ["2", "two"],
  ["3", "three"]
]
```

`Object.entries()` har property ko:

```text
[key, value]
```

pair ke form me return karta hai.

---

# 16. Keys vs Values vs Entries

Example:

```js
const user = {
  name: "Mubashir",
  age: 24
};
```

### Keys

```js
Object.keys(user);
```

Result:

```js
["name", "age"]
```

### Values

```js
Object.values(user);
```

Result:

```js
["Mubashir", 24]
```

### Entries

```js
Object.entries(user);
```

Result:

```js
[
  ["name", "Mubashir"],
  ["age", 24]
]
```

---

# 17. `hasOwnProperty()`

Tumhara code:

```js
console.log(obj1.hasOwnProperty("1"));
```

Output:

```text
true
```

Aur:

```js
console.log(obj1.hasOwnProperty("10"));
```

Output:

```text
false
```

`hasOwnProperty()` check karta hai ke property object ki apni property hai ya nahi.

Return:

```text
true
false
```

---

# 18. Modern Alternative: `Object.hasOwn()`

Tumhara code:

```js
console.log(Object.hasOwn(obj1, "1"));
```

Output:

```text
true
```

Modern syntax:

```js
Object.hasOwn(object, property);
```

Example:

```js
Object.hasOwn(obj1, "10");
```

Output:

```text
false
```

---

# 19. Array of Objects

Real-world JavaScript applications me arrays ke andar objects bohat common hote hain.

Tumhara code:

```js
const users = [
  {
    id: 1,
    email: "mubashir@example.com",
    name: "Mubashir"
  },

  {
    id: 2,
    email: "ali@example.com",
    name: "Ali"
  },

  {
    id: 3,
    email: "ashir@example.com",
    name: "Ashir"
  }
];
```

Structure:

```text
Array
│
├── Object 1
├── Object 2
└── Object 3
```

---

# 20. Specific Object Access

Tumhara code:

```js
console.log(users[0]);
```

Output:

```js
{
  id: 1,
  email: "mubashir@example.com",
  name: "Mubashir"
}
```

Arrays zero-indexed hoti hain:

```text
users[0] → first user
users[1] → second user
users[2] → third user
```

---

# 21. Specific Property from Array of Objects

Tumhara code:

```js
console.log(users[0].name);
```

Output:

```text
Mubashir
```

Flow:

```text
users
↓
index 0
↓
first object
↓
name
↓
"Mubashir"
```

---

# 22. Another Property Example

Tumhara code:

```js
console.log(users[1].email);
```

Output:

```text
ali@example.com
```

Flow:

```text
users[1]
→ second user

.email
→ "ali@example.com"
```

---

# 23. `map()` with Array of Objects

Tumhara code:

```js
const userNames = users.map((user) => {
  return user.name;
});
```

`map()` array ke har element par function run karta hai.

Normally:

```text
new array return karta hai
```

Yahan har user object se:

```text
name
```

nikala ja raha hai.

Output:

```js
["Mubashir", "Ali", "Ashir"]
```

---

# 24. `map()` Flow

Original:

```js
[
  { name: "Mubashir" },
  { name: "Ali" },
  { name: "Ashir" }
]
```

Code:

```js
users.map((user) => {
  return user.name;
});
```

Flow:

```text
user 1 → "Mubashir"
user 2 → "Ali"
user 3 → "Ashir"
```

Final:

```js
["Mubashir", "Ali", "Ashir"]
```

---

# 25. Short Arrow Function Syntax

Tumhara code:

```js
const userEmails = users.map(user => user.email);
```

Ye short syntax hai.

Equivalent long version:

```js
const userEmails = users.map((user) => {
  return user.email;
});
```

Dono same result dete hain.

---

# 26. `map()` Email Example

```js
const userEmails = users.map(user => user.email);
```

Output:

```js
[
  "mubashir@example.com",
  "ali@example.com",
  "ashir@example.com"
]
```

### Memory Trick

```text
map()
→ har element par function
→ new array
```

---

# 27. Important Object Combination Point

Agar spread me same key ho:

```js
const obj1 = {
  name: "Mubashir"
};

const obj2 = {
  name: "Ali"
};

const result = {
  ...obj1,
  ...obj2
};
```

Later property overwrite kar sakti hai earlier property ko.

Result:

```js
{
  name: "Ali"
}
```

Rule:

```text
later value wins
```

---

# Quick Revision

## Empty Object

```js
const tinderUser = {};
```

---

## Add Property

```js
tinderUser.name = "Mubashir";
```

---

## Nested Object

```js
const user = {
  fullName: {
    firstName: "Mubashir"
  }
};
```

Access:

```js
user.fullName.firstName;
```

---

## Optional Chaining

```js
user.address?.city;
```

Missing ho to:

```text
undefined
```

---

## Spread Objects

```js
const combined = {
  ...obj1,
  ...obj2
};
```

---

## Object.assign

```js
Object.assign({}, obj1, obj2);
```

---

## Keys

```js
Object.keys(obj1);
```

---

## Values

```js
Object.values(obj1);
```

---

## Entries

```js
Object.entries(obj1);
```

---

## Property Check

```js
obj1.hasOwnProperty("1");
```

Modern:

```js
Object.hasOwn(obj1, "1");
```

---

## Array of Objects

```js
const users = [
  { name: "Mubashir" },
  { name: "Ali" }
];
```

Access:

```js
users[0].name;
```

---

## `map()`

```js
const names = users.map(user => user.name);
```

Result:

```js
["Mubashir", "Ali"]
```

---

# Important Table

| Concept | Syntax | Result |
|---|---|---|
| Empty Object | `{}` | New object |
| Add Property | `obj.key = value` | Property add/update |
| Nested Property | `obj.a.b.c` | Deep access |
| Optional Chaining | `obj.a?.b` | Safe access |
| Spread | `{...obj1, ...obj2}` | Combined object |
| `Object.assign()` | `Object.assign({}, obj1, obj2)` | Combined object |
| `Object.keys()` | `Object.keys(obj)` | Keys array |
| `Object.values()` | `Object.values(obj)` | Values array |
| `Object.entries()` | `Object.entries(obj)` | `[key,value]` arrays |
| `hasOwnProperty()` | `obj.hasOwnProperty("key")` | true/false |
| `Object.hasOwn()` | `Object.hasOwn(obj,"key")` | true/false |
| Array of Objects | `users[0]` | Specific object |
| `map()` | `users.map(...)` | New array |

---

# One-line Formula 🧠

```text
{}                     → empty object
obj.key = value        → property add/update
obj.a.b                 → nested access
obj.a?.b                → safe nested access

{ ...obj1, ...obj2 }    → objects combine
Object.assign()         → objects combine

Object.keys()           → keys array
Object.values()         → values array
Object.entries()        → key-value pairs

hasOwnProperty()        → property check
Object.hasOwn()         → modern property check

users[0]                → first object
users[0].name           → first object's name

map()                   → har item process + new array
```

Sabse important:

```text
?. 
→ property missing ho to error ke bajaye undefined
```

```text
{ ...obj1, ...obj2 }
→ modern object combine syntax
```

```text
Object.keys() / values() / entries()
→ object data ko arrays me convert
```

```text
users.map(user => user.name)
→ array of objects se names ka new array
```

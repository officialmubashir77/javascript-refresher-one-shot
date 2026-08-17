# JavaScript Arrays Part 2 — Short Notes

JavaScript Arrays Part 2 me hum arrays ko combine karna, nested arrays ko flat karna, array check karna aur different values ko array me convert karna seekhte hain.

Important topics:

```text
push()
concat()
Spread Operator (...)
flat()
Array.isArray()
Array.from()
Object.values()
Object.keys()
Object.entries()
Array.of()
```

---

# 1. Do Arrays ko Combine Karna

Tumhare arrays:

```js
const marvelHeroes = [
  "Thor",
  "Captain America",
  "Hulk",
  "Iron Man"
];

const dcHeroes = [
  "Superman",
  "Batman",
  "Flash",
  "Aquaman"
];
```

Dono separate arrays hain.

---

# 2. `push()` se Array Combine Karna

Agar tum poora array doosre array me `push()` karte ho:

```js
marvelHeroes.push(dcHeroes);
```

to `dcHeroes` ke individual elements directly add nahi hote.

Instead:

```text
poora dcHeroes array
```

ek single element ban kar `marvelHeroes` ke andar chala jata hai.

Result:

```js
[
  "Thor",
  "Captain America",
  "Hulk",
  "Iron Man",
  ["Superman", "Batman", "Flash", "Aquaman"]
]
```

Isko:

```text
Nested Array
```

kehte hain.

---

## 3. `push()` Important Point

```text
push() original array ko CHANGE karta hai
```

Aur agar poora array push karo:

```text
array ke andar array
```

ban sakta hai.

### Memory Trick

```text
push(array)
→ nested array ban sakta hai
```

---

# 4. `concat()`

Tumhara code:

```js
const allHeroes = marvelHeroes.concat(dcHeroes);

console.log(allHeroes);
```

`concat()` do ya zyada arrays ko combine karta hai.

Result:

```js
[
  "Thor",
  "Captain America",
  "Hulk",
  "Iron Man",
  "Superman",
  "Batman",
  "Flash",
  "Aquaman"
]
```

Important:

```text
concat() original arrays ko change nahi karta
```

Ye:

```text
new array return karta hai
```

---

## 5. `concat()` Example

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

const result = arr1.concat(arr2);
```

Result:

```text
[1, 2, 3, 4]
```

Original:

```text
arr1 → [1, 2]
arr2 → [3, 4]
```

same rehte hain.

---

# 6. Spread Operator `...`

Tumhara code:

```js
const allHeroes2 = [...marvelHeroes, ...dcHeroes];
```

Spread operator:

```js
...
```

array ke elements ko spread/open kar deta hai.

Conceptually:

```js
...marvelHeroes
```

means:

```text
"Thor",
"Captain America",
"Hulk",
"Iron Man"
```

Aur:

```js
...dcHeroes
```

means:

```text
"Superman",
"Batman",
"Flash",
"Aquaman"
```

Final array:

```js
[
  ...marvelHeroes,
  ...dcHeroes
]
```

becomes:

```text
[
  "Thor",
  "Captain America",
  "Hulk",
  "Iron Man",
  "Superman",
  "Batman",
  "Flash",
  "Aquaman"
]
```

---

## 7. `concat()` vs Spread

Dono arrays combine kar sakte hain.

### `concat()`

```js
const result = arr1.concat(arr2);
```

### Spread

```js
const result = [...arr1, ...arr2];
```

Modern JavaScript me spread syntax bohat common hai.

### Memory Trick

```text
...array
→ array ke elements ko open/spread karo
```

---

# 8. Nested Arrays

Tumhara code:

```js
const nestedArray = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, 9, [10, 11]]
];
```

Isme arrays ke andar arrays hain.

Example:

```text
[4, 5, 6]
```

ek nested array hai.

Aur:

```text
[8, 9, [10, 11]]
```

ke andar aur bhi nested array hai.

---

# 9. `.flat()`

`flat()` nested arrays ko simple array me convert karta hai.

Tumhara code:

```js
const flatOneLevel = nestedArray.flat(1);
```

`flat(1)` sirf **1 level** tak nested arrays ko open karta hai.

---

## 10. `flat(1)`

Original:

```js
[
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, 9, [10, 11]]
]
```

After:

```js
nestedArray.flat(1);
```

Result:

```js
[
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  [10, 11]
]
```

Notice:

```text
[10, 11]
```

abhi bhi nested hai.

Kyunki humne:

```js
flat(1)
```

use kiya tha.

---

# 11. `flat(Infinity)`

Tumhara code:

```js
const completelyFlatArray = nestedArray.flat(Infinity);
```

Ye har nested level ko flat kar deta hai.

Output:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

### Memory Trick

```text
flat(1)
→ 1 level

flat(Infinity)
→ jitne levels hain sab
```

---

# 12. `Array.isArray()`

Tumhara code:

```js
console.log(Array.isArray("Mubashir"));
```

Output:

```text
false
```

Kyunki:

```text
"Mubashir"
```

string hai, array nahi.

---

## 13. Array Check

```js
console.log(Array.isArray(["Mubashir"]));
```

Output:

```text
true
```

Aur:

```js
console.log(Array.isArray([1, 2, 3]));
```

Output:

```text
true
```

`Array.isArray()` check karta hai:

```text
value array hai ya nahi
```

Return:

```text
true
false
```

---

# 14. `Array.from()`

Tumhara code:

```js
const nameArray = Array.from("Mubashir");
```

`Array.from()` iterable / array-like value ko array me convert karta hai.

String:

```text
"Mubashir"
```

Result:

```js
["M", "u", "b", "a", "s", "h", "i", "r"]
```

Har character ek separate array element ban gaya.

---

## 15. `Array.from()` String Example

```js
Array.from("Hello");
```

Result:

```js
["H", "e", "l", "l", "o"]
```

### Memory Trick

```text
Array.from("text")
→ characters ka array
```

---

# 16. `Array.from()` with Normal Object

Tumhara code:

```js
const user = {
  name: "Mubashir"
};

console.log(Array.from(user));
```

Tumhare given example me output:

```text
[]
```

Tumhare notes ke mutabiq:

```text
normal object iterable nahi hota
```

Isliye normal object ki values expected way me nahi milti.

---

# 17. Object ki Values Array me

Tumhara code:

```js
console.log(Object.values(user));
```

Output:

```js
["Mubashir"]
```

`Object.values()` object ki values return karta hai.

Example:

```js
const user = {
  name: "Mubashir",
  age: 24
};

Object.values(user);
```

Result:

```js
["Mubashir", 24]
```

---

# 18. Object ki Keys Array me

Tumhara code:

```js
console.log(Object.keys(user));
```

Output:

```js
["name"]
```

`Object.keys()` object ki keys return karta hai.

Example:

```js
const user = {
  name: "Mubashir",
  age: 24
};
```

Result:

```js
["name", "age"]
```

---

# 19. Object ki Keys + Values

Tumhara code:

```js
console.log(Object.entries(user));
```

Output:

```js
[["name", "Mubashir"]]
```

`Object.entries()`:

```text
key + value
```

dono return karta hai.

Example:

```js
const user = {
  name: "Mubashir",
  age: 24
};
```

Result:

```js
[
  ["name", "Mubashir"],
  ["age", 24]
]
```

---

# 20. `Object.values()` vs `Object.keys()` vs `Object.entries()`

```text
Object.values(obj)
→ values
```

```text
Object.keys(obj)
→ keys
```

```text
Object.entries(obj)
→ key + value pairs
```

Example:

```js
const user = {
  name: "Mubashir"
};
```

```js
Object.values(user);
// ["Mubashir"]
```

```js
Object.keys(user);
// ["name"]
```

```js
Object.entries(user);
// [["name", "Mubashir"]]
```

---

# 21. `Array.of()`

Tumhara code:

```js
let score1 = "33";
let score2 = "200";
let score3 = "300";

const scores = Array.of(score1, score2, score3);
```

Result:

```js
["33", "200", "300"]
```

`Array.of()` multiple values ko ek new array me convert karta hai.

---

## 22. `Array.of()` with Numbers

Tumhara code:

```js
const numbers = Array.of(10, 20, 30);
```

Output:

```js
[10, 20, 30]
```

### Memory Trick

```text
Array.of(a, b, c)
→ [a, b, c]
```

---

# 23. `Array.from()` vs `Array.of()`

### `Array.from()`

Kisi iterable / array-like value ko array me convert karta hai.

Example:

```js
Array.from("Mubashir");
```

Result:

```js
["M", "u", "b", "a", "s", "h", "i", "r"]
```

### `Array.of()`

Given values ko array ke elements bana deta hai.

```js
Array.of("Mubashir", 24, true);
```

Result:

```js
["Mubashir", 24, true]
```

---

# Quick Revision

## Push poora array

```js
marvelHeroes.push(dcHeroes);
```

Result:

```text
Nested Array
```

Original `marvelHeroes` change hota hai.

---

## `concat()`

```js
const allHeroes = marvelHeroes.concat(dcHeroes);
```

```text
arrays combine
new array
original same
```

---

## Spread

```js
const allHeroes = [...marvelHeroes, ...dcHeroes];
```

```text
arrays ke elements open/spread
```

---

## `flat(1)`

```js
nestedArray.flat(1);
```

```text
1 nested level open
```

---

## `flat(Infinity)`

```js
nestedArray.flat(Infinity);
```

```text
all nested levels flat
```

---

## `Array.isArray()`

```js
Array.isArray([1, 2, 3]);
// true
```

```js
Array.isArray("Mubashir");
// false
```

---

## `Array.from()`

```js
Array.from("Mubashir");
```

Result:

```js
["M", "u", "b", "a", "s", "h", "i", "r"]
```

---

## Object Values

```js
Object.values(user);
```

---

## Object Keys

```js
Object.keys(user);
```

---

## Object Entries

```js
Object.entries(user);
```

---

## `Array.of()`

```js
Array.of(10, 20, 30);
```

Result:

```js
[10, 20, 30]
```

---

# Important Table

| Method / Syntax | Kaam | Original Change? |
|---|---|---|
| `push(array)` | Array ko nested element ke tor par add kar sakta hai | Yes |
| `concat()` | Arrays combine | No |
| `[...arr1, ...arr2]` | Arrays combine using spread | No |
| `flat(1)` | 1 level flatten | No |
| `flat(Infinity)` | All levels flatten | No |
| `Array.isArray()` | Array check | No |
| `Array.from()` | Iterable/array-like → array | No |
| `Object.values()` | Object values → array | No |
| `Object.keys()` | Object keys → array | No |
| `Object.entries()` | Key-value pairs → array | No |
| `Array.of()` | Values → new array | No |

---

# One-line Formula 🧠

```text
push(array)
→ nested array ban sakta hai

concat()
→ arrays combine, new array

...array
→ elements spread/open

flat(1)
→ 1 level flatten

flat(Infinity)
→ all levels flatten

Array.isArray()
→ array hai? true/false

Array.from()
→ iterable/array-like ko array

Object.values()
→ object values

Object.keys()
→ object keys

Object.entries()
→ key + value pairs

Array.of()
→ given values ka new array
```

Sabse important:

```text
push(dcHeroes)
→ dcHeroes nested array ban sakta hai
```

```text
concat(dcHeroes)
→ heroes same level par combine
```

```text
[...marvelHeroes, ...dcHeroes]
→ modern spread syntax
```

```text
flat(Infinity)
→ deeply nested array ko completely flat
```

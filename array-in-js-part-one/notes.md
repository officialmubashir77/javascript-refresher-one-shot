# JavaScript Arrays — Short Notes

JavaScript me **Array** ka use multiple values ko ek hi variable ke andar store karne ke liye hota hai.

Example:

```js
const myArray = [1, 2, 3, 4];
```

Array ke andar different data types bhi store ho sakte hain.

---

# 1. Array Kya Hota Hai?

Tumhara code:

```js
const myArray = [
    1,
    2,
    3,
    4,
    true,
    "Mubashir",
    null,
    undefined,
    { name: "Mubashir" }
];

console.log(myArray);
```

Is array ke andar different types ki values hain:

```text
1                     → number
true                  → boolean
"Mubashir"            → string
null                  → null
undefined             → undefined
{ name: "Mubashir" }  → object
```

JavaScript arrays mixed data types hold kar sakte hain.

---

# 2. Simple Array

Tumhara code:

```js
const superHeroes = ["Superman", "Batman", "Flash", "Aquaman"];

console.log(superHeroes);
```

Output:

```text
["Superman", "Batman", "Flash", "Aquaman"]
```

Array ordered collection hota hai.

Har element ka ek index hota hai.

---

# 3. Array Indexing

Array indexing:

```text
0 se start hoti hai
```

Tumhara array:

```js
const superHeroes = ["Superman", "Batman", "Flash", "Aquaman"];
```

Indexes:

```text
0 → Superman
1 → Batman
2 → Flash
3 → Aquaman
```

Tumhara code:

```js
console.log(superHeroes[0]);
```

Output:

```text
Superman
```

Aur:

```js
console.log(superHeroes[2]);
```

Output:

```text
Flash
```

### Memory Trick

```text
Array ka first element → index 0
```

---

# 4. `new Array()`

Tumhara code:

```js
const numbers = new Array(1, 2, 3, 4, 5);
```

Ye bhi array create karta hai.

Output:

```text
[1, 2, 3, 4, 5]
```

Element access:

```js
console.log(numbers[2]);
```

Output:

```text
3
```

Normally array literal zyada common hai:

```js
const numbers = [1, 2, 3, 4, 5];
```

---

# 5. `.length`

Tumhara code:

```js
const myArr = [1, 2, 3, 4, 5];

console.log(myArr.length);
```

Output:

```text
5
```

`.length` array ke total elements count karta hai.

```text
[1, 2, 3, 4, 5]
→ 5 elements
```

---

# 6. `.push()`

Tumhara code:

```js
myArr.push(6);
```

`.push()` array ke **end** me element add karta hai.

Before:

```text
[1, 2, 3, 4, 5]
```

After:

```text
[1, 2, 3, 4, 5, 6]
```

Important:

```text
push() original array ko change karta hai
```

### Memory Trick

```text
push() → end me add
```

---

# 7. `.pop()`

Tumhara code:

```js
myArr.pop();
```

`.pop()` array ka **last element remove** karta hai.

Before:

```text
[1, 2, 3, 4, 5, 6]
```

After:

```text
[1, 2, 3, 4, 5]
```

Important:

```text
pop() original array ko change karta hai
```

### Memory Trick

```text
pop() → end se remove
```

---

# 8. `.unshift()`

Tumhara code:

```js
myArr.unshift(0);
```

`.unshift()` array ke **start** me element add karta hai.

Before:

```text
[1, 2, 3, 4, 5]
```

After:

```text
[0, 1, 2, 3, 4, 5]
```

Important:

```text
unshift() original array ko change karta hai
```

### Memory Trick

```text
unshift() → start me add
```

---

# 9. `.shift()`

Tumhara code:

```js
myArr.shift();
```

`.shift()` array ka **first element remove** karta hai.

Before:

```text
[0, 1, 2, 3, 4, 5]
```

After:

```text
[1, 2, 3, 4, 5]
```

Important:

```text
shift() original array ko change karta hai
```

### Memory Trick

```text
shift() → start se remove
```

---

# 10. Push / Pop / Shift / Unshift

Quick difference:

```text
push()    → end me add
pop()     → end se remove

unshift() → start me add
shift()   → start se remove
```

Example:

```js
let arr = [2, 3];

arr.push(4);
// [2, 3, 4]

arr.pop();
// [2, 3]

arr.unshift(1);
// [1, 2, 3]

arr.shift();
// [2, 3]
```

---

# 11. `.includes()`

Tumhara code:

```js
console.log(myArr.includes(3));
```

Output:

```text
true
```

Aur:

```js
console.log(myArr.includes(10));
```

Output:

```text
false
```

`.includes()` check karta hai ke given value array me present hai ya nahi.

Return:

```text
true
false
```

### Memory Trick

```text
includes() → value hai ya nahi?
```

---

# 12. `.indexOf()`

Tumhara code:

```js
console.log(myArr.indexOf(3));
```

Output:

```text
2
```

Array:

```text
[1, 2, 3, 4, 5]
```

Indexes:

```text
0  1  2  3  4
```

Isliye `3` ka index:

```text
2
```

Agar element na mile:

```js
console.log(myArr.indexOf(100));
```

Output:

```text
-1
```

### Memory Trick

```text
indexOf()
→ found = index
→ not found = -1
```

---

# 13. `.join()`

Tumhara code:

```js
const joinedArray = myArr.join("-");
```

Array:

```text
[1, 2, 3, 4, 5]
```

Result:

```text
1-2-3-4-5
```

Important:

`.join()` array ke elements ko join karke **string** return karta hai.

```js
console.log(typeof joinedArray);
```

Output:

```text
string
```

Original array change nahi hota.

---

## 14. `join()` Separator

Tumne separator diya:

```js
"-"
```

Isliye:

```text
1-2-3-4-5
```

Agar:

```js
myArr.join(" ");
```

Result:

```text
1 2 3 4 5
```

Agar:

```js
myArr.join(",");
```

Result:

```text
1,2,3,4,5
```

---

# 15. `.reverse()`

Tumhara code:

```js
const reverseExample = [1, 2, 3, 4, 5];

reverseExample.reverse();

console.log(reverseExample);
```

Output:

```text
[5, 4, 3, 2, 1]
```

`.reverse()` array ka order reverse karta hai.

Important:

```text
reverse() original array ko change karta hai
```

---

# SLICE vs SPLICE

Ye arrays ka bohat important concept hai.

```text
slice()  → copy
splice() → original array change
```

---

# 16. `.slice()`

Tumhara code:

```js
const sliceArray = [1, 2, 3, 4, 5];

const slicedPart = sliceArray.slice(0, 2);
```

Syntax:

```js
array.slice(startIndex, endIndex);
```

Important:

```text
startIndex included
endIndex NOT included
```

So:

```js
sliceArray.slice(0, 2);
```

Indexes:

```text
0 → 1
1 → 2
2 → stop
```

Result:

```text
[1, 2]
```

---

## 17. `slice()` Original Array Change Nahi Karta

Before:

```text
[1, 2, 3, 4, 5]
```

Code:

```js
const slicedPart = sliceArray.slice(0, 2);
```

New result:

```text
[1, 2]
```

Original:

```text
[1, 2, 3, 4, 5]
```

same rehta hai.

### Memory Trick

```text
slice() → copy leta hai
```

---

# 18. `.splice()`

Tumhara code:

```js
const spliceArray = [1, 2, 3, 4, 5];

const removedElements = spliceArray.splice(0, 2);
```

Syntax:

```js
array.splice(startIndex, deleteCount);
```

Yahan:

```text
startIndex = 0
deleteCount = 2
```

Matlab:

```text
index 0 se start karo
2 elements remove karo
```

Removed:

```text
[1, 2]
```

Original array after splice:

```text
[3, 4, 5]
```

---

# 19. `splice()` Original Array Change Karta Hai

Before:

```text
[1, 2, 3, 4, 5]
```

Code:

```js
spliceArray.splice(0, 2);
```

Removed values:

```text
[1, 2]
```

Original array becomes:

```text
[3, 4, 5]
```

### Memory Trick

```text
splice() → original array mutate/change karta hai
```

---

# 20. `slice()` vs `splice()`

## `slice()`

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.slice(0, 2);
```

Result:

```text
result → [1, 2]
arr    → [1, 2, 3, 4, 5]
```

Original change nahi hua.

---

## `splice()`

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.splice(0, 2);
```

Result:

```text
result → [1, 2]
arr    → [3, 4, 5]
```

Original change ho gaya.

---

# 21. Sabse Important Difference

```text
slice(start, end)
```

Yahan second argument:

```text
endIndex
```

hota hai.

Lekin:

```text
splice(start, deleteCount)
```

Yahan second argument:

```text
kitne elements remove karne hain
```

hota hai.

---

# 22. Mutation Summary

Original array ko change karne wale methods:

```text
push()
pop()
unshift()
shift()
reverse()
splice()
```

Tumhare current examples me original array ko change **na** karne wale:

```text
includes()
indexOf()
join()
slice()
```

---

# Quick Revision

## Create Array

```js
const arr = [1, 2, 3];
```

---

## Access Element

```js
arr[0];
// first element
```

---

## Length

```js
arr.length;
```

---

## Add at End

```js
arr.push(4);
```

---

## Remove from End

```js
arr.pop();
```

---

## Add at Start

```js
arr.unshift(0);
```

---

## Remove from Start

```js
arr.shift();
```

---

## Check Value

```js
arr.includes(3);
```

---

## Find Index

```js
arr.indexOf(3);
```

Not found:

```text
-1
```

---

## Array to String

```js
arr.join("-");
```

---

## Reverse Array

```js
arr.reverse();
```

Original array change hota hai.

---

## Slice

```js
arr.slice(0, 2);
```

```text
end index include nahi hota
original array same
```

---

## Splice

```js
arr.splice(0, 2);
```

```text
2 elements remove
original array change
```

---

# Important Table

| Method | Kaam | Original Array Change? |
|---|---|---|
| `push()` | End me add | Yes |
| `pop()` | End se remove | Yes |
| `unshift()` | Start me add | Yes |
| `shift()` | Start se remove | Yes |
| `includes()` | Value check | No |
| `indexOf()` | Index find | No |
| `join()` | Array → String | No |
| `reverse()` | Order reverse | Yes |
| `slice()` | Part copy | No |
| `splice()` | Elements remove/change | Yes |

---

# One-line Formula 🧠

```text
[index]      → element access
.length      → total elements

push()       → end me add
pop()        → end se remove
unshift()    → start me add
shift()      → start se remove

includes()   → value exists? true/false
indexOf()    → index ya -1
join()       → array ko string
reverse()    → array reverse + mutate

slice()      → copy, original same
splice()     → original array change
```

Sabse important:

```text
slice(start, end)
→ end index included nahi
→ original same
```

```text
splice(start, deleteCount)
→ elements remove
→ original change
```

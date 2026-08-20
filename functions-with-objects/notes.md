# JavaScript Functions with Rest, Objects & Arrays — Short Notes

Is file me hum functions ke saath **Rest Parameters**, **Objects**, aur **Arrays** ka use samajhte hain.

Important topics:

```text
Rest Parameters (...)
Multiple Arguments
Total Cart Price
Object Pass into Function
Direct Object Pass
Array Pass into Function
Direct Array Pass
First & Last Array Value
```

---

# 1. Rest Parameters `...`

Tumhara code:

```js
const calculateCartPrice = function (...prices) {
  return prices;
};
```

Yahan:

```js
...prices
```

ko **Rest Parameter** kehte hain.

Rest parameter multiple arguments ko ek array me collect karta hai.

Example:

```js
calculateCartPrice(200, 400, 600, 800);
```

Result:

```js
[200, 400, 600, 800]
```

---

# 2. Rest Parameter ko Simple Samjho

Function call:

```js
calculateCartPrice(200, 400, 600, 800);
```

Function parameter:

```js
(...prices)
```

Flow:

```text
200
400
600
800
↓
...prices
↓
[200, 400, 600, 800]
```

### Memory Trick

```text
...rest
→ multiple arguments ko array me collect karta hai
```

---

# 3. Rest Parameter ka Result Array Hota Hai

Tumhara code:

```js
const calculateCartPrice = function (...prices) {
  return prices;
};
```

Return:

```text
[200, 400, 600, 800]
```

Yani `prices`:

```text
array
```

ban gaya.

---

# 4. Total Cart Price with Rest Parameter

Tumhara code:

```js
const getTotalPrice = function (...prices) {
  let total = 0;

  for (const price of prices) {
    total += price;
  }

  return total;
};
```

Call:

```js
getTotalPrice(200, 400, 600, 800);
```

Output:

```text
2000
```

---

# 5. Total Price ka Flow

Rest parameter:

```js
...prices
```

arguments ko array banata hai:

```js
[200, 400, 600, 800]
```

Starting total:

```js
let total = 0;
```

Loop:

```js
for (const price of prices) {
  total += price;
}
```

Calculation:

```text
0 + 200   = 200
200 + 400 = 600
600 + 600 = 1200
1200 + 800 = 2000
```

Final:

```js
return total;
```

Result:

```text
2000
```

---

# 6. `for...of` Loop

Tumhare function me:

```js
for (const price of prices) {
  total += price;
}
```

`for...of` array ki har value ko one-by-one access karta hai.

Example:

```js
const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}
```

Output:

```text
10
20
30
```

---

# 7. Object Pass into Function

Tumhara object:

```js
const user = {
  username: "Mubashir",
  price: 999
};
```

Function:

```js
const handleObject = function (userData) {
  return `Username is ${userData.username} and price is ${userData.price}`;
};
```

Call:

```js
handleObject(user);
```

Output:

```text
Username is Mubashir and price is 999
```

---

# 8. Object Function me Kaise Jata Hai

Function call:

```js
handleObject(user);
```

`user` object:

```js
{
  username: "Mubashir",
  price: 999
}
```

parameter:

```js
userData
```

ke andar receive hota hai.

So:

```js
userData.username;
```

means:

```text
Mubashir
```

Aur:

```js
userData.price;
```

means:

```text
999
```

---

# 9. Object Property Function ke Andar Access

Tumhara code:

```js
userData.username
```

Aur:

```js
userData.price
```

Object properties ko dot notation se access kiya gaya hai.

### Memory Trick

```text
function(object)
→ parameter.key
```

---

# 10. Direct Object Pass into Function

Tumhara code:

```js
handleObject({
  username: "Ali",
  price: 399
});
```

Yahan object pehle variable me store nahi kiya gaya.

Direct function call me object pass hua hai.

Output:

```text
Username is Ali and price is 399
```

---

# 11. Object Variable vs Direct Object

### Object Variable

```js
const user = {
  username: "Mubashir",
  price: 999
};

handleObject(user);
```

### Direct Object

```js
handleObject({
  username: "Ali",
  price: 399
});
```

Dono valid hain.

---

# 12. Array Pass into Function

Tumhara array:

```js
const myNewArr = [200, 400, 600, 800];
```

Function:

```js
const getSecondValue = function (arr) {
  return arr[1];
};
```

Call:

```js
getSecondValue(myNewArr);
```

Output:

```text
400
```

---

# 13. `arr[1]` Kyun 400 Hai?

Array:

```js
[200, 400, 600, 800]
```

Indexes:

```text
0 → 200
1 → 400
2 → 600
3 → 800
```

Isliye:

```js
arr[1];
```

Output:

```text
400
```

### Memory Trick

```text
Array index 0 se start hoti hai
```

---

# 14. Direct Array Pass into Function

Tumhara code:

```js
getSecondValue([100, 500, 900]);
```

Function:

```js
const getSecondValue = function (arr) {
  return arr[1];
};
```

Array indexes:

```text
0 → 100
1 → 500
2 → 900
```

Output:

```text
500
```

---

# 15. Array Variable vs Direct Array

### Array Variable

```js
const arr = [100, 200, 300];

getSecondValue(arr);
```

### Direct Array

```js
getSecondValue([100, 200, 300]);
```

Dono valid hain.

---

# 16. First and Last Value from Array

Tumhara code:

```js
const getArrayValues = function (arr) {
  return {
    firstValue: arr[0],
    lastValue: arr[arr.length - 1]
  };
};
```

Call:

```js
getArrayValues([10, 20, 30, 40]);
```

Output:

```js
{
  firstValue: 10,
  lastValue: 40
}
```

---

# 17. First Value

Array:

```js
[10, 20, 30, 40]
```

First index:

```text
0
```

So:

```js
arr[0];
```

Result:

```text
10
```

---

# 18. Last Value

Tumhara code:

```js
arr[arr.length - 1]
```

Array:

```js
[10, 20, 30, 40]
```

Length:

```text
4
```

Calculation:

```text
arr.length - 1
4 - 1
= 3
```

So:

```js
arr[3];
```

Result:

```text
40
```

---

# 19. `arr.length - 1` Memory Trick

Array ka last element lene ka common formula:

```js
arr[arr.length - 1]
```

Kyunki:

```text
array indexes 0 se start hote hain
```

Example:

```js
const arr = ["a", "b", "c"];

arr.length;
// 3
```

Last index:

```text
3 - 1 = 2
```

So:

```js
arr[2];
// "c"
```

---

# 20. Function Object Return Kar Raha Hai

Tumhara function:

```js
const getArrayValues = function (arr) {
  return {
    firstValue: arr[0],
    lastValue: arr[arr.length - 1]
  };
};
```

Ye sirf number return nahi kar raha.

Ye ek:

```text
Object
```

return kar raha hai.

Returned object:

```js
{
  firstValue: 10,
  lastValue: 40
}
```

---

# Quick Revision

## Rest Parameter

```js
const fn = function (...values) {
  return values;
};
```

```js
fn(1, 2, 3);
```

Result:

```js
[1, 2, 3]
```

---

## Total with Rest

```js
const total = function (...numbers) {
  let result = 0;

  for (const num of numbers) {
    result += num;
  }

  return result;
};
```

---

## Object into Function

```js
const user = {
  username: "Mubashir",
  price: 999
};

handleObject(user);
```

---

## Direct Object

```js
handleObject({
  username: "Ali",
  price: 399
});
```

---

## Array into Function

```js
const arr = [200, 400, 600];

getSecondValue(arr);
```

---

## Direct Array

```js
getSecondValue([100, 500, 900]);
```

---

## First Value

```js
arr[0];
```

---

## Last Value

```js
arr[arr.length - 1];
```

---

# Important Table

| Concept | Syntax | Meaning |
|---|---|---|
| Rest Parameter | `...prices` | Multiple arguments → array |
| Total Loop | `for...of` | Har value par loop |
| Object Argument | `fn(user)` | Object function me pass |
| Direct Object | `fn({...})` | Object directly pass |
| Array Argument | `fn(arr)` | Array function me pass |
| Direct Array | `fn([...])` | Array directly pass |
| First Item | `arr[0]` | First value |
| Last Item | `arr[arr.length - 1]` | Last value |
| Return Object | `return { ... }` | Function object return kare |

---

# One-line Formula 🧠

```text
...prices
→ multiple arguments ko array me collect

for (const price of prices)
→ har price par loop

handleObject(user)
→ object function me pass

handleObject({ ... })
→ direct object pass

getSecondValue(arr)
→ array function me pass

arr[1]
→ second value

arr[0]
→ first value

arr[arr.length - 1]
→ last value
```

Sabse important:

```text
Rest Parameter (...)
→ multiple arguments → one array
```

```text
Object aur Array
→ dono function arguments ke tor par pass ho sakte hain
```

```text
arr.length - 1
→ last index
```

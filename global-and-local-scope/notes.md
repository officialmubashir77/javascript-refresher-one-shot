# JavaScript Global & Local Scope — Short Notes

JavaScript me **scope** ka matlab hota hai:

```text
Variable ko code ke kis area se access kiya ja sakta hai.
```

Is file me hum do important concepts dekh rahe hain:

```text
Global Scope
Block / Local Scope
```

---

# 1. Global Scope

Tumhara code:

```js
let a = 10;
const b = 20;
var c = 30;
```

Ye variables block ke bahar declare kiye gaye hain.

Isliye ye global scope me hain.

```text
a → 10
b → 20
c → 30
```

---

# 2. Global Variable ka Simple Meaning

Agar variable outer scope me declare ho:

```js
let a = 10;
```

to wo neeche ke code me accessible ho sakta hai.

Example:

```js
console.log(a);
```

Output:

```text
10
```

### Memory Trick

```text
Global Scope
→ block ke bahar declared variable
```

---

# 3. Block / Local Scope

Tumhara code:

```js
{
  let a = 40;
  const b = 50;
  var c = 60;

  console.log("Inside block a:", a);
  console.log("Inside block b:", b);
  console.log("Inside block c:", c);
}
```

Curly braces:

```js
{
}
```

ek block create kar rahi hain.

---

# 4. `let` Inside Block

Block ke andar:

```js
let a = 40;
```

Ye outer `a` se separate variable hai.

Outer:

```js
let a = 10;
```

Inner:

```js
let a = 40;
```

Inside block:

```js
console.log(a);
```

Output:

```text
40
```

---

# 5. `const` Inside Block

Block ke andar:

```js
const b = 50;
```

Outer variable:

```js
const b = 20;
```

Inner variable:

```js
const b = 50;
```

Inside block:

```js
console.log(b);
```

Output:

```text
50
```

---

# 6. `var` Inside Block

Block ke andar:

```js
var c = 60;
```

Outer code me pehle:

```js
var c = 30;
```

tha.

Tumhare example me block ke andar:

```js
var c = 60;
```

karne ke baad outside bhi `c` ki value:

```text
60
```

ho jati hai.

---

# 7. Inside Block Output

Tumhara code:

```js
console.log("Inside block a:", a);
console.log("Inside block b:", b);
console.log("Inside block c:", c);
```

Output:

```text
Inside block a: 40
Inside block b: 50
Inside block c: 60
```

---

# 8. Outside the Block

Tumhara code:

```js
console.log("Outside block a:", a);
console.log("Outside block b:", b);
console.log("Outside block c:", c);
```

Output:

```text
Outside block a: 10
Outside block b: 20
Outside block c: 60
```

---

# 9. `let` ka Behavior

Outer:

```js
let a = 10;
```

Inner:

```js
{
  let a = 40;
}
```

Inside:

```text
a → 40
```

Outside:

```text
a → 10
```

Meaning:

```text
let block scoped hai
```

---

# 10. `const` ka Behavior

Outer:

```js
const b = 20;
```

Inner:

```js
{
  const b = 50;
}
```

Inside:

```text
b → 50
```

Outside:

```text
b → 20
```

Meaning:

```text
const block scoped hai
```

---

# 11. `var` ka Behavior

Outer:

```js
var c = 30;
```

Inside:

```js
{
  var c = 60;
}
```

Outside:

```text
c → 60
```

Tumhare example se clear hai ke `var` block ke andar separate block-scoped variable create nahi kar raha.

### Memory Trick

```text
let   → block scoped
const → block scoped
var   → block scope ko follow nahi karta
```

---

# 12. Same Variable Name in Different Scope

Tumhare code me:

```js
let a = 10;
```

Aur block ke andar:

```js
let a = 40;
```

Dono alag scopes me hain.

Isliye dono values independently exist karti hain.

```text
Outside a → 10
Inside a  → 40
```

Same concept `const b` ke saath:

```text
Outside b → 20
Inside b  → 50
```

---

# 13. Scope ko Visual Form me Samjho

```text
Global Scope
│
├── a = 10
├── b = 20
└── c = 30
```

Inside block:

```text
{
  a = 40
  b = 50
  c = 60
}
```

Block ke andar:

```text
a → 40
b → 50
c → 60
```

Block ke bahar:

```text
a → 10
b → 20
c → 60
```

---

# 14. `let` and `const` vs `var`

Tumhare current example ka sabse important point:

```text
let aur const
→ block ke andar separate scope banate hain
```

Lekin:

```text
var
→ block ke bahar bhi updated value show kar raha hai
```

---

# Quick Revision

## Global Scope

```js
let a = 10;
const b = 20;
var c = 30;
```

---

## Block Scope

```js
{
  let a = 40;
  const b = 50;
  var c = 60;
}
```

---

## Inside Block

```text
a → 40
b → 50
c → 60
```

---

## Outside Block

```text
a → 10
b → 20
c → 60
```

---

# Important Table

| Variable | Global Value | Block Value | Outside After Block |
|---|---:|---:|---:|
| `let a` | 10 | 40 | 10 |
| `const b` | 20 | 50 | 20 |
| `var c` | 30 | 60 | 60 |

---

# One-line Formula 🧠

```text
Global Scope
→ block ke bahar declared variables
```

```text
Block Scope
→ { } ke andar ka scope
```

```text
let
→ block scoped
```

```text
const
→ block scoped
```

```text
var
→ block scope ko follow nahi karta
```

Sabse important:

```text
Inside block:
a = 40
b = 50
c = 60
```

```text
Outside block:
a = 10
b = 20
c = 60
```

Yani:

```text
let / const → inner value bahar affect nahi karti
var         → block ke baad bhi changed value nazar aa sakti hai
```

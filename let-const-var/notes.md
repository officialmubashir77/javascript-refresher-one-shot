Bilkul. Tumhare code ko base bana kar **`let`, `const`, aur `var` ke easy Hindi/Hinglish notes** bana deta hoon, taaki concept clear ho jaye.

# JavaScript Notes — `let`, `const`, `var`

JavaScript me variables banane/declaration ke liye mainly 3 keywords use hote hain:

```js
var
let
const
```

In teeno ka kaam data store karna hai, lekin **scope, re-declaration aur re-assignment** ke rules alag hain.

---

## 1. `const` — value ko reassign nahi kar sakte

```js
const accountID = 144553;
```

Yahan:

* `accountID` variable bana.
* Uski value `144553` hai.
* `const` se banaya gaya variable **dobara assign nahi ho sakta**.

Example:

```js
const accountID = 144553;

accountID = 786123; // ❌ Error
```

Error roughly:

```text
TypeError: Assignment to constant variable
```

### Important

`const` ka matlab ye nahi hai ki value hamesha completely immutable hoti hai.

Example:

```js
const user = {
    name: "Mubashir"
};

user.name = "Ali"; // ✅ Allowed
```

Lekin:

```js
user = {
    name: "Ahmed"
}; // ❌ Not allowed
```

Matlab `const` me **variable ko nayi value/reference assign nahi kar sakte**, lekin object/array ke andar ka data change ho sakta hai.

---

# 2. `let` — value change kar sakte hain

```js
let accountEmail = "mubashir@example.com";
```

Baad me:

```js
accountEmail = "mubashir@gmail.com";
```

✅ Bilkul allowed.

Example:

```js
let age = 20;

age = 21;
age = 22;

console.log(age);
```

Output:

```text
22
```

### Lekin same scope me dobara `let` declare nahi kar sakte

```js
let age = 20;
let age = 25; // ❌ Error
```

Lekin assignment kar sakte ho:

```js
let age = 20;

age = 25; // ✅
```

Is difference ko yaad rakho:

```js
let age = 20; // declaration

age = 25;     // re-assignment
```

---

# 3. `var` — old JavaScript way

Tumhare code me:

```js
var accountPassword = "123456";
```

`var` purane JavaScript code me bohot use hota tha.

Modern JavaScript me generally:

> **`var` avoid karo. `const` aur `let` prefer karo.**

`var` ke kuch confusing behaviours hain.

---

# Sabse important comparison

| Feature                   | `var`        | `let` | `const`        |
| ------------------------- | ------------ | ----- | -------------- |
| Reassign kar sakte hain?  | ✅ Yes        | ✅ Yes | ❌ No           |
| Redeclare kar sakte hain? | ✅ Yes        | ❌ No  | ❌ No           |
| Block scoped?             | ❌ No         | ✅ Yes | ✅ Yes          |
| Function scoped?          | ✅ Yes        | ✅     | ✅              |
| Hoisted?                  | ✅ Yes        | ✅ Yes | ✅ Yes          |
| TDZ hota hai?             | ❌ No         | ✅ Yes | ✅ Yes          |
| Modern JS me recommended? | ❌ Usually no | ✅ Yes | ✅ Best default |

---

# 4. Scope kya hota hai?

**Scope ka simple matlab:**

> Variable ko program ke kis area me access kar sakte ho.

Example:

```js
{
    let name = "Mubashir";
}
```

Ab block ke bahar:

```js
console.log(name);
```

❌ Error.

Kyunki `let` **block scoped** hai.

Block generally `{ }` se banta hai.

```js
{
    // ek block
}
```

---

# 5. `let` is block scoped

```js
{
    let myName = "Mubashir";
    
    console.log(myName); // ✅
}

console.log(myName); // ❌
```

Block ke andar variable accessible hai.

Block ke bahar nahi.

---

# 6. `const` bhi block scoped hai

Tumhara example:

```js
{
    const myNewName = "Mubashir Constant";
}

console.log(myNewName);
```

Ye error dega:

```text
ReferenceError: myNewName is not defined
```

Kyunki:

```js
const
```

sirf `{ }` block ke andar available hai.

Correct:

```js
{
    const myNewName = "Mubashir Constant";

    console.log(myNewName); // ✅
}
```

---

# 7. `var` block scoped nahi hota

Tumhara example:

```js
{
    var myName = "Mubashir";
}

console.log(myName);
```

Output:

```text
Mubashir
```

Ye beginners ko sabse zyada confuse karta hai.

`var` `{}` block ko respect nahi karta.

Example:

```js
if (true) {
    var city = "Karachi";
}

console.log(city);
```

Output:

```text
Karachi
```

Lekin `let`:

```js
if (true) {
    let city = "Karachi";
}

console.log(city);
```

❌ Error:

```text
ReferenceError: city is not defined
```

---

# 8. Important correction: `var` hamesha global nahi hota

Tumhare comment me likha tha:

```js
// var is a global variable
```

Ye **completely correct nahi hai**.

Better statement:

> `var` **function-scoped** hota hai, block-scoped nahi.

Example:

```js
function test() {
    var username = "Mubashir";
}

console.log(username);
```

❌ Error.

Kyunki `username` sirf function ke andar hai.

```js
function test() {
    var username = "Mubashir";

    console.log(username); // ✅
}
```

Isliye yaad rakho:

```text
var   → function scoped
let   → block scoped
const → block scoped
```

Ye bahut important interview concept hai.

---

# 9. `var` ko redeclare kar sakte hain

Example:

```js
var city = "Karachi";

var city = "Lahore";

console.log(city);
```

Output:

```text
Lahore
```

Ye allowed hai.

Lekin `let`:

```js
let city = "Karachi";

let city = "Lahore";
```

❌ Error.

`const`:

```js
const city = "Karachi";

const city = "Lahore";
```

❌ Error.

---

# 10. Re-declaration vs Re-assignment

Ye concept strong kar lo.

### Re-declaration

Dobara keyword ke saath variable banana:

```js
let age = 20;

let age = 25;
```

Ye **re-declaration** hai.

❌ `let` me allowed nahi.

### Re-assignment

Existing variable ki value change karna:

```js
let age = 20;

age = 25;
```

Ye **re-assignment** hai.

✅ `let` me allowed hai.

---

# 11. `const` ko value dena compulsory hai

Ye allowed hai:

```js
const age = 25;
```

Ye allowed nahi:

```js
const age;
```

❌ Error.

Kyunki `const` declare karte waqt value deni padti hai.

Lekin `let`:

```js
let age;
```

✅ Allowed.

Ab:

```js
console.log(age);
```

Output:

```text
undefined
```

---

# 12. `undefined` ka concept

Tumhare code me:

```js
let accountState;
```

Variable declare ho gaya, lekin value assign nahi hui.

Isliye:

```js
console.log(accountState);
```

Output:

```text
undefined
```

Simple meaning:

> Variable exist karta hai, lekin abhi usme koi value assign nahi hui.

Example:

```js
let username;

console.log(username);
```

Output:

```text
undefined
```

Baad me:

```js
username = "Mubashir";

console.log(username);
```

Output:

```text
Mubashir
```

---

# 13. Variable bina declare kiye use karna

Tumhare code me:

```js
accountCity = "Karachi";
```

Tumne pehle ye nahi likha:

```js
let accountCity;
```

ya:

```js
const accountCity = "Karachi";
```

Isliye modern JavaScript me aisa code **avoid karna chahiye**.

Best:

```js
const accountCity = "Karachi";
```

Ya agar city change hogi:

```js
let accountCity = "Karachi";

accountCity = "Lahore";
```

Ek important nuance: kuch non-strict JavaScript environments me undeclared assignment accidental global variable bana sakta hai, jabki **strict mode me `ReferenceError`** aata hai. Isliye practical rule hai:

> Variable ko hamesha `let`, `const` ya legacy code me `var` se explicitly declare karo.

---

# 14. `var` ka block scope problem

Example:

```js
if (true) {
    var score = 100;
}

console.log(score);
```

Output:

```text
100
```

Lekin:

```js
if (true) {
    let score = 100;
}

console.log(score);
```

❌ Error.

Isiliye modern JavaScript me `let` safer hai.

---

# 15. Loop me bhi difference important hai

`var`:

```js
for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);
```

Output:

```text
0
1
2
3
```

`i` loop ke bahar bhi available hai.

Lekin:

```js
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);
```

Last line:

```text
ReferenceError
```

Kyunki `let i` sirf loop/block tak limited hai.

---

# 16. Hoisting — `var` ka ek aur confusing behaviour

JavaScript internally declarations ko scope ke top par process karta hai. Is behaviour ko **hoisting** kehte hain.

Example:

```js
console.log(age);

var age = 25;
```

Output:

```text
undefined
```

Roughly aisa behave karta hai:

```js
var age;

console.log(age);

age = 25;
```

Isliye error ki jagah `undefined` milta hai.

---

# 17. `let` aur `const` bhi hoist hote hain, lekin...

Example:

```js
console.log(age);

let age = 25;
```

❌ Error:

```text
ReferenceError
```

Isi tarah:

```js
console.log(age);

const age = 25;
```

❌ Error.

Ye **Temporal Dead Zone (TDZ)** ki wajah se hota hai.

Beginner level par itna yaad rakho:

```text
var   → declaration se pehle access → undefined
let   → declaration se pehle access → Error
const → declaration se pehle access → Error
```

---

# 18. Temporal Dead Zone — TDZ

Example:

```js
console.log(name); // ❌ TDZ

let name = "Mubashir";
```

Variable scope me technically exist karta hai, lekin declaration line tak usko access nahi kar sakte.

Ye area:

```js
// TDZ starts

console.log(name);

let name = "Mubashir";

// TDZ ends
```

Interview me **TDZ** term commonly poochi ja sakti hai.

---

# 19. `const` object ke saath

Ye important hai:

```js
const account = {
    name: "Mubashir",
    city: "Karachi"
};
```

Tum ye kar sakte ho:

```js
account.city = "Lahore";
```

✅ Allowed.

Aur:

```js
account.email = "mubashir@example.com";
```

✅ Allowed.

Lekin:

```js
account = {
    name: "Ali"
};
```

❌ Not allowed.

Kyunki tum poore variable ko naya object assign kar rahe ho.

---

# 20. `const` array ke saath

```js
const fruits = ["Apple", "Mango"];
```

Ye allowed hai:

```js
fruits.push("Banana");
```

Result:

```js
["Apple", "Mango", "Banana"]
```

Lekin:

```js
fruits = ["Orange", "Grapes"];
```

❌ Error.

Again:

> `const` variable ki reference change nahi kar sakte, lekin object/array ke contents change ho sakte hain.

---

# Tumhare code ka improved version

```js
const accountID = 144553;

let accountEmail = "mubashir@example.com";

let accountPassword = "123456";

const accountCity = "Karachi";

let accountState;

console.log(accountID);

{
    var myName = "Mubashir";
}

console.log(myName);

{
    const myNewName = "Mubashir Constant";

    console.log(myNewName);
}

console.table([
    accountID,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);
```

---

# Kab kya use karna hai?

Sabse simple modern JavaScript rule:

### Default → `const`

Agar value reassign nahi karni:

```js
const name = "Mubashir";
const city = "Karachi";
const accountID = 123;
```

### Value badalni ho → `let`

```js
let score = 0;

score = 10;
score = 20;
```

### `var` → generally avoid

```js
var name = "Mubashir";
```

Purane codebases me milega, isliye samajhna zaroori hai, lekin naye code me normally use mat karo.

---

# Ek line me yaad karne ka formula

```text
const → value/reference reassign nahi karni
let   → value reassign karni hai
var   → old style, generally avoid
```

Aur scope ke liye:

```text
var   → Function Scope
let   → Block Scope
const → Block Scope
```

Aur redeclaration:

```text
var   → ✅ Redeclare
let   → ❌ Redeclare
const → ❌ Redeclare
```

Aur reassignment:

```text
var   → ✅ Reassign
let   → ✅ Reassign
const → ❌ Reassign
```

## Short memory trick 🧠

**LET = Let it change**

```js
let score = 10;
score = 20; // ✅
```

**CONST = Constant reference**

```js
const id = 123;
id = 456; // ❌
```

**VAR = Very old approach 😄**

```js
var oldStyle = true;
```

### Final recommended habit

Modern JavaScript likhte waqt:

```js
// First preference
const

// Agar reassign karna ho
let

// Avoid unless specifically needed
var
```

Agar tum ye rule follow karoge to beginner level par `let`, `const`, aur `var` ki 90% confusion khatam ho jayegi.

# JavaScript Strings — Short Notes

JavaScript me **String** text ko represent karti hai.

Examples:

```js
let name = "Mubashir";
let city = "Karachi";
let message = "Hello World";
```

String normally quotes ke andar likhi jati hai:

```text
"double quotes"
'single quotes'
`backticks`
```

---

# 1. String Concatenation

Concatenation ka matlab:

> Do ya zyada strings ko `+` operator se join karna.

Tumhara code:

```js
let name1 = "Mubashir";
let age1 = 24;

console.log(
    "My name is " + name1 +
    " and I am " + age1 +
    " years old and this console.log is called String Concatenation"
);
```

Yahan `+` strings ko join kar raha hai.

Conceptually:

```text
"My name is "
+
"Mubashir"
+
" and I am "
+
24
```

Output:

```text
My name is Mubashir and I am 24 years old and this console.log is called String Concatenation
```

---

## 2. String + Number

Tumhare example me:

```js
"and I am " + age1
```

`age1` ek number hai:

```js
24
```

Lekin string ke saath `+` use hone ki wajah se JavaScript usko string ke saath concatenate karta hai.

```text
"and I am " + 24
↓
"and I am 24"
```

---

# 3. String Interpolation

Modern JavaScript me strings ke andar variables insert karne ke liye **template literals** use kiye jate hain.

Tumhara code:

```js
let name = "Mubashir Ibrahim";
let age = 24;

console.log(
    `My name is ${name} and I am ${age} years old and this console.log is called String Interpolation`
);
```

Output:

```text
My name is Mubashir Ibrahim and I am 24 years old and this console.log is called String Interpolation
```

---

## 4. Template Literals

Template literals me:

```text
backticks ` `
```

use hote hain.

Variables insert karne ke liye:

```js
${variableName}
```

use hota hai.

Example:

```js
let user = "Mubashir";
let score = 100;

console.log(`User ${user} scored ${score}`);
```

Output:

```text
User Mubashir scored 100
```

---

## 5. Concatenation vs Interpolation

Old / traditional style:

```js
console.log("My name is " + name + " and I am " + age);
```

Modern readable style:

```js
console.log(`My name is ${name} and I am ${age}`);
```

Usually template literals zyada readable hoti hain.

### Memory Trick

```text
+ operator  → concatenation
${}         → interpolation
```

---

# 6. String Length

String ki total length check karne ke liye:

```js
.length
```

use hota hai.

Example:

```js
let name = "Mubashir";

console.log(name.length);
```

Output:

```text
8
```

Tumhare code me:

```js
// console.log(name.length);
```

Ye `name` string ki total character count return karega.

---

# 7. String Object

Tumhara code:

```js
const gamgeName = new String("Mubashir String Object");
```

Yahan:

```js
new String()
```

ke through String object create kiya gaya hai.

Normally strings likhne ka common tareeqa:

```js
let name = "Mubashir";
```

Lekin String object ka example:

```js
const gamgeName = new String("Mubashir String Object");
```

---

## 8. String Characters ko Index se Access Karna

Tumhara code:

```js
console.log(gamgeName[0]);
```

Output:

```text
M
```

String indexing:

```text
M u b a s h i r
0 1 2 3 4 5 6 7
```

Isliye:

```js
gamgeName[0]; // "M"
gamgeName[1]; // "u"
gamgeName[2]; // "b"
```

Important:

JavaScript indexing:

```text
0 se start hoti hai
```

---

# 9. `.length`

Tumhara code:

```js
console.log(gamgeName.length);
```

`.length` string ke total characters return karta hai.

Example:

```js
"Mubashir".length;
```

Output:

```text
8
```

Note:

Spaces bhi string length me count hote hain.

---

# 10. `.toUpperCase()`

Tumhara code:

```js
console.log(gamgeName.toUpperCase());
```

Output:

```text
MUBASHIR STRING OBJECT
```

`.toUpperCase()` string ke letters ko uppercase me convert karta hai.

Example:

```js
let city = "karachi";

console.log(city.toUpperCase());
```

Output:

```text
KARACHI
```

Important:

Original string normally mutate nahi hoti.

Example:

```js
let city = "karachi";

console.log(city.toUpperCase()); // KARACHI
console.log(city);               // karachi
```

---

# 11. `.charAt()`

Tumhara code:

```js
console.log(gamgeName.charAt(0));
```

Output:

```text
M
```

`.charAt(index)` specified index ka character return karta hai.

Example:

```js
let name = "Mubashir";

name.charAt(0); // M
name.charAt(1); // u
name.charAt(2); // b
```

---

## 12. `[index]` vs `.charAt()`

Dono se character access kiya ja sakta hai:

```js
gamgeName[0];
```

Aur:

```js
gamgeName.charAt(0);
```

Dono ka result:

```text
M
```

---

# 13. `.indexOf()`

Tumhara code:

```js
console.log(gamgeName.indexOf("M"));
```

Output:

```text
0
```

`.indexOf()` kisi character ya substring ka first index return karta hai.

Example:

```js
let name = "Mubashir";

name.indexOf("M"); // 0
name.indexOf("b"); // 2
```

Agar value string ke andar na mile:

```js
name.indexOf("z");
```

Output:

```text
-1
```

### Memory Trick

```text
found     → index number
not found → -1
```

---

# 14. `.substring()`

Tumhara code:

```js
let newstringOne = gamgeName.substring(0, 4);

console.log(newstringOne);
```

`substring(start, end)` string ka ek part return karta hai.

Example:

```js
"Mubashir".substring(0, 4);
```

Output:

```text
Muba
```

Important:

```text
start index included
end index excluded
```

So:

```text
0 → M
1 → u
2 → b
3 → a
4 → stop
```

Result:

```text
Muba
```

---

## 15. `substring()` me Negative Value

Tumhara comment:

```js
// substring m start value negaive nhi de skty
```

Simple understanding:

`substring()` negative indexes ko useful negative indexing ki tarah handle nahi karta.

Example:

```js
"Mubashir".substring(-3, 4);
```

Negative value effectively `0` ke tarah treat ho sakti hai.

Isliye negative indexing ke liye `slice()` zyada useful hota hai.

---

# 16. `.slice()`

Tumhara code:

```js
let newstringTwo = gamgeName.slice(0, 8);

console.log(newstringTwo);
```

`.slice(start, end)` bhi string ka ek part return karta hai.

Example:

```js
"Mubashir".slice(0, 8);
```

Output:

```text
Mubashir
```

Again:

```text
start included
end excluded
```

---

## 17. `slice()` Negative Index Support

`slice()` negative indexes support karta hai.

Example:

```js
let name = "Mubashir";

console.log(name.slice(-3));
```

Output:

```text
hir
```

Negative index string ke end se count karta hai.

### Memory Trick

```text
substring() → negative indexing useful nahi
slice()     → negative indexing support
```

---

# 18. `.trim()`

Tumhara code:

```js
let newstringThree = "     Mubashir Ibrahim     ";

console.log(newstringThree);
console.log(newstringThree.trim());
```

Original:

```text
"     Mubashir Ibrahim     "
```

After `.trim()`:

```text
"Mubashir Ibrahim"
```

`.trim()` string ke:

```text
starting spaces
+
ending spaces
```

remove karta hai.

---

## 19. Important `trim()` Point

`.trim()` middle ke spaces remove nahi karta.

Example:

```js
"   Mubashir Ibrahim   ".trim();
```

Result:

```text
"Mubashir Ibrahim"
```

`Mubashir` aur `Ibrahim` ke beech ka space same rehta hai.

---

# 20. `.replace()`

Tumhara code:

```js
const url = "https://mubashir.com/mubashir%20ibrahim";

console.log(url.replace("%20", "-"));
```

Output:

```text
https://mubashir.com/mubashir-ibrahim
```

`.replace()` string ke ek part ko doosri value se replace karta hai.

Syntax:

```js
string.replace(oldValue, newValue);
```

Example:

```js
"Hello World".replace("World", "Mubashir");
```

Output:

```text
Hello Mubashir
```

---

# 21. URL Example

Tumhare URL me:

```text
%20
```

space ko represent kar raha hai.

Tum replace kar rahe ho:

```js
"%20"
```

with:

```js
"-"
```

So:

```text
mubashir%20ibrahim
```

becomes:

```text
mubashir-ibrahim
```

---

# 22. `.includes()`

Tumhara code:

```js
console.log(url.includes("mubashir"));
```

Output:

```text
true
```

`.includes()` check karta hai ke specified text string ke andar present hai ya nahi.

Return:

```text
true
false
```

Example:

```js
let message = "Hello Mubashir";

message.includes("Mubashir"); // true
message.includes("Karachi");  // false
```

---

# 23. `.split()`

Tumhara code:

```js
console.log(gamgeName.split(" "));
```

`.split()` string ko parts me tod kar array bana deta hai.

Tum separator use kar rahe ho:

```text
" "
```

yaani space.

String:

```text
Mubashir String Object
```

Split hone ke baad:

```js
["Mubashir", "String", "Object"]
```

---

## 24. Split Examples

Comma ke basis par:

```js
let values = "HTML,CSS,JavaScript";

console.log(values.split(","));
```

Output:

```js
["HTML", "CSS", "JavaScript"]
```

Dash ke basis par:

```js
"2026-08-15".split("-");
```

Output:

```js
["2026", "08", "15"]
```

---

# 25. Important String Methods Summary

```js
.length
```

String ki length:

```js
"Mubashir".length; // 8
```

---

```js
.toUpperCase()
```

Uppercase:

```js
"Mubashir".toUpperCase();
// "MUBASHIR"
```

---

```js
.charAt()
```

Character by index:

```js
"Mubashir".charAt(0);
// "M"
```

---

```js
.indexOf()
```

Character / word ka index:

```js
"Mubashir".indexOf("b");
// 2
```

---

```js
.substring()
```

String ka part:

```js
"Mubashir".substring(0, 4);
// "Muba"
```

---

```js
.slice()
```

String ka part:

```js
"Mubashir".slice(0, 4);
// "Muba"
```

Negative index bhi:

```js
"Mubashir".slice(-3);
// "hir"
```

---

```js
.trim()
```

Starting / ending spaces remove:

```js
"   Mubashir   ".trim();
// "Mubashir"
```

---

```js
.replace()
```

Text replace:

```js
"hello-world".replace("-", " ");
// "hello world"
```

---

```js
.includes()
```

Text present hai ya nahi:

```js
"Mubashir Ibrahim".includes("Mubashir");
// true
```

---

```js
.split()
```

String → Array:

```js
"Mubashir Ibrahim".split(" ");
// ["Mubashir", "Ibrahim"]
```

---

# Quick Revision

## String Concatenation

```js
let name = "Mubashir";
let age = 24;

console.log("My name is " + name + " and I am " + age);
```

---

## String Interpolation

```js
console.log(`My name is ${name} and I am ${age}`);
```

---

## String Object

```js
const gameName = new String("Mubashir String Object");
```

---

## Length

```js
gameName.length;
```

---

## First Character

```js
gameName[0];
```

or:

```js
gameName.charAt(0);
```

---

## Uppercase

```js
gameName.toUpperCase();
```

---

## Find Index

```js
gameName.indexOf("M");
```

---

## Substring

```js
gameName.substring(0, 4);
```

---

## Slice

```js
gameName.slice(0, 8);
```

---

## Trim

```js
"   Mubashir   ".trim();
```

---

## Replace

```js
url.replace("%20", "-");
```

---

## Includes

```js
url.includes("mubashir");
```

---

## Split

```js
gameName.split(" ");
```

---

# One-line Formula 🧠

```text
+              → String Concatenation
`${}`           → String Interpolation
.length         → total characters
[index]         → character access
.charAt()       → character by index
.indexOf()      → position find
.toUpperCase()  → uppercase
.substring()    → string ka part
.slice()        → string ka part + negative indexes
.trim()         → start/end spaces remove
.replace()      → text replace
.includes()     → text exists? true/false
.split()        → string ko array me convert
```

Sabse important:

```text
"Hello " + name
→ Concatenation
```

```text
`Hello ${name}`
→ Interpolation
```

```text
substring(0, 4)
→ end index included nahi hota
```

```text
slice(-3)
→ end se characters le sakta hai
```

```text
split(" ")
→ space ke basis par array
```

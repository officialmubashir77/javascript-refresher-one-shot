# JavaScript Objects Part 3 — Short Notes

JavaScript Objects Part 3 me hum **Object Destructuring**, function parameters me destructuring, default values, JSON, API responses, nested destructuring aur optional chaining ko samajhte hain.

Important topics:

```text
Object Destructuring
Property Rename
Function Parameter Destructuring
Default Values
JSON
JSON.parse()
JSON.stringify()
API Response Access
Nested Destructuring
Optional Chaining
```

---

# 1. Object Destructuring

Destructuring ka matlab:

> Object se properties nikal kar directly variables banana.

Tumhara object:

```js
const course = {
  courseName: "JavaScript",
  price: 999,
  courseInstructor: "Mubashir",
  courseReview: 4.9
};
```

Normal access:

```js
course.courseName;
course.price;
```

Destructuring:

```js
const {
  courseName,
  price,
  courseInstructor,
  courseReview
} = course;
```

Ab directly variables use kar sakte ho:

```js
console.log(courseName);       // JavaScript
console.log(price);            // 999
console.log(courseInstructor); // Mubashir
console.log(courseReview);     // 4.9
```

---

# 2. Destructuring ka Fayda

Without destructuring:

```js
console.log(course.courseName);
console.log(course.price);
console.log(course.courseInstructor);
```

With destructuring:

```js
const {
  courseName,
  price,
  courseInstructor
} = course;

console.log(courseName);
console.log(price);
console.log(courseInstructor);
```

Code zyada clean aur readable ho jata hai.

### Memory Trick

```text
const { key } = object;
→ object se key ki value variable me nikal lo
```

---

# 3. Property Rename Karte Hue Destructure Karna

Tumhara code:

```js
const {
  courseName: name,
  price: coursePrice,
  courseInstructor: instructor,
  courseReview: review
} = course2;
```

Yahan property names same hain:

```text
courseName
price
courseInstructor
courseReview
```

Lekin new variable names hain:

```text
name
coursePrice
instructor
review
```

---

# 4. Rename Syntax

Syntax:

```js
const {
  originalProperty: newVariableName
} = object;
```

Example:

```js
const user = {
  fullName: "Mubashir Ibrahim"
};

const {
  fullName: name
} = user;

console.log(name);
```

Output:

```text
Mubashir Ibrahim
```

---

# 5. Important Rename Point

Agar likho:

```js
const {
  courseName: name
} = course2;
```

to variable:

```text
name
```

banega.

`courseName` naam ka variable is destructuring line se create nahi hota.

### Memory Trick

```text
property: variable
```

Example:

```text
courseName: name
→ courseName ki value ko name variable me rakho
```

---

# 6. Function Parameters me Destructuring

Tumhara code:

```js
const navbar = ({ company }) => {
  console.log(`Welcome to ${company}`);
};
```

Yahan function parameter:

```js
({ company })
```

ek object ko destructure kar raha hai.

Function ko object pass karna hoga:

```js
navbar({
  company: "Mubashir"
});
```

Output:

```text
Welcome to Mubashir
```

---

# 7. Function Parameter Destructuring ka Flow

Argument:

```js
{
  company: "Mubashir"
}
```

Function parameter:

```js
({ company })
```

Flow:

```text
object
↓
company property nikli
↓
company variable
↓
"Mubashir"
```

---

# 8. Incorrect Function Call

Tumhare notes me incorrect example:

```js
navbar(company = "Mubashir");
```

Ye is function ke expected shape ke mutabiq correct nahi hai.

Kyunki function:

```js
({ company })
```

object destructure kar raha hai.

Isliye argument bhi object hona chahiye:

```js
navbar({
  company: "Mubashir"
});
```

---

# 9. Multiple Properties Function me Destructure Karna

Tumhara function:

```js
const showUser = ({ name, age, email }) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
};
```

Object:

```js
const user = {
  name: "Mubashir",
  age: 21,
  email: "mubashir@example.com"
};
```

Call:

```js
showUser(user);
```

Output:

```text
Name: Mubashir
Age: 21
Email: mubashir@example.com
```

---

# 10. Function me Pura Object vs Destructuring

Without destructuring:

```js
const showUser = (user) => {
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
};
```

With destructuring:

```js
const showUser = ({ name, age, email }) => {
  console.log(name);
  console.log(age);
  console.log(email);
};
```

---

# 11. Default Value with Destructuring

Tumhara code:

```js
const student = {
  name: "Mubashir",
  age: 21
};
```

Destructuring:

```js
const {
  name: studentName,
  age: studentAge,
  country = "Pakistan"
} = student;
```

Output:

```js
console.log(studentName); // Mubashir
console.log(studentAge);  // 21
console.log(country);     // Pakistan
```

---

# 12. Default Value Kab Use Hoti Hai?

Object me:

```text
country
```

property nahi thi.

Isliye:

```js
country = "Pakistan"
```

default value use hui.

### Memory Trick

```text
property = defaultValue
```

Example:

```js
const { city = "Karachi" } = user;
```

Agar `city` missing ho:

```text
Karachi
```

use hoga.

---

# 13. JSON Kya Hai?

JSON ka full form:

```text
JavaScript Object Notation
```

APIs me data commonly JSON format me receive hota hai.

Important:

Tumhara ye code:

```js
const userObject = {
  name: "Mubashir",
  email: "mubashir@example.com",
  password: "123456",
  age: 21
};
```

technically:

```text
JavaScript Object
```

hai.

Ye actual JSON text nahi hai.

---

# 14. JavaScript Object vs JSON

JavaScript Object:

```js
const user = {
  name: "Mubashir",
  age: 21
};
```

Actual JSON text:

```json
{
  "name": "Mubashir",
  "age": 21
}
```

Important difference:

```text
JavaScript Object → JavaScript data structure
JSON              → text/data format
```

---

# 15. Actual JSON String

Tumhara code:

```js
const jsonData = `{
  "name": "Mubashir",
  "email": "mubashir@example.com",
  "age": 21
}`;
```

Check:

```js
console.log(typeof jsonData);
```

Output:

```text
string
```

Kyunki ye backticks ke andar JSON text hai.

---

# 16. `JSON.parse()`

Tumhara code:

```js
const convertedObject = JSON.parse(jsonData);
```

`JSON.parse()`:

```text
JSON String
↓
JavaScript Object
```

convert karta hai.

Example:

```js
console.log(convertedObject.name);
```

Output:

```text
Mubashir
```

Type:

```js
typeof convertedObject;
```

Output:

```text
object
```

---

# 17. `JSON.parse()` Memory Trick

```text
parse
→ JSON string ko JavaScript object banao
```

Formula:

```text
JSON String
→ JSON.parse()
→ JavaScript Object
```

---

# 18. `JSON.stringify()`

Tumhara code:

```js
const newUser = {
  name: "Mubashir",
  age: 21,
  isLoggedIn: true
};

const convertedJson = JSON.stringify(newUser);
```

Result:

```text
{"name":"Mubashir","age":21,"isLoggedIn":true}
```

Type:

```js
typeof convertedJson;
```

Output:

```text
string
```

---

# 19. `JSON.stringify()` Memory Trick

```text
stringify
→ JavaScript object ko JSON string banao
```

Formula:

```text
JavaScript Object
→ JSON.stringify()
→ JSON String
```

---

# 20. `JSON.parse()` vs `JSON.stringify()`

```text
JSON.parse()
→ String to Object
```

```text
JSON.stringify()
→ Object to String
```

Example:

```js
const obj = JSON.parse(jsonString);
```

Aur:

```js
const jsonString = JSON.stringify(obj);
```

---

# 21. Sample API Response

Tumhara sample API response:

```js
const userApiResponse = {
  results: [
    {
      gender: "female",

      name: {
        title: "Miss",
        first: "Jennie",
        last: "Nichols"
      },

      location: {
        city: "Billings",
        state: "Michigan",
        country: "United States"
      },

      email: "jennie.nichols@example.com",

      dob: {
        date: "1992-03-08T15:13:16.688Z",
        age: 30
      },

      nat: "US"
    }
  ],

  info: {
    seed: "56d27f4a53bd5441",
    results: 1,
    page: 1,
    version: "1.4"
  }
};
```

Is structure me:

```text
Object
├── results → Array
│   └── Object
│       ├── name → Object
│       ├── location → Object
│       ├── dob → Object
│       └── ...
│
└── info → Object
```

---

# 22. API Response ka `info.results`

Tumhara code:

```js
console.log(userApiResponse.info.results);
```

Output:

```text
1
```

Flow:

```text
userApiResponse
↓
info
↓
results
↓
1
```

---

# 23. `results` Array Access

Tumhare API response me:

```js
results: [...]
```

ek array hai.

First user:

```js
userApiResponse.results[0];
```

Kyunki array indexing:

```text
0 se start hoti hai
```

---

# 24. User ka First Name

Tumhara code:

```js
userApiResponse.results[0].name.first;
```

Output:

```text
Jennie
```

Flow:

```text
userApiResponse
↓
results
↓
[0]
↓
name
↓
first
↓
Jennie
```

---

# 25. User ka Last Name

```js
userApiResponse.results[0].name.last;
```

Output:

```text
Nichols
```

---

# 26. Email Access

```js
userApiResponse.results[0].email;
```

Output:

```text
jennie.nichols@example.com
```

---

# 27. Country Access

```js
userApiResponse.results[0].location.country;
```

Output:

```text
United States
```

---

# 28. City Access

```js
userApiResponse.results[0].location.city;
```

Output:

```text
Billings
```

---

# 29. API Data ko Destructure Karna

Tumhara code:

```js
const firstUser = userApiResponse.results[0];
```

Ab first user object alag variable me aa gaya.

Phir:

```js
const {
  email,
  gender,
  nat
} = firstUser;
```

Ab directly:

```js
console.log(email);
console.log(gender);
console.log(nat);
```

use kar sakte ho.

---

# 30. Nested Destructuring

Tumhara code:

```js
const {
  name: {
    first,
    last
  },
  location: {
    city,
    country: userCountry
  }
} = firstUser;
```

Ye nested objects ki properties directly destructure kar raha hai.

---

# 31. Nested Destructuring Flow

Original structure:

```text
firstUser
├── name
│   ├── first
│   └── last
│
└── location
    ├── city
    └── country
```

Destructuring:

```js
name: {
  first,
  last
}
```

gives:

```text
first → Jennie
last  → Nichols
```

Aur:

```js
location: {
  city,
  country: userCountry
}
```

gives:

```text
city        → Billings
userCountry → United States
```

---

# 32. Nested Property Rename

Tumhara code:

```js
country: userCountry
```

Meaning:

```text
country property ki value
↓
userCountry variable me store
```

Output:

```text
United States
```

---

# 33. Optional Chaining with API Data

Tumhara code:

```js
userApiResponse.results?.[0]?.name?.first;
```

Output:

```text
Jennie
```

Optional chaining:

```text
?.
```

nested API data safely access karne me useful hoti hai.

---

# 34. Optional Chaining with Array Index

Important syntax:

```js
results?.[0]
```

Array index ke saath optional chaining:

```text
?.[index]
```

use hoti hai.

Example:

```js
users?.[0]?.name;
```

---

# 35. Missing API Property

Tumhara code:

```js
userApiResponse.results?.[0]?.address?.city;
```

Output:

```text
undefined
```

Kyunki:

```text
address
```

property exist nahi karti.

Optional chaining ki wajah se error nahi aata.

### Memory Trick

```text
?. → missing data par safely undefined
```

---

# Quick Revision

## Basic Destructuring

```js
const user = {
  name: "Mubashir",
  age: 21
};

const { name, age } = user;
```

---

## Rename Property

```js
const {
  name: userName
} = user;
```

```text
userName → "Mubashir"
```

---

## Function Parameter Destructuring

```js
const greet = ({ name }) => {
  console.log(name);
};

greet({
  name: "Mubashir"
});
```

---

## Default Value

```js
const {
  country = "Pakistan"
} = user;
```

---

## JSON String → Object

```js
const obj = JSON.parse(jsonData);
```

---

## Object → JSON String

```js
const json = JSON.stringify(obj);
```

---

## API First User

```js
const firstUser = userApiResponse.results[0];
```

---

## Nested API Access

```js
userApiResponse.results[0].name.first;
```

---

## Nested Destructuring

```js
const {
  name: { first, last }
} = firstUser;
```

---

## Optional Chaining

```js
userApiResponse.results?.[0]?.name?.first;
```

Missing property:

```js
userApiResponse.results?.[0]?.address?.city;
```

Result:

```text
undefined
```

---

# Important Table

| Concept | Syntax | Meaning |
|---|---|---|
| Basic Destructuring | `const {name} = user` | Property → variable |
| Rename | `name: userName` | Property ko new variable name |
| Default Value | `country = "Pakistan"` | Missing ho to default |
| Function Destructuring | `({name}) => {}` | Object parameter se property |
| `JSON.parse()` | `JSON.parse(str)` | JSON string → object |
| `JSON.stringify()` | `JSON.stringify(obj)` | object → JSON string |
| Nested Access | `obj.a.b.c` | Deep property access |
| Array API Access | `results[0]` | First item |
| Nested Destructuring | `{name:{first}}` | Deep property directly variable |
| Optional Chaining | `obj?.a?.b` | Safe access |
| Optional Array Access | `arr?.[0]` | Safe index access |

---

# One-line Formula 🧠

```text
const { key } = obj
→ property destructure

const { key: newName } = obj
→ property rename

const { key = defaultValue } = obj
→ default value

({ key }) => {}
→ function parameter destructuring

JSON.parse()
→ JSON string to object

JSON.stringify()
→ object to JSON string

results[0]
→ first API result

obj.a.b.c
→ nested access

const { a: { b } } = obj
→ nested destructuring

obj?.a?.b
→ safe nested access

arr?.[0]
→ safe array index access
```

Sabse important:

```text
JSON.parse()
String → Object
```

```text
JSON.stringify()
Object → String
```

```text
const { courseInstructor: instructor } = course
→ rename while destructuring
```

```text
userApiResponse.results?.[0]?.name?.first
→ API data safely access
```

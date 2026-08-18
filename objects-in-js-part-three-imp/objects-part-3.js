console.log("===== OBJECTS IN JAVASCRIPT PART 3 =====");


// ==================================================
// 1. Object Destructuring
// ==================================================

// Destructuring ka matlab:
// Object se properties nikal kar directly variables banana.

const course = {
  courseName: "JavaScript",
  price: 999,
  courseInstructor: "Mubashir",
  courseReview: 4.9
};


// Normal way:
// console.log(course.courseName);
// console.log(course.price);


// Destructuring
const {
  courseName,
  price,
  courseInstructor,
  courseReview
} = course;

console.log(courseName);       // JavaScript
console.log(price);            // 999
console.log(courseInstructor); // Mubashir
console.log(courseReview);     // 4.9


// ==================================================
// 2. Property ko Rename karte hue Destructure karna
// ==================================================

const course2 = {
  courseName: "JavaScript",
  price: 999,
  courseInstructor: "Mubashir",
  courseReview: 4.9
};


// courseInstructor ki value nikal rahe hain,
// lekin variable ka naam "instructor" rakh rahe hain.

const {
  courseName: name,
  price: coursePrice,
  courseInstructor: instructor,
  courseReview: review
} = course2;

console.log(name);        // JavaScript
console.log(coursePrice); // 999
console.log(instructor);  // Mubashir
console.log(review);      // 4.9


// ==================================================
// 3. Destructuring in Function Parameters
// ==================================================

// React mein ye pattern bohat common hai.
//
// Pura object receive karne ke bajaye
// directly required property destructure kar sakte hain.

const navbar = ({ company }) => {
  console.log(`Welcome to ${company}`);
};


// Function ko OBJECT pass karna hai:
navbar({
  company: "Mubashir"
});

// Output:
// Welcome to Mubashir


// --------------------------------------------------
// Ye incorrect tha:
//
// navbar(company = "Mubashir");
//
// Kyun?
// Function parameter object destructure kar raha hai,
// isliye argument bhi object hona chahiye.
// --------------------------------------------------


// ==================================================
// 4. Multiple Properties Function mein Destructure karna
// ==================================================

const showUser = ({ name, age, email }) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
};

const user = {
  name: "Mubashir",
  age: 21,
  email: "mubashir@example.com"
};

showUser(user);


// Output:
// Name: Mubashir
// Age: 21
// Email: mubashir@example.com


// ==================================================
// 5. Default Value with Destructuring
// ==================================================

const student = {
  name: "Mubashir",
  age: 21
};

const {
  name: studentName,
  age: studentAge,
  country = "Pakistan"
} = student;

console.log(studentName); // Mubashir
console.log(studentAge);  // 21
console.log(country);     // Pakistan


// country object mein nahi tha,
// isliye default value "Pakistan" use hui.


// ==================================================
// 6. JSON
// ==================================================

// JSON = JavaScript Object Notation
//
// APIs mein data commonly JSON format mein receive hota hai.
//
// Important:
// Neeche wala technically JavaScript Object hai,
// kyun ke humne usse const variable mein assign kiya hai.

const userObject = {
  name: "Mubashir",
  email: "mubashir@example.com",
  password: "123456",
  age: 21
};

console.log(userObject);


// ==================================================
// 7. Actual JSON String
// ==================================================

// Actual JSON text kuch aisa hota hai:

const jsonData = `{
  "name": "Mubashir",
  "email": "mubashir@example.com",
  "age": 21
}`;

console.log(jsonData);
console.log(typeof jsonData);

// Output:
// string


// ==================================================
// 8. JSON.parse()
// JSON String -> JavaScript Object
// ==================================================

const convertedObject = JSON.parse(jsonData);

console.log(convertedObject);
console.log(convertedObject.name);
console.log(typeof convertedObject);

// Output:
// { name: "Mubashir", ... }
// Mubashir
// object


// ==================================================
// 9. JSON.stringify()
// JavaScript Object -> JSON String
// ==================================================

const newUser = {
  name: "Mubashir",
  age: 21,
  isLoggedIn: true
};

const convertedJson = JSON.stringify(newUser);

console.log(convertedJson);
console.log(typeof convertedJson);

// Output:
// {"name":"Mubashir","age":21,"isLoggedIn":true}
//
// string


// ==================================================
// 10. Sample API Response
// ==================================================

// Jab API se JSON response milta hai aur hum usse
// JavaScript mein parse kar lete hain,
// to hum usse normal object ki tarah access kar sakte hain.

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
        street: {
          number: 8929,
          name: "Valwood Pkwy"
        },

        city: "Billings",
        state: "Michigan",
        country: "United States",

        coordinates: {
          latitude: "-69.8246",
          longitude: "134.8719"
        },

        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin"
        }
      },

      email: "jennie.nichols@example.com",

      dob: {
        date: "1992-03-08T15:13:16.688Z",
        age: 30
      },

      phone: "(272) 790-0888",

      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail:
          "https://randomuser.me/api/portraits/thumb/men/75.jpg"
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


// ==================================================
// 11. API Response se Data Access karna
// ==================================================

console.log(userApiResponse.info.results);

// Output:
// 1


// results ek ARRAY hai.
// Isliye first user lene ke liye [0]:

console.log(userApiResponse.results[0]);


// User ka first name:
console.log(userApiResponse.results[0].name.first);

// Output:
// Jennie


// User ka last name:
console.log(userApiResponse.results[0].name.last);

// Output:
// Nichols


// Email:
console.log(userApiResponse.results[0].email);

// Output:
// jennie.nichols@example.com


// Country:
console.log(userApiResponse.results[0].location.country);

// Output:
// United States


// City:
console.log(userApiResponse.results[0].location.city);

// Output:
// Billings


// ==================================================
// 12. API Data ko Destructure karna
// ==================================================

const firstUser = userApiResponse.results[0];

const {
  email,
  gender,
  nat
} = firstUser;

console.log(email);
console.log(gender);
console.log(nat);


// ==================================================
// 13. Nested Destructuring
// ==================================================

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

console.log(first);       // Jennie
console.log(last);        // Nichols
console.log(city);        // Billings
console.log(userCountry); // United States


// ==================================================
// 14. Optional Chaining with API Data
// ==================================================

// APIs mein kabhi data missing bhi ho sakta hai.
// Isliye ?. useful hota hai.

console.log(
  userApiResponse.results?.[0]?.name?.first
);

// Jennie


console.log(
  userApiResponse.results?.[0]?.address?.city
);

// undefined
// Error nahi aayega.
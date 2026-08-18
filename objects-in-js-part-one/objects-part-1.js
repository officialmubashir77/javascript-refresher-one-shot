// console.log("Objects in JavaScript Part 1");

// singleton object
// Object.create();

const mySym = Symbol("Key1");

// object literal
const person2 = {
    name: "Mubashir",
    myFullName: "Mubashir Ibrahim",
    [mySym]: "myKey1",
    age: 24,
    city: "Karachi",
    isLoggedIn: true,
    occupation: "Software Engineer",
    lastLoginDays : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    myDetails: function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old and I live in ${this.city}`);
    }
};

console.log(person2);
console.log(person2.occupation);
console.log(person2["occupation"]);
console.log(person2.lastLoginDays[2]);
console.log(person2[mySym ]);

person2.email = "officialmubashir77@gmail.com";
console.log(person2);

Object.freeze(person2);
person2.email = "officialmubashir77new@gmail.com";
console.log(person2);

person2.myDetails();
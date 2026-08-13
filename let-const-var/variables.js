const accountID = 144553;
let accountEmail = "mubashir@example.com";
var accountPassword = "123456";
accountCity = "Karachi"; // not allowed as accountCity is not declared

let accountState; // undefined because no value is assigned to accountState


// accountID = 786123; // not allowed as accountID is constant
console.log(accountID);

// var is a global variable and can be accessed anywhere in the program. 
// It can be re-declared and updated.
/* Prefer not to use var
   because of its issue in block scope and function scope.
*/

{
    var myName = "Mubashir";
}
console.log(myName);


{
    const myNewName = "Mubashir Constant";
}
// console.log(myNewName); 
// Uncaught ReferenceError: myNewName is not defined because const is block scoped


console.table([accountID, accountEmail, accountPassword]);

// Output in console.table([]);
// ┌─────────┬────────────────────────┐
// │ (index) │ Values                 │
// ├─────────┼────────────────────────┤
// │ 0       │ 144553                 │
// │ 1       │ 'mubashir@example.com' │
// │ 2       │ '123456'               │
// └─────────┴────────────────────────┘
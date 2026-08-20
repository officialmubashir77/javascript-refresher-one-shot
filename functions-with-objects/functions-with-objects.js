console.log("===== FUNCTIONS WITH REST, OBJECTS & ARRAYS =====");


// ======================================================
// 1. REST PARAMETERS
// ======================================================

const calculateCartPrice = function (...prices) {
  return prices;
};

console.log(
  calculateCartPrice(200, 400, 600, 800)
);

// Output:
// [200, 400, 600, 800]


// ======================================================
// 2. REST PARAMETER - TOTAL CART PRICE
// ======================================================

const getTotalPrice = function (...prices) {
  let total = 0;

  for (const price of prices) {
    total += price;
  }

  return total;
};

console.log(
  getTotalPrice(200, 400, 600, 800)
);

// Output:
// 2000


// ======================================================
// 3. OBJECT PASS INTO FUNCTION
// ======================================================

const user = {
  username: "Mubashir",
  price: 999
};

const handleObject = function (userData) {
  return `Username is ${userData.username} and price is ${userData.price}`;
};

console.log(
  handleObject(user)
);

// Output:
// Username is Mubashir and price is 999


// ======================================================
// 4. DIRECT OBJECT PASS INTO FUNCTION
// ======================================================

console.log(
  handleObject({
    username: "Ali",
    price: 399
  })
);

// Output:
// Username is Ali and price is 399


// ======================================================
// 5. ARRAY PASS INTO FUNCTION
// ======================================================

const myNewArr = [200, 400, 600, 800];

const getSecondValue = function (arr) {
  return arr[1];
};

console.log(
  getSecondValue(myNewArr)
);

// Output:
// 400


// ======================================================
// 6. DIRECT ARRAY PASS INTO FUNCTION
// ======================================================

console.log(
  getSecondValue([100, 500, 900])
);

// Output:
// 500


// ======================================================
// 7. GET FIRST AND LAST VALUE FROM ARRAY
// ======================================================

const getArrayValues = function (arr) {
  return {
    firstValue: arr[0],
    lastValue: arr[arr.length - 1]
  };
};

console.log(
  getArrayValues([10, 20, 30, 40])
);

// Output:
// {
//   firstValue: 10,
//   lastValue: 40
// }
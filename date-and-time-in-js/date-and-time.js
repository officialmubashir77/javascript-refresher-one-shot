// console.log("Date and Time in JS");

// Date starts from 1 Jan 1970
const myDate = new Date();
console.log(myDate);

const impMethod = new Date().toLocaleString('default', { 
    weekday: 'long' ,
    month: 'long',
    day: 'numeric' ,
    year: 'numeric' ,
    hour: 'numeric' ,
    minute: 'numeric' ,
    second: 'numeric',
    timeZoneName: 'short' ,
    timeZone: 'Asia/Karachi' , 
});
console.log(impMethod);

// console.log(myDate.toString()); // Output: Tue Aug 18 2026 00:26:46 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toLocaleString()); // Output: 8/18/2026, 12:26:46 AM
// console.log(myDate.toLocaleDateString()); // Output: 8/18/2026
// console.log(myDate.toLocaleTimeString()); // Output: 12:26:46 AM
// console.log(myDate.toDateString()); // Output: Tue Aug 18 2026
// console.log(myDate.getFullYear()); // Output: 2026
// console.log(myDate.getMonth()); // Output: 7
// console.log(myDate.getDate()); // Output: 18
// console.log(myDate.getDay()); // Output: 2
// console.log(myDate.getHours()); // Output: 0
// console.log(myDate.getMinutes()); // Output: 26
// console.log(myDate.getSeconds()); // Output: 46
// console.log(myDate.getMilliseconds()); // Output: 501

// console.log(typeof myDate);

// // Creating a specific date and time
// const mySpecificDate = new Date("2002-01-29");
// const todayDate = new Date();
// console.log(mySpecificDate);

// // total days between two dates
// const totalDays = (todayDate - mySpecificDate) / (1000 * 60 * 60 * 24);
// console.log(totalDays);


// const mySpecificDate2 = new Date("2002-12-29");
// console.log(mySpecificDate2.getTime()); // Output: 946684800000 in milliseconds

// const mySpecificDate3 = Math.floor(Date.now() / 1000 );
// console.log(mySpecificDate3); // Output: 1666577600 in seconds


# JavaScript Date & Time — Short Notes

JavaScript me **Date** object ka use date aur time ko create, read, format aur calculate karne ke liye hota hai.

Basic syntax:

```js
const myDate = new Date();
```

Ye current date aur current time ka `Date` object create karta hai.

---

# 1. JavaScript Date ka Base

Tumhara comment:

```js
// Date starts from 1 Jan 1970
```

JavaScript timestamps ka base point hota hai:

```text
1 January 1970, 00:00:00 UTC
```

Isko commonly:

```text
Unix Epoch
```

kehte hain.

JavaScript timestamps normally is point se elapsed **milliseconds** represent karte hain.

---

# 2. Current Date & Time

```js
const myDate = new Date();
console.log(myDate);
```

`new Date()` current date aur time ka object create karta hai.

Important:

```text
new Date() → current date + current time
```

---

# 3. Date ka Type

```js
console.log(typeof myDate);
```

Output:

```text
object
```

Kyunki JavaScript me `Date` ek object hai.

---

# 4. `toString()`

```js
console.log(myDate.toString());
```

Example output:

```text
Tue Aug 18 2026 00:26:46 GMT+0500 (Pakistan Standard Time)
```

`.toString()` date aur time ko readable string me convert karta hai.

---

# 5. `toLocaleString()`

```js
console.log(myDate.toLocaleString());
```

Example output:

```text
8/18/2026, 12:26:46 AM
```

```text
toLocaleString() → date + time
```

---

# 6. `toLocaleDateString()`

```js
console.log(myDate.toLocaleDateString());
```

Example output:

```text
8/18/2026
```

```text
toLocaleDateString() → date only
```

---

# 7. `toLocaleTimeString()`

```js
console.log(myDate.toLocaleTimeString());
```

Example output:

```text
12:26:46 AM
```

```text
toLocaleTimeString() → time only
```

---

# 8. `toDateString()`

```js
console.log(myDate.toDateString());
```

Example output:

```text
Tue Aug 18 2026
```

Ye date ko readable text format me return karta hai.

---

# 9. Custom Date Formatting

Tumhara code:

```js
const impMethod = new Date().toLocaleString("default", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
    timeZone: "Asia/Karachi",
});

console.log(impMethod);
```

Options ka meaning:

```text
weekday      → day ka naam
month        → month ka naam
day          → date
year         → year
hour         → hour
minute       → minute
second       → second
timeZoneName → timezone ka short naam
timeZone     → kis timezone me time display karna hai
```

---

# 10. `timeZone: "Asia/Karachi"`

```js
timeZone: "Asia/Karachi"
```

Iska matlab date/time ko Karachi timezone ke according format karo.

---

# 11. `getFullYear()`

```js
console.log(myDate.getFullYear());
```

Example:

```text
2026
```

---

# 12. `getMonth()`

```js
console.log(myDate.getMonth());
```

Example:

```text
7
```

Important: months zero-based hote hain.

```text
January   → 0
February  → 1
March     → 2
April     → 3
May       → 4
June      → 5
July      → 6
August    → 7
September → 8
October   → 9
November  → 10
December  → 11
```

Human-readable month number ke liye:

```js
myDate.getMonth() + 1;
```

---

# 13. `getDate()`

```js
console.log(myDate.getDate());
```

Example:

```text
18
```

Range:

```text
1 to 31
```

---

# 14. `getDay()`

```js
console.log(myDate.getDay());
```

Example:

```text
2
```

Weekday indexing:

```text
Sunday    → 0
Monday    → 1
Tuesday   → 2
Wednesday → 3
Thursday  → 4
Friday    → 5
Saturday  → 6
```

---

# 15. `getDate()` vs `getDay()`

```text
getDate() → month ki date, 1 to 31
getDay()  → week ka day index, 0 to 6
```

Example:

```js
getDate(); // 18
getDay();  // 2
```

---

# 16. Time Getters

```js
myDate.getHours();
myDate.getMinutes();
myDate.getSeconds();
myDate.getMilliseconds();
```

Ranges:

```text
getHours()       → 0 to 23
getMinutes()     → 0 to 59
getSeconds()     → 0 to 59
getMilliseconds()→ 0 to 999
```

Important:

```text
1000 milliseconds = 1 second
```

---

# 17. Creating a Specific Date

```js
const mySpecificDate = new Date("2002-01-29");
```

Yahan specific date create ki gayi hai:

```text
29 January 2002
```

Common syntax:

```js
new Date("YYYY-MM-DD");
```

---

# 18. Difference Between Two Dates

```js
const todayDate = new Date();

const totalDays =
    (todayDate - mySpecificDate) /
    (1000 * 60 * 60 * 24);

console.log(totalDays);
```

Do Date objects subtract karne par difference milliseconds me milta hai.

---

# 19. Milliseconds ko Days me Convert Karna

```text
1000 milliseconds = 1 second
60 seconds        = 1 minute
60 minutes        = 1 hour
24 hours          = 1 day
```

Isliye:

```text
1000 × 60 × 60 × 24
= 86,400,000 milliseconds
```

Formula:

```js
(todayDate - mySpecificDate) / (1000 * 60 * 60 * 24)
```

approximately total days deta hai.

---

# 20. `.getTime()`

```js
const mySpecificDate2 = new Date("2002-12-29");

console.log(mySpecificDate2.getTime());
```

`.getTime()` date ka timestamp **milliseconds** me return karta hai.

```text
1 Jan 1970
↓
specified date tak elapsed milliseconds
```

---

# 21. `Date.now()`

```js
Date.now();
```

Current timestamp milliseconds me return karta hai.

```text
Date.now() → current timestamp in milliseconds
```

---

# 22. Milliseconds → Seconds

Tumhara code:

```js
const mySpecificDate3 = Math.floor(Date.now() / 1000);

console.log(mySpecificDate3);
```

Flow:

```text
Date.now()
↓
milliseconds

/ 1000
↓
seconds

Math.floor()
↓
whole seconds
```

---

# Quick Revision

```js
const myDate = new Date();
```

```text
current date + time
```

```js
myDate.toString();
myDate.toLocaleString();
myDate.toLocaleDateString();
myDate.toLocaleTimeString();
myDate.toDateString();
```

```js
myDate.getFullYear();
myDate.getMonth();
myDate.getDate();
myDate.getDay();
myDate.getHours();
myDate.getMinutes();
myDate.getSeconds();
myDate.getMilliseconds();
```

```js
const specificDate = new Date("2002-01-29");
```

```js
specificDate.getTime();
// timestamp in milliseconds
```

```js
Date.now();
// current timestamp in milliseconds
```

```js
Math.floor(Date.now() / 1000);
// current timestamp in seconds
```

---

# Important Differences

```text
getMonth() → 0 to 11
getDate()  → 1 to 31
getDay()   → 0 to 6
```

```text
getTime() → selected Date object's timestamp
Date.now() → current timestamp
```

```text
JavaScript timestamp → milliseconds
```

---

# One-line Formula 🧠

```text
new Date()                → current Date object
toString()                → readable date/time
toLocaleString()          → local date + time
toLocaleDateString()      → date only
toLocaleTimeString()      → time only

getFullYear()             → year
getMonth()                → month 0-11
getDate()                 → date 1-31
getDay()                  → weekday 0-6
getHours()                → hour 0-23
getMinutes()              → minutes
getSeconds()              → seconds
getMilliseconds()         → milliseconds

getTime()                 → timestamp in ms
Date.now()                → current timestamp in ms
Math.floor(Date.now()/1000)
→ current timestamp in seconds
```

Sabse important:

```text
1 second = 1000 milliseconds
1 day    = 1000 × 60 × 60 × 24 milliseconds
```

Aur:

```text
getMonth()
January = 0
December = 11
```

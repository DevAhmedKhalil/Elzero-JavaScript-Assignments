/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow = new Date();
console.log(dateNow); // Sun Mar 05 2023 14:07:19 GMT+0200

// console.log("#".repeat(10));

// dateNow.setTime(0);
// console.log(dateNow); // Thu Jan 01 1970 02:00:00 GMT+0200

// console.log("#".repeat(10));

// dateNow.setTime(10000); // 10000 millSec ===> 10 seconds
// console.log(dateNow); // Thu Jan 01 1970 02:00:10 GMT+0200

// console.log("#".repeat(10));

// dateNow.setDate(32); // Day Of The Month [Negative And Positive]
// console.log(dateNow);

// console.log("#".repeat(10));

// dateNow.setFullYear(2020, 13); // (year, month => Optional [0-11], day => Optional [1-31])
// console.log(dateNow);

console.log("#".repeat(10));

dateNow.setMonth(13); // (Month [0-11], Day => Optional [1-31]) [Negative And Positive]
console.log(dateNow);

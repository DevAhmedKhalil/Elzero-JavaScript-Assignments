/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Mar 3, 03");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime()); // => Number Of Milliseconds
console.log(dateNow.getDate()); // => Day Of The Month
console.log(dateNow.getFullYear()); // 2023
console.log(dateNow.getMonth()); //  => Zero Based
console.log(dateNow.getDay()); // => Day Of The Week
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

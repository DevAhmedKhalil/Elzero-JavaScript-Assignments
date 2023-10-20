// Assignment : 1

let dateNow = new Date();
console.log(dateNow);

let birthday = new Date("Mar, 3, 3");
console.log(birthday);

let dateDiff = dateNow - birthday;

console.log((dateDiff / 1000).toFixed(0), "Seconds");

console.log((dateDiff / 1000 / 60).toFixed(0), "Minutes");

console.log((dateDiff / 1000 / 60 / 60).toFixed(0), "Hours");

console.log((dateDiff / 1000 / 60 / 60 / 24).toFixed(0), "Days");

console.log((dateDiff / 1000 / 60 / 60 / 24 / 12).toFixed(0), "Months");

console.log((dateDiff / 1000 / 60 / 60 / 24 / 365).toFixed(0), "Years");

console.log("#".repeat(20));
//---------------------------------------------------------------------------
// Assignment : 2

let DateNow = new Date();

DateNow.setTime(1000); // 10000 millSec ===> 10 seconds
DateNow.setFullYear(1980); // (year, month => Optional [0-11], day => Optional [1-31])
console.log(DateNow); // Thu Jan 01 1970 02:00:10 GMT+0200

// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

console.log("#".repeat(20));
//---------------------------------------------------------------------------
// Assignment : 3

let timeNow = new Date();
timeNow.setDate(0);
console.log(timeNow);
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
console.log(
  "Prvious Month Is",
  months[timeNow.getDay() - 1],
  "And Last Day Is",
  timeNow.getDate()
);

// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

console.log("#".repeat(20));
//---------------------------------------------------------------------------
// Assignment : 4

let myBirthDay = new Date("2003-3-3");
console.log(myBirthDay);

console.log(new Date("Mar 3, 3"));

let dd = Date.parse("Mar 3 2003");
// console.log(dd); // 1046642400000
console.log(new Date(dd));

console.log("#".repeat(20));
//---------------------------------------------------------------------------
// Assignment : 5

const before = performance.now();

// for (let i = 0; i < 100000; i++) {
//   document.write(`<div>${i}</div>`);
// }

const after = performance.now();

const final = after - before;

console.log(`Loop Took ${final.toFixed(0)} MilliSeconds`);

console.log("#".repeat(20));
//---------------------------------------------------------------------------
// Assignment : 6

// Write Your Generator Function Here
function* gen() {
  let i = 14;
  let plus = 140;
  let sum = i + plus;

  yield i;

  while (true) {
    yield sum;
    sum += plus += 200;
  }
}

let generator1 = gen();

console.log(generator1.next()); // {value: 14, done: false}
console.log(generator1.next()); // {value: 154, done: false}
console.log(generator1.next()); // {value: 494, done: false}
console.log(generator1.next()); // {value: 1034, done: false}
console.log(generator1.next()); // {value: 1774, done: false}
console.log(generator1.next()); // {value: 2714, done: false}
console.log(generator1.next()); // {value: 3854, done: false}
console.log(generator1.next()); // {value: 5194, done: false}
console.log(generator1.next()); // {value: 6734, done: false}

console.log("#".repeat(20));
//---------------------------------------------------------------------------
// Assignment : 7

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here

function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

let generator2 = genAll();

console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next()); // {value: 2, done: false}
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: 4, done: false}
console.log(generator2.next()); // {value: 5, done: false}
console.log(generator2.next()); // {value: "A", done: false}
console.log(generator2.next()); // {value: "B", done: false}
console.log(generator2.next()); // {value: "C", done: false}
console.log(generator2.next()); // {value: "D", done: false}2

console.log("#".repeat(20));
//---------------------------------------------------------------------------
// Assignment : 8


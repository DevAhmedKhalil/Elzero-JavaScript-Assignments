/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFun, rejectFun) => {
//   let connect = false;
//   if (connect) {
//     resolveFun("Connection Established :)");
//   } else {
//     rejectFun("Connection Failed :(");
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// console.log(myPromise); // Promise {<pending>} when connect = true OR false
// //  Promise Object Represent An [Asynchronous] Operation And Its Resulting Value
console.log("__".repeat(20));
//---------------------------------------------------------------

const MyPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = false;
  if (connect) {
    resolveFunction("Connection Establilshed :) <3");
  } else {
    rejectFunction("Connection Failed :( xx");
  }
});

console.log(MyPromise); // Promise {<fulfilled>: 'Connection Establilshed :) <3'}

let resolver = (resolveValue) => console.log(`Good ${resolveValue} ..`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue} ..`);

MyPromise.then(resolver, rejecter);

MyPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

MyPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

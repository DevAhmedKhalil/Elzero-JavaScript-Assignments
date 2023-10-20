/*
  Promise
  - All
  - All Settled
  - Race
*/

// [1]
const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third  Promise");
  }, 2000);
});

// // [2]
// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// ); // Rejected: Iam The Second Promise

// // [3]
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// ); // (3) [{…}, {…}, {…}] all Promises with All informations

// [4]
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
); // Rejected: Iam The Second Promise => The fastes promise

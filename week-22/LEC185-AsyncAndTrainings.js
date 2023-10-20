/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectValue) => console.log("Rejected: " + rejectValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("User Found :)");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log(rejectedValue)
// );

async function getData() {
  // Async Before Function Mean This Function Return A Promise
  let users = [];
  if (users.length > 0) {
    return "User FOUND";
  } else {
    throw new Error("NO Users Found"); // Error
  }
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected: " + rejectedValue)
);

/*
  070 - Arrow Function Challenge
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// function names(...allNames) {
//   function fun() {
//     let result = "";
//     for (let i of allNames) {
//       result += `[${i}], `;
//     }
//     return result.slice(0, result.length - (2));
//   }

//   return `String ${fun()} => Done !`;
// }
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

//-------------------------------------------------------------
// to Arrow FUN

let names = (...allNames) =>
  "String " +
  (() => {
    let result = "";
    for (let i of allNames) {
      result += `[${i}], `;
    }
    return result.slice(false, result.length - (true + true));
  })() +
  " => Done !";

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

//------------------------------------------------------
// to Arrow FUN

const namesss = (...all) =>
  "String " +
  all.reduce(
    (acc, cur, i) =>
      i != all.length - 1 ? `${acc}[${cur}], ` : `${acc}[${cur}]`,
    ""
  ) +
  " => Done !";

console.log(namesss("Osama", "Mohamed", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[-false][+true];

console.log(calc(10, myNumbers[+false], myNumbers)); // 80

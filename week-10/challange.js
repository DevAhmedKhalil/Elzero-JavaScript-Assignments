/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split(",")
//   .map((ele) => (ele.length > +true ? ele[+Array.isArray("*")] : ele))
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele.includes("_") ? " " : ele;
//   })
//   .map(function (ell){
//     return ell.endsWith("Z") ? "" : ell;
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });
// console.log(solution); // Elzero Web School


let solution = myString
  .split(",")
  .map((ele) => (ele.length > true ? ele[+false] : ele))
  .reduce((acc, cur) => (cur !== "_" ? acc + cur : acc + " "))
  .split("")
  .filter(
    (el) =>
      (isNaN(el) || el === " ") &&
      el !== myString[myString.length - myString.split(" ").length]
  )
  .join("");

console.log(solution);

console.log(myString);
console.log(myString.split(" "));
console.log(myString.split(" ").length);
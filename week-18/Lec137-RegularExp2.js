/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

let myString = "AaBbcdefG123!234%^&*";

let atozSmall = /[a-z]/g;
console.log(myString.match(atozSmall));

let NotaTozSmall = /[^a-z]/g;
console.log(myString.match(NotaTozSmall));

let AtoZCapital = /[A-Z]/g;
console.log(myString.match(AtoZCapital));

let NotaTozCapital = /[^A-Z]/g;
console.log(myString.match(NotaTozCapital));

let a_c_e = /[ace]/g;
console.log(myString.match(a_c_e));

let NOTa_c_e = /[^ace]/g;
console.log(myString.match(NOTa_c_e));

let letterCapsAndSmall = /[a-zA-Z]/g;
console.log(myString.match(letterCapsAndSmall));

let numsAndSpecials = /[^a-zA-Z]/g;
console.log(myString.match(numsAndSpecials));

let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(specials));

let NotSpecials = /[a-zA-Z0-9]/g;
console.log(myString.match(NotSpecials));
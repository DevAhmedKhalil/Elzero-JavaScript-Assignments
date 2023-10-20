/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log("myString Ends With 'ing' =>", /ing$/gi.test(myString));
console.log("myString Starts With 'we' =>", /^we/gi.test(myString));

console.log("names Ends With lz =>", /lz$/gi.test(names));
console.log("names Starts With digit =>", /^\d/gi.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));

const text = 'A quick fox';
const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// Expected output: Array ["quick"]


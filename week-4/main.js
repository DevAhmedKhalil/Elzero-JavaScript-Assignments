// /*
//   #023 – Number
//   - Double Precision
//   - Syntactic Sugar "_"
//   - e
//   - **
//   - With Decimal
//   - Number + BigInt
//   - Number Min Value
//   - Number Max Value
// */

// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 23434343434);
// console.log(Number.MAX_VALUE - 100000000000000000000000000);

// //----------------------------------------------------------------------

// /*
//   #024 – Number Methods
//   - Two Dots To Call A Methods
//   - toString()
//   - toFixed()
//   - parseInt()
//   - parseFloat()
//   - isInteger() [ES6]
//   - isNaN() [ES6]
// */

// console.log((100).toString());
// // console.log(100..toString());
// // console.log(100.10.toString());

// console.log((100.554555).toFixed(2));

// console.log(Number("100 Osama")); //NaN
// console.log(+"100 Osama"); //NaN

// console.log(parseInt("100 Osama")); //100
// console.log(parseInt("Osama 100 Osama")); //NaN

// console.log(parseInt("100.500 Osama")); //100
// console.log(parseFloat("100.500 Osama")); //100.5

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.5));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("Osama" / 20));
// console.log(Number.isNaN("Osama"));

// //----------------------------------------------------------------------

// /* VID #025
//   Math Object
//   - round()
//   - ceil()
//   - floor()
//   - min()
//   - max()
//   - pow()
//   - random()
//   - trunc() [Es6]
// */

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));
// console.log(Math.random());

// console.log(Math.trunc(99.5));
// console.log(Math.trunc(99.8));
// console.log(Math.trunc(99.2));

// //----------------------------------------------------------------------

// // /*
// //   #026 – Number Challenge
// // */

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.trunc(Math.min(a, b, c, d)));
// // console.log(parseInt(Math.min(a, b, c, d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log((parseInt(b) * a) / Math.trunc(d)); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(parseInt(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));

// // Use Variables b + d To Get This Values
// console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number

// //----------------------------------------------------------------------

// /*
//   #027 – String Methods Part 1
//   - Access With Index
//   - Access With charAt()
//   - length
//   - trim()
//   - toUpperCase()
//   - toLowerCase()
//   - Chain Methods
// */

// let theName = "  Ahmed  ";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[5]);

// console.log(theName.charAt(121));
// console.log(theName.charAt(1));
// console.log(theName.charAt(5));

// console.log(theName.length);
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());

// //----------------------------------------------------------------------

// /*
//   #028 – String Methods Part 2
//   - indexOf(Value [Mand], Start [Opt] 0)
//   - lastIndexOf(Value [Mand], Start [Opt] Length)
//   - slice(Start [Mand], End [Opt] Not Include End)
//   - repeat(Times) [ES6]
//   - split(Separator [Opt], Limit [Opt])
// */

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15

// console.log(a.slice(2));
// console.log(a.slice(2, 6));
// console.log(a.slice(-5));
// console.log(a.slice(-5, -3));

// console.log(a.repeat(5));

// console.log(a.split());
// console.log(a.split(""));
// console.log(a.split(" "));
// console.log(a.split("", 6));
// console.log(a.split(" ", 1));
// console.log(a.split(" ", 2));
// console.log(a.split(" ", 3));
// console.log(a.split(" ", 4));
// console.log(a.split("o", 4));
// console.log(a.split("o", 5));

// //----------------------------------------------------------------------

// /*
//   #029 – String Methods Part 3
//   - substring(Start [Mand], End [Opt] Not Including End)
//   --- Start > End Will Swap
//   --- Start < 0 It Start From 0
//   --- Use Length To Get Last Character
//   - substr(Start [Mand], Characters To Extract)
//   --- Start >= Length = ""
//   --- Negative Start From End
//   - includes(Value [Mand], Start [Opt] Default 0) [ES6]
//   - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
//   - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
// */

// let a = "Elzero Web School";

// console.log(a.length);

// console.log(a.substring(2));
// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));   //swapping start, end
// console.log(a.substring(-10, 6)); // 0 - 6
// console.log(a.substring(-10)); // 0 - end
// console.log(a.substring(a.length - 5, a.length - 3)); //ch

// console.log(a.substr(0)); // start 0 to end
// console.log(a.substr(0, 6)); // start index 0 and count 6 after it
// console.log(a.substr(17)); // empty
// console.log(a.substr(-3));
// console.log(a.substr(-5, 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web", 8));

// console.log(a.startsWith("E")); // true
// console.log(a.startsWith("E", 2)); // false
// console.log(a.startsWith("zero", 2)); // true

// console.log(a.endsWith("l")); // true
// console.log(a.endsWith("o", 6)); // true : 6 is length not index
// console.log(a.endsWith("ro", 6)); // true :  6 is length not index

// //----------------------------------------------------------------------

/*
  #030 – String Challenge
  String Manipulation :
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.toUpperCase().charAt(2) + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + " " + a.substr(11)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLocaleLowerCase() +
    a.slice(1, 6).toUpperCase() +
    a.slice(6, 7) +
    a.slice(7).toUpperCase()
); // eLZERO WEB SCHOOl

console.log(a.charAt(0).toLowerCase() + a.substr(1).toUpperCase());

// //----------------------------------------------------------------------

/*
  #026 – Number Challenge :
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(parseInt(Math.min(a, b, c, d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log((parseInt(b) * a) / 2); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(parseInt(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));

// // Use Variables b + d To Get This Values
// console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number

// // #031 => #032
// // Assignment 1 :

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 != 100 || 10 || 20); // true
// console.log(-10 == "-10"); // true
// console.log(-(-50) != +"-40"); // true
// console.log(-10 !== -(-"-40")); // true
// console.log(-"10" == -10); // true
// console.log(-20 !== false); // true
// console.log("====================");

// // Assignment 2 :

// let num1 = 10;
// let num2 = 20;

// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log(typeof num1 === typeof num2); // true
// console.log(typeof num1 == typeof num2); // true
// console.log(num1 < num2); // true
// console.log(num1 <= num2); // true
// console.log("====================");

// // Assignment 3 :

// let a = 20;
// let b = 30;
// let c = 10;

// console.log((a < b && a > c) || a < b); // true
// console.log(a < b || a < c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
// console.log("====================");

// //---------------------------------------------------------------

// // #033 => 037
// // Assignment 1 :

// // Test Case 1
// let num = 9; // "009"

// // Test Case 2
// // let num = 20; // "020"

// // Test Case 3
// // let num = 110; // "110"

// if (num >= 1 && num <= 9) {
//   console.log(Number(`00${num}`));
// } else if (num >= 10 && num <= 99) {
//   console.log(Number(`0${num}`));
// } else {
//   console.log(num);
// }
// console.log("====================");
// //---------------------------

// //Assignment 2 :

// let number1 = 9;
// let str = "9";
// let str2 = "20";

// if (number1 == str) {
//   console.log("{num1} Is The Same Value As {str}");
// }
// if (number1 !== str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }
// if (number1 !== str2) {
//   console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }
// if (typeof str === typeof str2) {
//   console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

// // Output
// // "{num1} Is The Same Value As {str}"
// // "{num1} Is The Same Value As {str} But Not The Same Type"
// // "{num1} Is Not The Same Value Or The Same Type As {str2}"
// // "{str} Is The Same Type As {str2} But Not The Same Value"
// console.log("====================");

// //---------------------------1
// //Assignment 3 :

// let nu1 = 10;
// let nu2 = 30;
// let nu3 = "30";

// if (nu3 > nu1 && nu3 !== nu2) {
//   console.log(
//     "30 Is Larger Than 10 And Type string Not The Same Type As number"
//   );
//   if (nu3 > nu1 && nu3 == nu2) {
//     console.log(
//       "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//     );
//     if (nu3 != nu1 && nu3 !== nu2) {
//       console.log(
//         "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//       );
//     }
//   }
// }

// // Needed Output
// ("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

// console.log("====================");

//---------------------------1
//Assignment 4 :

// Edit What You Want Here

let num1 = +"1";
let num2 = -1;
let num3 = +"1";
let num4 = 24;

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

console.log("====================");
// //---------------------------------------------------------------

// // #038 => 039
// // Assignment 1 :

let day = "   monday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let newDay = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
// console.log(newDay);

switch (newDay) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

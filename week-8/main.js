// #057
/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

// function sayHello(userName) {
//   console.log(`Hi ${userName}`);
// }

// sayHello("Osama");
// sayHello("Sayed");
// sayHello("Ali");

//--------------------------------------------------------------
//058

/*
  Function Advanced Examples
*/

// function sayHello(userName, age) {
//   if (age < 20) {
//     console.log(`App is Not Suitable For You`);
//   } else {
//     console.log(`Hello ${userName} Your Age is ${age}`);
//   }
// }

// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Ali", 18);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1982, 2021, 2020);

//--------------------------------------------------------------
//#059

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i === 15) {
//       return `Interrupting`;
//     }
//     console.log(i);
//   }
// }

// generate(10, 20);

//--------------------------------------------------------------
//#060

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

// function sayHello(username = "Unknown", age = "Unknown") {
//   // if (age === undefined) {
//   //   age = "Unknown";
//   // }
//   // age = age || "Unknown";
//   return `Hello ${username} Your Age Is ${age}`;
// }

// console.log(sayHello());

//--------------------------------------------------------------
//#061

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

// function calc(...numbers) {
//   // console.log(Array.isArray(numbers));
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));

//--------------------------------------------------------------
//#062 Function Ultimate Practice

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//   } else {
//     document.write(`<p>Skills Is Hidden</p>`);
//   }
//   document.write(`</div>`);
// }

// showInfo("Osama", 38, 20, "No", "Html", "CSS");

//--------------------------------------------------------------
//#063 - Random Arguments Function Challenge

// function showinfo(...info) {
//   let name, age, hire;
//   for (let i = 0; i < info.length; i++) {
//     if (typeof info[i] === "string") {
//       name = info[i];
//     } else if (typeof info[i] === "number") {
//       age = info[i];
//     } else if (typeof info[i] === "boolean") {
//       hire = info[i];
//       if (hire == false) {
//         hire = "not available";
//       } else if (hire == true) {
//         hire = "available";
//       }
//     }
//   }
//   return console.log(
//     `Hi ,${name}, Your Age Is ${age} ,You Are ${hire} For Hire`
//   );
// }
// showinfo("osama", 40, false);
// showinfo(true, "osama", 40);
// showinfo(40, false, "osama");

// //------------------

// function showDetails(...data) {
//   let namee, agee, hiree;
//   for (let i = 0; i < 3; i++) {
//     typeof data[i] === "string"
//       ? (namee = data[i])
//       : typeof data[i] === "number"
//       ? (agee = data[i])
//       : data[i] === false
//       ? (hiree = "Not Availble")
//       : (hiree = "Availble");
//   }
//   return console.log(`Hi ,${namee}, Your Age Is ${agee} ,You Are ${hiree} For Hire`);
// }
// showDetails("ahmed", true, 20);
// showDetails("ahmed",20, false);
// showDetails(true, 20, "ahmed");

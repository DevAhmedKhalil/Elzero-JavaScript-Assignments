// التكليف 01
function sayHello(theName, theGender) {
  // Your Code Here

  if (typeof theName === "string") {
    if (theGender === "Male") {
      console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
      console.log(`Hello Mrs ${theName}`);
    } else if (typeof theGender === "undefined") {
      console.log(`Hello ${theName}`);
    }
  }
}



// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//-----------------------------------------------------
// التكليف 02

// function calculate(firstNum, secondNum, operation) {
//   // Your Code Here
//   if (typeof secondNum === "undefined" && typeof operation === "undefined") {
//     console.log("Second Number Not Found");
//   } else if (typeof operation === "undefined") {
//     console.log(firstNum + secondNum);
//   } else if (operation === "add") {
//     console.log(firstNum + secondNum);
//   } else if (operation === "subtract") {
//     console.log(firstNum - secondNum);
//   } else if (operation === "multiply") {
//     console.log(firstNum * secondNum);
//   }
// }

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  // Conditional (ternary) operator
  typeof secondNum === "undefined" && typeof operation === "undefined"
    ? console.log("Second Number Not Found")
    : typeof operation === "undefined"
    ? console.log(firstNum + secondNum)
    : operation === "add"
    ? console.log(firstNum + secondNum)
    : operation === "subtract"
    ? console.log(firstNum - secondNum)
    : operation === "multiply"
    ? console.log(firstNum * secondNum)
    : console.log("Error");
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//-----------------------------------------------------
// التكليف 03

function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge < 100) {
    console.log("Age is years = " + theAge);
    console.log("Age in months = " + theAge * 12);
    console.log("Age in days = " + theAge * 12 * 30);
    console.log("Age in hours = " + theAge * 12 * 30 * 24);
    console.log("Age in minutes = " + theAge * 12 * 30 * 24 * 60);
    console.log("Age in seconds = " + theAge * 12 * 30 * 24 * 60 * 60);
  } else {
    console.log("Age out of range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//-----------------------------------------------------
// التكليف 04

function checkStatus(a, b, c) {
  // Your Code Here
  let name, age, hire;
  typeof a === "string"
    ? (name = a)
    : typeof b === "string"
    ? (name = b)
    : (name = c);
  typeof a === "number"
    ? (age = a)
    : typeof b === "number"
    ? (age = b)
    : (age = c);
  typeof a === "boolean"
    ? (hire = a)
    : typeof b === "boolean"
    ? (hire = b)
    : (hire = b);

  return `Hello ${name}, Your age is ${age}, You ${
    hire ? "Are" : "Are Not"
  } Available for hire`;
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//-----------------------------------------------------
// التكليف 05

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}"> ${i} </option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//-----------------------------------------------------
// التكليف 06

// function multiply(...nums) {
//   let res = 1;
//   for(let i=0; i<nums.length; i++){
//     typeof nums[i] === 'number'
//     ? res *= parseInt(nums[i]) 
//     : res = res;
//   }
//   return res;
// }

function multiply(...args) {
	let answer = 1;
	for (let arg of args) {
		if (typeof arg === "number") {
			answer *= Math.trunc(arg);
		}
	}
	return answer;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000

//-------------------------------------------------
// assignment 6 :
console.log("#".repeat(20));

function multiply(...numbers) {
  let result = 1;
  for (let i of numbers) {
    if (typeof numbers[i] === "number") {
      result *= parseInt(numbers[i]);
    } else {
      continue;
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

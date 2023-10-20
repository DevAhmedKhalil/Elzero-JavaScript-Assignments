/*
  #071 – Higher Order Functions – Map
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myArray = [1, 2, 3, 4, 5, 6];

let newArray = [];
for (let i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] + myArray[i]);
}
console.log(newArray);

// the same idea === anonymous function
let newArr = myArray.map(function (element, index, arr) {
  // console.log(`
  //   element => ${element}
  //   index => ${index}
  //   arr => ${arr}
  //   this => ${this}`
  // );
  return element + element;
}, 55);
console.log(newArr);

//  the same idea => arrow function
let newarr = myArray.map((element) => element + element);
console.log(newarr);

// the same idea ===> function
function addArry(element) {
  return element + element;
}
let add = myArray.map(addArry);
console.log(add);

console.log("----------------------------------------------------------");

/*
  #072 – Higher Order Functions – Map Practice
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map(function (element) {
    // condition ? true : false ;
    return element === element.toLowerCase()
      ? element.toUpperCase()
      : element.toLowerCase();
  })
  .join("");
console.log(sw);

// the same but Arrow Function
let swapp = swappingCases
  .split("")
  .map((element) =>
    element === element.toUpperCase()
      ? element.toLowerCase()
      : element.toUpperCase()
  )
  .join("");
console.log(swapp);

let inv = invertedNumbers.map((element) => -element);
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map((element) => (isNaN(parseInt(element)) ? element : ""))
  .join("");

console.log(ign);
console.log(isNaN("s"));
console.log(isNaN(parseInt("s")));
console.log(isNaN(parseInt("5")));
console.log(isNaN(3));

console.log("----------------------------------------------------------");

/*
#073 – Higher Order Functions – Filter
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filterFriends = friends.filter(function (element) {
  return element.startsWith("A") ? true : false;
  // return element.startsWith("A") ? false  : true;
});
console.log(filterFriends);

let numbers = [11, 20, 2, 5, 17, 10];
let evenNumber = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(evenNumber);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {  // filter just filter and return [true OR false]
//   return el + el;
// });

// console.log(addFilter);

console.log("----------------------------------------------------------");

//#074 – Higher Order Functions – Filter Practi

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");
console.log(smallWords);

// Ignore Numbers
let ignoreNums = "Elz123er4o";

// Ignore Numbers with "filter"
let igNums = ignoreNums
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");
console.log(igNums);

// Ignore Numbers with "map"
let ignNums = ignoreNums
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
    // return isNaN(parseInt(ele));
  })
  .join("");
console.log(ignNums);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");
console.log(mixedContent);

console.log("----------------------------------------------------------");

//#075 – Higher Order Functions – Reduce
/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { 
    --
    --
  }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let addNUMs = nums.reduce(function (acc, current, index, arr) {
  console.log(`Accumulator = ${acc}`);
  console.log(`Current Element = ${current}`);
  console.log(`Current Element Index = ${index}`);
  console.log(`Array = ${arr}`);
  console.log(acc + current);
  console.log("###################");
  return acc + current;
}, 5);
console.log(addNUMs);

console.log("----------------------------------------------------------");

//----------------------------------------------------------------------------------
//#076 – Higher Order Functions – Reduce Practice
/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc = ${acc}`);
  console.log(`current Element = ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############################`);
  return acc.length > current.length ? acc : current;
});
console.log(check);

//-----------------------------

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (element) {
    // return ! element.startsWith("@");
    return !element.endsWith("@");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  }, "///");

console.log(finalString);
console.log("----------------------------------------------------------");

//----------------------------------------------------------------------------------
// #077 – Higher Order Functions – ForEach & Practice

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDevs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    //Remove Active Class from all elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });

    //Add active class to this element
    this.classList.add("active");

    //Hide All Divs
    allDevs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

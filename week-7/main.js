// /* -49
//   -Loop
//   -Loop On Sequences */

// let myFriends = [1, 2, "ahmed", "elsayed", "mohamed", 6];

// let onlynames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlynames.push(myFriends[i]);
//   }
// }

// console.log(onlynames);

//--------------------------------------------------------------------

// /* 50
//   Loop
//   - Nested Loops
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors:- ");

//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }

//   console.log("Models:- ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }

//--------------------------------------------------------------------

/*51
  Loop Control
  - Break
  - Continue
  - Label
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(`# ${products[i]}`);

//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === 'Green') {
//       //break nestedLoop;
//       break mainLoop;
//     }
//   }
// }

//--------------------------------------------------------------------

/*052 
  Loop For Advanced Example
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }

//--------------------------------------------------------------------

/*
  053 - Practice – Add Products To Page     
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];

// let showCount = 5;

// document.write(`<h1> Show ${showCount} Products </h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);

//   document.write(`<h3> [${i+1}] ${products[i]} </h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p> ${colors[j]} </p>`)
//   }
//   document.write(`<p> ${colors.join(" | ")} </p>`)

//   document.write(`</div>`);
// }

//--------------------------------------------------------------------

/*
//   054 - Loop – While
//   Loop
//   - While
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index += 1;
// }

//--------------------------------------------------------------------

// /*
//   055 - Loop – Do, While
//   Loop
//   - Do / While
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);

//--------------------------------------------------------------------

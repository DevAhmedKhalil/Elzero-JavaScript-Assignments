// // Assignment 1 :

// let myNumbers = [1, 2, 3, 4, 5];

// const [a, , , , e] = myNumbers;

// console.log(a * e); // 5

//------------------------------------
console.log("#".repeat(20));
//------------------------------------

// // Assignment 2 :

// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// // Write Your Destructuring Assignment Here
// const [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//------------------------------------
console.log("#".repeat(20));
//------------------------------------

// // Assignment 3 :

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// let finalArray = arr1.concat(arr2).concat(arr3);
// // ['Ahmed', 'Sameh', 'Sayed', 'Mohamed', 'Gamal', 'Amir', 'Haytham', 'Shady', 'Mahmoud']
// // console.log(finalArray);

// // Write Your Destructuring Assignment Here
// const [c, , , , , , , a, b] = finalArray;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed

//------------------------------------
console.log("#".repeat(20));
//------------------------------------

// //  Assignment 4 :

// // const member = {
// //   age: 30,
// //   working: false,
// //   country: "Egypt",
// //   hobbies: ["Reading", "Swimming", "Programming"],
// // };

// // // Write Your Destructuring Assignment Here
// // ({
// //   age: a,
// //   working: w,
// //   country: c,
// //   hobbies: [h1, , h3],
// // } = member);

// // console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // // My Age Is 30 And Iam Not Working

// // console.log(`I Live in ${c}`);
// // // I Live in Egypt

// // console.log(`My Hobbies: ${h1} And ${h3}`);
// // // My Hobbies: Reading And Programming

// //------------------------------------
// console.log("#".repeat(20));
// //------------------------------------

// Assignment 5 :

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// console.log(game.title);
// console.log(game["developer"]);
// console.log(game.releases["Oath In Felghana"][0]);
// console.log(game.releases["Oath In Felghana"][1]);
// console.log(game.releases["Ark Of Napishtim"].US);
// console.log(game["releases"]["Ark Of Napishtim"]["JAP"]);
// console.log(game.releases.Origin);

// console.log(Object.keys(game));

// Write Your Destructuring Assignment/s Here

// first Destructuring
const {
  title: t,
  developer: d,
  // releases: { Origin: or },
} = game;

console.log(game.releases);
console.log(Object.keys(game.releases));
// [2] Destructuring
// "Oath In Felghana": ["USA", "Japan"], // ERROR >> IF you but o,a after :
const [o, a, or] = Object.keys(game.releases);

console.log(game.releases["Oath In Felghana"]);
// [3] Destructuring
const [u, j] = game.releases["Oath In Felghana"];

console.log(game.releases["Ark Of Napishtim"]);
// [4] Destructuring
const { US: u_price, JAP: j_price } = game.releases["Ark Of Napishtim"];

// ------------------------------------------------------------
console.log("#".repeat(20));
// ------------------------------------------------------------
// OUTPUT
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

//------------------------------------
console.log("#".repeat(20));
//------------------------------------

// Assignment 6 : Challenge

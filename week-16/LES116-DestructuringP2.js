/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

console.log(myFriends[3][0]); //Shady
console.log(myFriends[3][2][1]); //Gamal

let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal

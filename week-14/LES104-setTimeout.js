/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

//----------
setTimeout(function () {
  console.log("Msg");
}, 2000);

//----------
setTimeout(sayMsg, 3000);
function sayMsg() {
  console.log(`Iam Message`);
}

//----------
setTimeout(sayNewMsg, 4000, "Osama", 40);
function sayNewMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

//----------
let btn = document.getElementsByTagName("button")[0];
// let btn = document.querySelector("button");
console.log(btn);

btn.onclick = function () {
  clearTimeout(counter);
};

function sayOtherMsg(user, age) {
  console.log(`Iam Other Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayOtherMsg, 5000, "DEVenici", 20);

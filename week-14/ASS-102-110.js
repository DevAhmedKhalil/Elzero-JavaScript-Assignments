// // Assignment 1 :

// let promptMsg = prompt("Print Number From - To", "5-20");
// console.log(promptMsg);

// function promptFun() {
//   let arr = promptMsg.split("-");
//   console.log(arr);

//   let arrFir = parseInt(arr[0]);
//   console.log(`arrFir + 5 = ${arrFir + 5}`);

//   let arrSec = parseInt(arr[1]);
//   console.log(`arrSec + 5 = ${arrSec + 5}`);

//   if (arrFir > arrSec) {
//     for (let i = arrSec; i <= arrFir; i++) {
//       console.log(i);
//     }
//   } else if (arrSec > arrFir) {
//     for (let i = arrFir; i <= arrSec; i++) {
//       console.log(i);
//     }
//   } else {
//     console.log(`Error FirstNum, SecondNum Must Be Different`);
//   }
// }
// promptFun();

//-------------------------------------------------------------
// Assignment 2:

// let div = document.querySelector("div");
// let btn = document.querySelector("button");
// console.log(div);
// console.log(btn);

// btn.onclick = function () {
//   setTimeout(() => {
//     div.style.display = "none";
//   }, 5000);
// };

// // btn.addEventListener("click", () => {
// //   setTimeout(() => {
// //     div.style.display = "none";
// //   }, 5000);
// // });

//-------------------------------------------------------------
// Assignment 3, 4:

// let num = document.querySelector(".num");
// console.log(num);
// console.log(num.textContent);
// console.log(num.innerHTML);
// console.log(num.innerText);
// console.log("#".repeat(30));

// // let promptMessage = prompt("Enter Number > 0", "10");
// let promptMessage = parseInt(prompt("Enter Number > 0", "1"));
// console.log(`promptMessage + 5 = ${promptMessage + 5}`);

// num.innerHTML = promptMessage;

// function countDown() {
//   if ( num.innerHTML === "0") {
//     location.href = "https://elzero.org/";
//   }
//   if (num.innerHTML > 0) {
//     num.innerHTML -= 1;
//   }
// }

// setInterval(countDown, 1000);

//-------------------------------------------------------------
// Assignment 5 :

let divNum = document.getElementsByClassName("num")[0];
console.log(divNum);

let makePrompt = prompt("Enter Positive Number", "10");
console.log(`makePrompt = ${makePrompt + 5}`);

divNum.innerHTML = makePrompt;

setInterval(() => {
  if (divNum.innerHTML > "0") {
    divNum.innerHTML -= 1;
    if (divNum.innerHTML === "5") {
      window.open(
        "https://Elzero.org/",
        "_blank",
        "width=400,height=400,left=200,top=200"
      );
    }
  }
}, 1000);

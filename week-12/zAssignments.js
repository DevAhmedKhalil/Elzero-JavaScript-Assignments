//---------------------------------------------------------------------
// // TASK 1 :

// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementsByName("js")[0]);

// console.log("--------------------------------------");
// console.log(document.querySelector("div"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("[name = 'js']"));

// console.log("--------------------------------------");
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll(".element")[0]);
// console.log(document.querySelectorAll("[name = 'js']")[0]);

// console.log("--------------------------------------");
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[3]);

// console.log("--------------------------------------");
// console.log(document.body.firstElementChild);
// console.log(document.body.firstChild.nextElementSibling);
// console.log(document.body.firstChild.nextSibling.nextSibling.nextSibling);
// console.log(document.body.firstChild.nextElementSibling);

// // // We Adding Things in HTML File
// // console.log("--------------------------------------");
// // console.log(document.body.lastElementChild.previousElementSibling);
// // console.log(document.body.lastChild.previousElementSibling);
// // console.log(document.body.lastChild.previousSibling.previousSibling);
// // console.log(document.body.lastChild.previousElementSibling);

//---------------------------------------------------------------------
// TASK 2

// // Way 1
// for (let i = 0; i < document.images.length; i++) {
//   let myImg = document.images[i];
//   myImg.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   myImg.alt = "Elzero logo";
// }

// // Way 2
// let allImgs = document.querySelectorAll("div img");
// for (let i = 0; i < document.images.length; i++) {
//   allImgs = document.images[i];
//   allImgs.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   allImgs.alt = "Elzero logo";
// }

// Way 3
let allImges = document.querySelectorAll("div img");
allImges.forEach( (img) => {
  img.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  img.alt = "Elzero Logo";
});

//---------------------------------------------------------------------
// TASK 3:

const inputField = document.querySelector("form input");
const result = document.querySelector("form .result");

inputField.addEventListener("input", () => {
  if (inputField.value >= 0) {
    let egyptCurrency = inputField.value * 30.57;
    result.textContent = `{${inputField.value || 0}} USD Dollar = {${
      inputField.value === "" ? 0 : egyptCurrency.valueOf(2)
    }} Egyptian Pound`;
  }
});

//---------------------------------------------------------------------
// //  TASK 4:

let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

let secDivTitle = secondDiv.title;
let secDivText = secondDiv.textContent;

secondDiv.title = firstDiv.title;
firstDiv.title = secDivTitle;

secondDiv.textContent = `${firstDiv.textContent} 2`;
firstDiv.textContent = secDivText;

//---------------------------------------------------------------------
// // TASK 5:

// //  MY Way :)
// let task5Img = document.querySelectorAll(".task5 img");
// for (let t of task5Img) {
//   console.log(t);

//   if (t.hasAttribute("alt")) {
//     t.setAttribute("alt", "Old");
//   } else {
//     t.setAttribute("alt", "Elzero New");
//   }
// }

//---

let allIMGS = document.querySelectorAll(".task5 img");
allIMGS.forEach((imgg) => {
  imgg.hasAttribute("alt") ? (imgg.alt = "Old") : (imgg.alt = "Elzero NEW");
});

//---------------------------------------------------------------------
//---------------------------------------------------------------------

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // IF There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color); //currentTarget === target
    //[1] Remove Active Class From All Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //[2] Add Active Class To Current Target Element
    e.currentTarget.classList.add("active");
    //[3] Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // [4] Change Div BackGround Color
    // exp.style.backgroundColor = e.currentTarget.dataset.color;
    exp.style.backgroundColor = window.localStorage.getItem("color");
  });
});

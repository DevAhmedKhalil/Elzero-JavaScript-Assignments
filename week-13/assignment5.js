// let myDiv = document.querySelector("div");
// let myspan = document.querySelector("span");
// let myP = document.querySelector("p");
// let myArticle = document.querySelector("article");
// let mySection = document.querySelector("section");

// console.log(myDiv);
// console.log(myspan);
// console.log(myP);
// console.log(myArticle);
// console.log(mySection);

// myDiv.onclick = function () {
//   console.log(`This Is Div`);
// };

// myspan.onclick = function () {
//   console.log(`This Is Span`);
// };

// myP.onclick = function () {
//   console.log(`This Is P`);
// };

// myArticle.onclick = function () {
//   console.log(`This Is Article`);
// };

// mySection.onclick = function () {
//   console.log(`This Is Section`);
// };

//--------------------------------------------------

[...document.body.children].forEach((child) => {
  child.onclick = function () {
    console.log(`This Is ${this.tagName}`);
  };
});

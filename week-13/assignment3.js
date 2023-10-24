let removeElement = document.getElementsByTagName("p");
// console.log(removeElement[0]);
removeElement[0].remove();

//----------------------------------
let myElement = document.getElementsByClassName("our-element");
console.log(myElement[0]);

let afterElement = document.createElement("div");
afterElement.className = "end";
afterElement.title = "End Element";
afterElement.setAttribute("data-value", "End");
afterElement.textContent = "End";

console.log(afterElement);
myElement[0].after(afterElement); // Fuck You Just Focus a7a!

let beforeElement = document.createElement("div");
beforeElement.setAttribute("class", "Start");
beforeElement.setAttribute("title", "Start Element");
beforeElement.setAttribute("data-value", "Start");
beforeElement.textContent = "Start";

console.log(beforeElement);
myElement[0].before(beforeElement);

let element = document.getElementsByTagName("div")[0];
console.log(element.lastChild);

//--------------------------------------------------

console.log(document.getElementsByTagName("div")[0].childNodes[4].textContent.trim());

//--------------------------------------------------

console.log(
  document.querySelector("span").nextSibling.nextSibling.nextSibling.textContent.trim()
);

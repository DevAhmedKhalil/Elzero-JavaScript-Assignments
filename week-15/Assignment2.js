let txt1 = document.querySelector("#txt1");
console.log(txt1);
let txt2 = document.querySelector("#txt2");
console.log(txt2);
let txt3 = document.querySelector("#txt3");
console.log(txt3);

let allTxt = document.querySelectorAll("input[type='text']");
console.log(allTxt);

console.log("#".repeat(50));

// check item in txt1
if (window.sessionStorage.getItem("input-txt1")) {
  txt1.value = window.sessionStorage.getItem("input-txt1");
}
// check item in txt2
if (window.sessionStorage.getItem("input-txt2")) {
  txt2.value = window.sessionStorage.getItem("input-txt2");
}
// check item in txt3
if (window.sessionStorage.getItem("input-txt3")) {
  txt3.value = window.sessionStorage.getItem("input-txt3");
}

allTxt.forEach((txt) => {
  txt.onblur = function () {
    // console.log(this.value);
    // console.log(this);
    window.sessionStorage.setItem("input-txt1", txt1.value);
    window.sessionStorage.setItem("input-txt2", txt2.value);
    window.sessionStorage.setItem("input-txt3", txt3.value);
  };
});

// Select Box
let select = document.querySelector("#select");
console.log(select);
console.log(select[(value = 0)]);
console.log(select[(value = 0)].value);
console.log("#".repeat(50));

select.onchange = function () {
  console.log(this.value);
  // Add value of item you choose
  window.sessionStorage.setItem("select-value", this.value);
};

// before onchange fun .. check if there is select-value in sessionStorage
if (window.sessionStorage.getItem("select-value")) {
  select.value = window.sessionStorage.getItem("select-value");
}

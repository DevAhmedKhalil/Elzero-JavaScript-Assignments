// Assignment : 1
// https://elzero.org/javascript-bootcamp-assignments-lesson-from-179-to-188/

function getData() {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "./articles.json");
    myRequest.send();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        let myData = this.responseText;
        let jsData = JSON.parse(myData);
        jsData.length = 5;
        for (let i = 0; i < jsData.length; i++) {
          console.log(jsData[i]);
          let div = document.createElement("div");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");
          document.body.appendChild(div);
          div.appendChild(h3);
          div.appendChild(p);

          h3.textContent = jsData[i].title;
          p.textContent = jsData[i].description;
        }
      } else {
        reject(new Error("Rejected"));
      }
    };
  });
}
getData();

// Assignment : 2

fetch("./articles.json")
  .then((resultData) => {
    let data = resultData.json();
    return data;
  })
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      document.body.appendChild(div);
      div.appendChild(h3);
      div.appendChild(p);
      h3.textContent = data[i].title;
      p.textContent = data[i].description;
    }
  });

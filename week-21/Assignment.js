// // Assignment : 2
// let req = new XMLHttpRequest();

// req.open("GET", "./Articles.json");
// req.send();

// req.onload = function () {
//   if (this.readyState === 4 && this.status == 200) {
//     console.log(this.responseText);
//     console.log("Data Loaded");
//     console.log("__".repeat(10));
//   }
// };

console.log("-------------------------------------------");
//-----------------------------------------------------------
// // Assignment : 3

// let req = new XMLHttpRequest();
// req.open("GET", "./articles.json");
// req.send();

// req.onload = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(typeof this.responseText);
//     console.log(this.responseText);
//     console.log("Data Loaded");
//     console.log("-------------------------------------------");

//     // String => JS Object
//     let mainData = JSON.parse(this.responseText);
//     console.log(typeof mainData);

//     for (let i = 0; i < mainData.lengh; i++) {
//       mainData[i].section = "All";
//       console.log(mainData[i]);
//     }

//     // JS Object => String
//     let updateData = JSON.stringify(mainData);
//     console.log(updateData);
//   }
// };

console.log("-------------------------------------------");
//-----------------------------------------------------------
// Assignment : 4

let req = new XMLHttpRequest();
req.open("GET", "./Articles.json");
req.send();

req.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    console.log(mainData);
    let mainDiv = document.createElement("div");
    mainDiv.id = "data";
    document.body.prepend(mainDiv);
    for (let i = 0; i < mainData.length; i++) {
      let div = document.createElement("div");

      let h2 = document.createElement("h2");
      let h2Text = document.createTextNode(mainData[i].title);

      let pOne = document.createElement("p");
      let pOneText = document.createTextNode(mainData[i].body);

      let pTwo = document.createElement("p");
      let pTwoText = document.createTextNode(`Author: ${mainData[i].author}`);

      let pThree = document.createElement("p");
      let pThreeText = document.createTextNode(
        `Category: ${mainData[i].category}`
      );

      mainDiv.append(div);
      div.append(h2);
      h2.append(h2Text);

      div.append(pOne);
      pOne.append(pOneText);

      div.append(pTwo);
      pTwo.append(pTwoText);

      div.append(pThree);
      pThree.append(pThreeText);
    }
  }
};

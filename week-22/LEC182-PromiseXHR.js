/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest(); // API Request => type string
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)); // string => JSON
      } else {
        reject(Error("No Data Found :("));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => {
    console.log(result[0].name);
    console.log(result[0]);
    console.log(result);
  })
  .catch((rej) => {
    console.log(rej);
  });

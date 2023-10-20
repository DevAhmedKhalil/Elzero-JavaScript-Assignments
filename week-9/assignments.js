function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nameArr = zName.split(" ");
    return `${nameArr[0]} ${nameArr[1].substring(0, 1).toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    // let number = "",
    // 	numbers = "0123456789";
    // for (char of zAge) {
    // 	if (numbers.includes(char)) {
    // 		number += char;
    // 	}
    // }
    let number = "";
    number = parseInt(zAge);
    return `Your Age Is ${number}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//----------------------------------------------------------------------------------------------
// Assignment 2:
console.log("============================");

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
//--------
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//--------

//----------------------------------------------------------------------------------------------
// Assignment 3: Challenge *** Currying function technique
console.log("============================");

const checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Available`;
//     };
//   };
// }

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available

//----------------------------------------------------------------------------------------------
// Assignment 4:
console.log("============================");

function specialMix(...data) {
  let nums = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (isNaN(data[i])) continue;
    else nums += data[i];
  }
  if (nums === 0) return "All Is Strings";
	return nums;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

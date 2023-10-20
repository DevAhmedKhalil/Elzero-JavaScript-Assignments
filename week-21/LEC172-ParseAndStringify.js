/*
JSON
- JSON.parse => convert text data to js object
- JSON.stringify => convert js object to JSON
*/

// Get from server
const myJsonObjectFromServer = '{"Username":"Osama", "Age" : 20}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);
console.log("-".repeat(40));
//--------------------------------
// Convert to JS object

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);
console.log("-".repeat(40));

//--------------------------------
// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
  Date And Time
    - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();
console.log("Start => ", start); // time in this sec

// Operation
for (let i = 0; i < 100000; i++) {
  document.write(`<div>${i}</div>`);
}

// Time End
let end = new Date();
console.log("End => ", end);

// Operation Duration
let duration = end - start;

console.log("Duration => ", duration);

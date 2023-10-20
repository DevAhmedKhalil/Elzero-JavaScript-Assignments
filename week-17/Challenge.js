/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1) * [...n1, ...n2].length); // 210 = 30 * 7

console.log(
  [...[...new Set(n1)]][+new Set(n2).delete(30)] * [...n1, ...n2].length
); // 210 = 30 * 7

console.log(
  [...[...new Set(n1)]][+new Set(n2).delete(30)] * Math.min(...[...new Set(n2)])
); // 300

console.log(
  [...[...new Set(n1)]][+n2.some((e) => e === 10)] *
    Math.min(...[...new Set(n2)])
); // 300

console.log(
  [...[...new Set(n1)]][+new Set(n1).has(10) + +new Set(n1).has(10)] *
    Math.min(...[...new Set(n2)])
); // 200

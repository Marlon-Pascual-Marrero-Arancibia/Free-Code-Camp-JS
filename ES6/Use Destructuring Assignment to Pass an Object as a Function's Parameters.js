/*
Intructions

Use destructuring assignment within the argument to the function half to send only max and min inside the function.

stats should be an object.
half(stats) should be 28.015
Destructuring should be used.
Destructured parameter should be used.
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

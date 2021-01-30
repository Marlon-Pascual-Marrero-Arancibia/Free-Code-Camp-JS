/*
Instructions

Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

testStrict(10) should return "Not Equal"
testStrict(7) should return "Equal"
testStrict("7") should return "Not Equal"
You should use the === operator
*/

// Setup
function testStrict(val) {
  if (val=== 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

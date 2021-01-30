/*
Instructions

Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

testNotEqual(99) should return "Equal"
testNotEqual("99") should return "Equal"
testNotEqual(12) should return "Not Equal"
testNotEqual("12") should return "Not Equal"
testNotEqual("bob") should return "Not Equal"
You should use the != operator
*/

// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

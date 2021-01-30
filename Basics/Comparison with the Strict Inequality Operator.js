/*
Instructions

Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

testStrictNotEqual(17) should return "Equal"
testStrictNotEqual("17") should return "Not Equal"
testStrictNotEqual(12) should return "Not Equal"
testStrictNotEqual("bob") should return "Not Equal"
You should use the !== operator
*/

// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

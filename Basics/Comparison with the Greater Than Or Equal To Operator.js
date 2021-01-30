/*
Instructions

Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

testGreaterOrEqual(0) should return "Less than 10"
testGreaterOrEqual(9) should return "Less than 10"
testGreaterOrEqual(10) should return "10 or Over"
testGreaterOrEqual(11) should return "10 or Over"
testGreaterOrEqual(19) should return "10 or Over"
testGreaterOrEqual(100) should return "20 or Over"
testGreaterOrEqual(21) should return "20 or Over"
You should use the >= operator at least twice
*/

function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

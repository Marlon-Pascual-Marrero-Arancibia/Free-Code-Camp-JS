/*
Instructions

Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"

You should have at least four else statements
You should have at least four if statements
You should have at least one return statement
testSize(0) should return "Tiny"
testSize(4) should return "Tiny"
testSize(5) should return "Small"
testSize(8) should return "Small"
testSize(10) should return "Medium"
testSize(14) should return "Medium"
testSize(15) should return "Large"
testSize(17) should return "Large"
testSize(20) should return "Huge"
testSize(25) should return "Huge"
*/

function testSize(num) {
  // Only change code below this line
  if (num < 5)
  {
    return "Tiny";
  }else if (num < 10) {
    return "Small";
  }else if (num < 15) {
    return "Medium";
  }else if (num < 20) {
    return "Large";
  }else if (num >= 20) {
    return "Huge";
  }
  // Only change code above this line
}

testSize(7);

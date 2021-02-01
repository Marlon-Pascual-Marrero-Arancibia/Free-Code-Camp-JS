/*
Instructions

Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"

switchOfStuff("a") should have a value of "apple"
switchOfStuff("b") should have a value of "bird"
switchOfStuff("c") should have a value of "cat"
switchOfStuff("d") should have a value of "stuff"
switchOfStuff(4) should have a value of "stuff"
You should not use any if or else statements
You should use a default statement
You should have at least 3 break statements
*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
}
  // Only change code above this line
  return answer;
}

switchOfStuff(1);

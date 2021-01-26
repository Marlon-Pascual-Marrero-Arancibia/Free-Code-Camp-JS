/* Instructions
Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var keyword.
myGlobal should be defined
myGlobal should have a value of 10
myGlobal should be declared using the var keyword
oopsGlobal should be a global variable and have a value of 5
*/


// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

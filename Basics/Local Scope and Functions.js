/*
Instructions:

The code should not contain a global myVar variable.
You should add a local myVar variable.

Note: The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.
Declare a local variable myVar inside myLocalScope and run the tests.
*/
function myLocalScope() {

  // Only change code below this line
  var myVar = "Data";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

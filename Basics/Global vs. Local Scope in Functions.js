/*
Instructions:

Add a local variable to myOutfit function to override the value of outerWear with "sweater".
You should not change the value of the global outerWear.
myOutfit should return "sweater".
You should not change the return statement.
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();

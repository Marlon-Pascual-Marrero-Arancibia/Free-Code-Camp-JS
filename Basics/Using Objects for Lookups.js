/*
Instructions

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

phoneticLookup("alpha") should equal "Adams"
phoneticLookup("bravo") should equal "Boston"
phoneticLookup("charlie") should equal "Chicago"
phoneticLookup("delta") should equal "Denver
phoneticLookup("echo") should equal "Easy"
phoneticLookup("foxtrot") should equal "Frank"
phoneticLookup("") should equal undefined
You should not modify the return statement
You should not use case, switch, or if statements
*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  var lookup = {
    alpha : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  }

  result = lookup[val]
/*
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
*/
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

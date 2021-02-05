/*
Instructions

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
If the property is found, return that property's value. If not, return "Not Found".

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return "pony".
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return "kitten".
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return "Not Found".
checkObj({city: "Seattle"}, "city") should return "Seattle".
checkObj({city: "Seattle"}, "district") should return "Not Found".
checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return "Not Found".
*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp))
  {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}

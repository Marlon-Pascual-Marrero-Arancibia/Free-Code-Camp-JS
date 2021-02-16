/*
Intructions

failuresList should be an array containing result failure messages.
failuresList should be equal to the specified output.
Template strings and expression interpolation should be used.
An iterator should be used.
*/

const result = 
{
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) 
{
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) 
  {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}
const failuresList = makeList(result.failure);

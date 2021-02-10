/*
Instructions

Push the odd numbers from 9 through 1 to myArray using a for loop.

You should be using a for loop for this.
You should be using the array method push.
myArray should equal [9,7,5,3,1].
*/

// Setup
var myArray = [];

// Only change code below this line
for (var i=9; i>0; i -= 2)
{
    myArray.push(i);
}

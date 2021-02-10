/*
Instructions

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

total should be declared and initialized to 0.
total should equal 20.
You should use a for loop to iterate through myArr.
You should not attempt to directly assign the value 20 to total.
*/

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i=0; i<myArr.length; i++)
{
    total += myArr[i];
}

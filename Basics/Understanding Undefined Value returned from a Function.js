/*
Instructions 

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

addFive should be a function.
Once both functions have ran, the sum should be equal to 8.
Returned value from addFive should be undefined.
Inside the addFive function, you should add 5 to the sum variable.
*/

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive()
{
  sum += 5;
}

// Only change code above this line

addThree();
addFive();

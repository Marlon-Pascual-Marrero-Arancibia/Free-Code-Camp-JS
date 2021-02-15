/*
Intructions

Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

You should remove the ES5 assignment syntax.
You should use destructuring to create the highToday variable.
You should use destructuring to create the highTomorrow variable.
highToday should be equal to 77 and highTomorrow should be equal to 80.
*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

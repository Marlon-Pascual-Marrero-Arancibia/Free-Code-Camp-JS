/*
Instructions

You will write a card counting function. 
It will receive a card parameter, which can be a number or a string, 
and increment or decrement the global count variable according to the card's value (see table). 
The function will then return a string with the current count and the string Bet if the count is positive, 
or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
Cards Sequence 7, 8, 9 should return 0 Hold
Cards Sequence 10, J, Q, K, A should return -5 Hold
Cards Sequence 3, 7, Q, 8, A should return -1 Hold
Cards Sequence 2, J, 9, 2, 7 should return 1 Bet
Cards Sequence 2, 2, 10 should return 1 Bet
Cards Sequence 3, 2, A, 10, K should return -1 Hold
*/

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card)
  {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  
/*
  switch (count)
  {
    case (count >0):
      return count + " Bet";
    default:
      return count + " Hold";
  }
*/

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

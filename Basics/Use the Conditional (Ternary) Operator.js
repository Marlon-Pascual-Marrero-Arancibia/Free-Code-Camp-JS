/*
Intructions

Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".

checkEqual should use the conditional operator
checkEqual(1, 2) should return "Not Equal"
checkEqual(1, 1) should return "Equal"
checkEqual(1, -1) should return "Not Equal"
*/

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);

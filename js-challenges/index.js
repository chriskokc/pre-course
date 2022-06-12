// Challenges

// 1. Write a function that takes a number and returns true if it is a positive number 
// and false if it is a negative number.
function isNumberPositive(number) {
    if (number > 0) {
        return true;
    }
    return false;
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));
console.log(isNumberPositive(0));  
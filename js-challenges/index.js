// JS Challenges

// 1. Write a function that takes a number and returns true if it is a positive number 
// and false if it is a negative number.
function isNumberPositive(number) {
    if (number > 0) {
        return true;
    }
    return false;
}

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true
console.log(isNumberPositive(0)); // returns false


// 2. Write a function that takes a number of days and converts it into an age.
function convertDaysToAge(numberOfDays) {
    const daysInOneYear = 365;
    let toAge = numberOfDays / daysInOneYear;
    return toAge;
}

console.log(convertDaysToAge(548)); 
console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18

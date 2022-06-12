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

console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18


// 3. Write a function that takes three numbers and returns the largest of the three numbers.
function getLargestNumber(num1, num2, num3) {
    let numberArray = [num1, num2, num3];
    // assign the first number to be the largest number
    let largestNum = numberArray[0];

    // loop through the whole array starting from the second item
    for (let i = 1; i < numberArray.length; i++) {
        // assign a new value to largestNum if a larger number is found
        if (numberArray[i] > largestNum) {
            largestNum = numberArray[i];
        }
    }
    return largestNum;
}

console.log(getLargestNumber(2, 1, 4)); // returns 4
console.log(getLargestNumber(6, 2, 3)); // returns 6
console.log(getLargestNumber(-2, 0, -100)); // returns 0


// 4. Write a function that takes an array of names and returns the last name from the array of names.
function getLastName(listOfNames) {
    if (Array.isArray(listOfNames)) {
        const lastName = listOfNames[listOfNames.length - 1];
        return lastName;
    } else {
        return "The input should be an array of names."
    }
}

console.log(getLastName(["Charlie", "Rob", "Andy"])); // returns "Andy"
console.log(getLastName(["Ash","Stu"])); // returns "Stu"
console.log(getLastName("Ben")); // returns "The input should be an array of names."
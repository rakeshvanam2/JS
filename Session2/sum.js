function sumOfTwoNumbers(a, b) {
    // You only need to implement this function.
    var sumOfTwoNumbers=a+b;
    return sumOfTwoNumbers;
}

if (sumOfTwoNumbers(1,2) !== 3)
    console.log("Test fails: Expected 3 for input a = 1 and b = 2");
else
    console.log("Sample test case for input a = 1 and b = 2 passed!");

module.exports = sumOfTwoNumbers;
function incrementNumber(a) {
    // You only need to implement this function.
    return a+1;
}

if (incrementNumber(2) !== 3)
    console.log("Test fails: Expected 3 for input a = 2");
else
    console.log("Sample test case for input a = 2 passed!");

module.exports = incrementNumber;


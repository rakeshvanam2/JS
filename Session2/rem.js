function remainderOfDivision(a, b)
{
    var remainderOfDivision =a % b;
    return remainderOfDivision;
}
if (remainderOfDivision(10,3) !== 1)
    console.log("Test fails: Expected 1 for input a = 10 and b = 3");
else
    console.log("Sample test case for input a = 10 and b = 3 passed!");
    
module.exports = remainderOfDivision;


  /**
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */

function isEqual(a, b) {
    // You only need to implement this function.
    // CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
    var isEqual = a === b;
    return isEqual;
    // CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS
}

if (isEqual(3,3) !== true)
    console.log("Test fails: Expected true for input a = 3 and b = 3");
else
    console.log("Sample test case for input a = 3 and b = 3 passed!");


module.exports = isEqual;
  
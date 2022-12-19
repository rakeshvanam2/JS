function evenOrOdd(num) {
    // You only need to implement this function.
   if(num% 2 == 0)
   return "Even";
   else if(num<=1)
   return "odd";
}

if (evenOrOdd(2) !== "Even")
    console.log("Test fails: Expected Even for input num = 2");
else
    console.log("Sample test case for input num = 2 passed!");

module.exports = evenOrOdd;


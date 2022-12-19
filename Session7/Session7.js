// var isEvenNumbers= (a,b) => a%2===0&& b%2===0;
//   console.log(isEvenNumbers(2,4));
// console.log(isEvenNumbers(1,3));
// console.log(isEvenNumbers(3,4));
// console.log(isEvenNumbers(6,8));
// console.log(isEvenNumbers(4.5,5.6));
// console.log(303.3*3);
// console.log(Math.trunc(303.3*3));

// console.log(Math.ceil(25/17));

//------Creating functions in JS-----------

//1. Function declaration

// function functionName() {
  
// }

//2. Function Expressions

// var funcName = function(a,b) {
//   console.log('Printing here', a , b);
//   return a+b;
// }

// var result = funcName(3,5);
// console.log(result);

//3. Arrow Functions

// var funcName = (a,b) => {
//   return a+b;
// }

// var funcName = a => console.log(a);

// console.log(typeof funcName);

// const isEvenNumbers = (a,b) => a % 2 === 0 && b % 2 === 0;

// console.log(isEvenNumbers(2,4))
// console.log(isEvenNumbers(3,4))
// console.log(isEvenNumbers(1,5))
// console.log(isEvenNumbers(4,6))

//---------Pass by value------------

// var a = 10;
// var b = a;
// b = b + 10;

// console.log(a);
// console.log(b);

// function add(num){
//   num = num + 10;
//   console.log(num);  // What will be the output?
// }

// var num = 5;
// add(num);
// console.log(num);  

//----------Pass by reference-----------

// var a = [10,20,30];
// var obj = {name: "Crio.Do"}
// var copy_obj = {...obj};
// var b = [...a];
// a[0] = 100;

// console.log(a);
// console.log(b);





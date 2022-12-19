//------------Expressions----------------------------
 // console.log(3 * 3 + 9 * 7 - 12 / 4 * 8 + 9)
 // console.log('JS' / 40)
 // console.log(typeof NaN)

//------------------Relational operators-----------

var a = 5;
 var b = 6;

 console.log(a > b);
 console.log(a <= b);
//>,<,>=,<=,===,!==

 var c = 5;
 console.log(a === c); //true
 console.log(a !== b); //true

var d = '5';
// console.log(a == d);
// console.log(a === d);

//----------Logical operators---------------

// let a = 10;
// let b = 20;

// console.log( a !== b && a > b );
// console.log( a !== b || a > b );

//----------If-else statements--------------

// let age = 18;

// if(age >= 18) {
//   console.log("Congrats, you are eligible to vote");
// } else {
//   console.log("Sorry, you are not eligible to vote");
// }

// let number = 5;

// if(number > 0) {
//   console.log('It is a positive number');
// } else if(number == 0) {
//   console.log("The number is zero");
// } else if(number + 1 > 0) {
//   console.log("Something else");
// }
// else {
//   console.log("The number is negative");
// }

// let age = 19;

// if(age >= 18) {
//   console.log("Can drive");
// } else {
//   console.log("Cannot drive");
// }

//---------------Functions------------------------

//Definition of function

// function printFormatting() {
//   console.log("");
//   console.log("------------------");
//   console.log("");
// }


// console.log(2+2);

// printFormatting();

// console.log(3+5*3);

// printFormatting();

// console.log(2+2);
// printFormatting();

// console.log(3+5*3);

// printFormatting();
// console.log(2+2);
// printFormatting();

// console.log(3+5*3);

// printFormatting();

// console.log(2+2);

// printFormatting();

// console.log(3+5*3);

// function myName() {
//   console.log("Crio.Do");
// }

// myName();
// myName();
// myName();


// function printBankMessage(name, age, address) {
//   console.log("Congratulations, " + name + " " + "you are a new customer to our bank. Your age is " + age + " " + address)
// }

// printBankMessage('Parth',24);
// printBankMessage('Pratik',25);

function multiply(x,y){
  console.log(x*y, 'first');
  alert
}


multiply(5,2);

function multiply(x,y){
  return x*y;
}

let a = multiply(5,2);
console.log(a, 'second');

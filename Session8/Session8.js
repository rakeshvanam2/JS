//-------------------------scope-----------------------------
// var firstName = "Kevin";


// function display(){
//      var lastName = "Obrain";
//      console.log("FullName: " + firstName + " " + lastName );
// }

// display();

// console.log("FullName: " + firstName + " " + lastName );
//----------------------------var---------------------------
// var a =10;  // global variable

// func ();

// function func() {
//   if(a==10)
//     {
//         var x =10;
//        console.log(x);
//     }
//   console.log(x);
// }
// console.log(x);
//-----------------------------
// var a = 10;

// console.log(a);

// if(a==10)
//   {
//       const a = 20;
//       console.log(a);
//   }
// var a = 30;

// console.log(a);


// 

// function parent() {
//   const message = "I am from parent";

//   function child() {
//     console.log(message + " Called from child function ");
//   }
//   child();
// }

// parent();
//--------------------------------------lexical scope--------------------------------------

// var x = 10; // global scope

// var outerFunc = function (){ // outermost function
//     var y = 20;
//     console.log(x + " " + y);

//       var innerFunc= function (){ // innermost function
//         var z = 30;
//         console.log(x + " " + y + " " + z);
//     }
//     innerFunc();
// }
// outerFunc();

// function multiply(storedNum) {
//     return function(num) {
//         return storedNum * num;
//     }
// }

// const multiplyTwo = multiply(2);
// const multiplyThree = multiply(3);
// const multiplyFour = multiply(4);

// console.log(multiplyTwo(5));
// console.log(multiplyThree(6));
// console.log(multiplyFour(7));

//----------Scope--------------------------------

// var a = 5;
// console.log(a);

// function sample() { //Grandparent
//   console.log(a);
//   var b = 2;
//   console.log(b);
//   if(1===1) { //Parent
//     console.log(b);
//     console.log(d);
//     if(2 === 2) { //Child
//       console.log(b);
//       var d = 6;
//     }
//   }
// }

// if(1 === 1) {
//   console.log(a);
//   var c = 5;
//   console.log(c);
// }

// sample();
// console.log(b);
// console.log(c);

// var firstName = "Kevin";


// function display(){
//      var lastName = "Obrain";
//      console.log("FullName: " + firstName + " " + lastName );
// }

// display();

// console.log("FullName: " + firstName + " " + lastName );

// if(1 === 1) {
//   var a = 5;
//   console.log(a);
// }
// console.log(a);

// var a =10;  // global variable

// func ();

// function func() {
//   if(a==10)
//     {
//         var x =10;
//        console.log(x);
//     }
//   console.log(x);
// }
// console.log(x)


// function func() {
//    const a = 20;
//   console.log(a);
// }

// func();
// console.log(a);

//----------Lexical Scope----------------------------

// function parent() {
//   const message = "I am from parent";

//   function child() {
//     const childVar = 'sample';
//     console.log(message + " Called from child function " + " " + childVar);
//   }
//   child();
// }
// // child();

// parent();

// var x = 10; // global scope

// if(1===1){ // outermost function
//     var y = 20;
//     console.log(x + " " + y);

//       if(1===1){ // innermost function
//         var z = 30;
//         console.log(x + " " + y + " " + z);

//         if(1===1) {
//           var a = 40;
//         console.log(x + " " + y + " " + z + " " + a);
          
//         }
        
//     }
// }

// console.log(y);

//----------Hoisting---------------------


// console.log(a);
// var sample;
// var a = 5; //Declaration + assognment in one line

// sample();

// var sample = function() {
//   console.log('Printing something....')
// };

//-------Callback functions------------

// function bikeRepair(funcToExecuteLater){
//    console.log("Working on bike");
//    //once the work is done
//    funcToExecuteLater();
// }

// function callOwner(){
//    console.log("Take back bike");
// }

// bikeRepair(callOwner);

// function sum(n1, n2) {
// console.log(n1 + n2);
// }

// function multiply(n1, n2) {
// console.log(n1 * n2)
// }

// function calculator(num1, num2, operation) {
// console.log(`Calculating on ${num1} and ${num2}`)
// operation(num1, num2);
// }

// calculator(5, 5, sum);
// calculator(5, 5, multiply); // different callback, different answer

//--------------Closures----------------------

// function parentFunction() {
//   Lexical Scope of childFunction() START
//   const message = "Hi! I'm a message from parent";

//   function childFunction() {
//     const childVar = 'sample';
//     console.log(message + " " + childVar);
//   }

//   return childFunction;
//   //Lexical Scope of childFunction() END
}

const ans = parentFunction();







/**
 * @param {string} str
 * @param {number} startInd
 * @param {number} endInd
 * @return {string}
 */


// function getSubstr(str, startInd, endInd){
//   // You only need to implement this function.
//   return (str.substring(startInd) && 1< str.substring(endInd));
// }

// if (getSubstr('abcdefghi', 2, 5) !== 'cde')
//   console.log("Test fails: Expected 'cde' for input str = 'abcdefghi', startInd = 2 and endInd = 5");
// else
//   console.log("Sample test case for input str = 'abcdefghi', startInd = 2 and endInd = 5 passed!");
// function
// module.exports = getSubstr


// var arr=[];
/**
 * @param {number} size
 * @return {number[][]}
 */


// function createMatrixII(size){
//   // You only need to implement this function.;
//   arr=[];
// var num=0;
// for(let i=0;i<size;i++){
//   arr.push([]);
//   num+=i;

// for(let j=0;j<size;j++){

//   arr[i].push(num);
// }
// }
// console.log(arr);
// return arr;
// }

// if (JSON.stringify(createMatrixII(3)) !== JSON.stringify([ [ 0, 1 ], [ 2, 3 ] ]))

//   console.log("Test fails: Expected [ [ 0, 1 ], [ 2, 3 ] ] for input size = 2");
// else
//   console.log("Sample test case for input size = 2 passed!");


// function binary_Search(items, value){
//     let firstIndex  = 0;
//     let lastIndex   = items.length - 1;
//     let middleIndex = Math.floor((lastIndex + firstIndex)/2);

//     while(items[middleIndex] != value && firstIndex < lastIndex)
//     {
//        if (value < items[middleIndex])
//         {
//             lastIndex = middleIndex - 1;
//         } 
//       else if (value > items[middleIndex])
//         {
//             firstIndex = middleIndex + 1;
//         }
//         middleIndex = Math.floor((lastIndex + firstIndex)/2);
//     }

//     return (items[middleIndex] != value) ? -1 : middleIndex;
// }
// const items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items, 1));   
// console.log(binary_Search(items, 5));

// var twoSum = function (nums, target) {
//     // Array to store the result
//    let result = [];
//     // Map to store the difference and its index
//     index_map = new Map();
//     // Loop for each element in the array
//     for (let i = 0; i < nums.length; i++) {
//         let difference = target - nums[i];
//         if (index_map.has(difference)) {
//             result[0] = i;
//             result[1] = index_map.get(difference);
//             break;
//         } else {
//             index_map.set(nums[i], i);
//         }
//     }
//     return result;
// };
//for (let x = 0; x < 3; x++) console.log( x );
// function display(){
//     var a = 10;
// }
// console.log(a);
// function work(){
//   var x = 1
//   var x = 2;
//   console.log(x);
// // }
// work();
// function work(){
//   let x = 1
//   let x = 2;
//   console.log(x);
// }
// work();
// 
// display();

// function display() {
//    console.log('Will this work!');
// }
// funcExp();

// var funcExp = function display() {
//     console.log('Will this work!');
// // }



//  function greet(){
//      return function() {
//         console.log('Inner function');
//      }
//  }
//  const returnVal = greet();
//  returnVal();


// function func(){
//    var b = 20;   // scope within the function
//    console.log("b is accessible within the function:", b);
// }
// func();



// function greet(message) {
//     message();
// }
// function message() {
//     console.log('Hello World');
// }

// greet(message);

// function createBase(baseNumber) {
//   return function(N) {
//     return baseNumber + N;
//   }
// }

// var addSix = createBase(6);
// console.log(addSix(10));

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

// const parts = "Hi how are you doing today".split(" ");
// console.log(parts);
// const parts2 = "Hi how are you doing today".split();
// console.log(parts2);
// let arr = ['a','b','c','a','d','e','c','f','c'];

// console.log( arr.includes('a') );
// console.log( arr.includes('b', 3) );
// var arr = ["Hi", "how", "are", "you", "doing", "today"];
// const stringFromParts = arr.join("-");
// console.log(stringFromParts);
// const stringFromParts2 = arr.join();
// console.log(stringFromParts2);

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ];

console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);

console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[1][2]);

console.log(arr[2][0]);
console.log(arr[2][1]);
console.log(arr[2][2]);














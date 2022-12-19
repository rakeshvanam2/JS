// const array = [
//   {
//     name: "Kevi",
//     age: 25,
//   },
//   {
//     name: "Arnold",
//     age: 6,
//   },
//   {
//     name: "Sheila",
//     age: 56,
//   },
// ];
// array.sort((a,b) => a.age -b.age);

// let result=[];
// array.forEach(element=>result.push(element.name));
// console.log(result);

// const arr= [ 1,2,3,4.5,6 ];
//         const circleArea=arr.map(element=>element*element*Math.PI);
// console.log(circleArea);
//---For-each loop--------------------

// const arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var result = arr.forEach((xyz, index, array) => console.log(xyz, index, array));
// console.log(result);

//--------Find method-----------------------

// const data = [
//   { _id: "1", name: "Vivek" },
//   { _id: "2", name: "Neha" },
//   { _id: "3", name: "Satya" },
//   { _id: "4", name: "Amit" },
//   { _id: "4", name: "Amit" },
//   { _id: "4", name: "Amit" },
//   { _id: "4", name: "Amit" },
//   { _id: "4", name: "Amit" },
//   { _id: "4", name: "Amit" },
// ];

// const result = data.find((element) => element._id === "4");
// console.log(result);

//------------Sort method----------------

// const arr = [31,24, 1, 100, 101, 1000, 34];
// // arr.sort((a,b) => a - b);
// arr.sort((a,b) => b - a);
// console.log(arr);

// const array = [
//   {
//     name: "Kevi",
//     age: 25,
//   },
//   {
//     name: "Arnold",
//     age: 6,
//   },
//   {
//     name: "Sheila",
//     age: 56,
//   },
// ];

// //Step 1 : 

// array.sort((a,b) => a.age - b.age);
// console.log(array);
// let result = [];
// array.forEach(element => result.push(element.name));
// console.log(result);

// const arr = [10,30,50,6];
// const newArray = [];
// arr.forEach((element) => newArray.push(element * 2));
// console.log(newArray);

// const newArrayWithMap = arr.map(element => element * 2);
// console.log(newArrayWithMap);


// const newArrayWithFilter = arr.filter(element => element % 3 === 0);
// console.log(newArrayWithFilter);

// const arr = [1,3,4.5,6];
// const newArr = arr.map(element => element * element * Math.PI);
// console.log(newArr);

//--------------Reduce method--------------

// const arr = [10,13,14,15,16];
// let initialValue = 0;

// const result = arr.reduce((accumulator, element, index,array) => accumulator = accumulator + element);
// console.log(result);

// const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];
// const str = arr.reduce((accumulator, currentValue) => {
//   console.log(accumulator);
//   return accumulator + currentValue + ' ';
// });//Initial Value
// console.log(str); 

//------------Splice method--------------

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const result = arr.splice(2,3,12,13,14);
// console.log(arr);
// console.log(result);

//---------------Slice method-----------------
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const newArr = arr.slice(2);
// console.log(newArr);
// console.log(arr);

// let arr = [ [1,2],3,4 ];

// //Push an empty array at the end:
// arr.push([]);
// console.log(arr);
//let arr = [ [1,2],[3,4] ];
//let basicArray = [1,2,3,4,5];
// arr.push([]);
// console.log(arr);

// arr[2].push(5);
// console.log(arr);

// arr.shift();
//console.log(arr);
 //for(let i = 0; i < arr.length; i++) {
//for(let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
 //  }
// }
function findSeatNumber(arr1, arr2) {
//var friend='';
// for(let i=0;i<arr1.length;i++){
 // if(arr1[i]==="Mridula"){
 //   friend=arr1[i-1];
 //   for(let j=0;j<arr2.length;j++){
 //     if(friend===arr2[i]){
  //      return arr2.indexOf(arr2[i]);
   //   }else{
    //    return -1;
   //   }

  //  }

//  }
//}
// return arr2.indexOf(arr1[arr1.indexOf("Mridula")-1]);
// }
// if (findSeatNumber(["Raghu", "Goli", "Farhat", "Mridula", "Rahul"], ["Mridula", "Raghu", "Goli", "Farhat"]) !== 3)
//   console.log("Test fails: Expected 3 for input arr1 = ['Raghu', 'Goli', 'Farhat', 'Mridula', 'Rahul'] and arr2 = ['Mridula', 'Raghu', 'Goli', 'Farhat']");
// else
//   console.log("Sample test case for input arr1 = ['Raghu', 'Goli', 'Farhat', 'Mridula', 'Rahul'], and arr2 = ['Mridula', 'Raghu', 'Goli', 'Farhat'] passed!");
  //-------Sort and reverse method----------------------

// const arr = ['Cricket', 'Badminton','Badninton', 'Swimming', 'Table Tennis', 'Hockey', 'Long Jump', 'cricket'];



// // arr.sort();
// arr.reverse();
// console.log(arr);

// const arr1 = [1,2,11,10,101,110,120,1001,100];
// arr1.sort(function (a,b) {
//   return a - b;
// });
// console.log(arr1);

//in-place method
//ASCII
//A,B,C,D,....Z
//65,66,67,... 90
//a,b,c,d
//97,98,99.... ,122

//------------Includes method-----------------

// const arr = ['Cricket', 'Badminton','Badninton', 'Swimming', 'Table Tennis', 'Hockey', 'Long Jump', 'cricket'];

// console.log(arr.includes('Swimming'));

//---------Arrays & Strings conversion-------------

// let str = 'Crio.Do is the best place to learn';

//Split method --> String to Array conversion

// let arr = str.split(' ');
// console.log(arr);

//Join method --> Array to String conversion

// let updatedStr = arr.join('-->');
// console.log(updatedStr)
//-----------------------------------------------------

// const arr = ['Cricket', 'Badminton', 'Swimming', 'Table Tennis', 'Hockey', 'Long Jump', 'Chess','Ludo'];

// const arr = [['Cricket','Badminton', 'Lawn Tennis','Swimming'], ['Chess','Ludo',['Playing Cards']]];

// console.log(arr[1][2][0]);

// let y = [['a','b'],['c','d']];
// console.log(y[0][0]);
// console.log(y[0][1]);
// console.log(y[1][0]);
// console.log(y[1][1]);

//a,b

// let matrix = [[0,1,2],[3,4,5],[6,7,8]];
// console.log(matrix[0][0])
// console.log(matrix[0][1])
// console.log(matrix[0][2])
// console.log(matrix[1][0])
// console.log(matrix[1][1])
// console.log(matrix[1][2])
// console.log(matrix[2][0])
// console.log(matrix[2][1])
// console.log(matrix[2][2])

let arr = [ [1,2,[3]],[3,4] ];
let basicArray = [1,2,3,4,5];
// arr.push([]);
// console.log(arr);

// arr[2].push(5);
// console.log(arr);

// arr.shift();
// console.log(arr);
// for(let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// function printArray(arr) {
//   for(let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr[i].length; j++) {
//     console.log(`[${i},${j}] = ${arr[i][j]}`);
//   }
// }
// }

// printArray([[0, 1], [2, 3], [4, 5]])

//--------Javascript Objects--------------------

//1. Create new objects

const obj = {
  name: 'Crio.Do',
  department: 'Tech learning',
  headquarters: 'Bengaluru',
  'founded year': 2017,
  bestPlaceToLearn: true,
  courses: ['JS','MERN','Java', 'QA Automation'],
  objProp: {studentsInJS: 100, studentsInMERN: 100},
  sampleFunc: function() {return 'Stroring function here'}
}

console.log(obj.courses[2])
console.log(obj['courses'][2])
console.log(obj.objProp.studentsInJS);
console.log(obj['founded year'])
console.log(obj.objProp['studentsInJS'])
console.log(obj.hasOwnProperty('courses'))
delete obj['founded year'];
delete obj.objProp;
console.log(obj);

// const newObj = {};
// newObj.name = 'Nishchay';
// newObj.designation = 'Crio Mentor';

// console.log(newObj);

// newObj.name = 'Crio.Do';
// console.log(newObj);

//Accessing object values

//1. Dot notation

// console.log(newObj.designation);

//2. Square Bracket notation












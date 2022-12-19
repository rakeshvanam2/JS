// const ourStorage = {
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//   }
//  };
// console.log(ourStorage.cabinet);

// ourStorage["top drawer"]"folder1"["new file"];
// const userDetails = {
//     name: {
//       first: "Kapil",
//       last: "Raghuwanshi",
//     },
//     jobTitle: "JS Instructor @ Crio.do",
//     email: {
//       work: "kapil@epsilon.com",
//       personal: "",
//     },
//     status: {
//       isOnline: true,
//       isVerified: false,
//     }
//   userDetails.status.isProMember["false"];


// const vechile= [{
//   color='red',
//   type='hatchback',
//   capacity:'5 seaters'
//   }] ,
  

// }
  
var student = [

  {
      name: "Kevin",
      std_id: 10,
      marks: 25
  },
  {
     name: "Austin",
     std_id: 20,
     marks: 30
  },
  {
      name: "Robin",
      std_id: 30,
      marks: 20
  }

]
let mmarks=0;
let max="";
for(let i=0;i<student;i++)
  {
    (max==0);
  }

// const ourStorage = {
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//   }
//  };

// console.log(ourStorage.cabinet);
// console.log(ourStorage.cabinet["top drawer"]);

// ourStorage.cabinet["top drawer"].folder1 = "some other value";
// ourStorage.cabinet["top drawer"].folder2 = "some other value for folder 2";

// console.log(ourStorage.cabinet["top drawer"]);

// const userDetails = {
//     name: {
//       first: "Kapil",
//       last: "Raghuwanshi",
//     },
//     jobTitle: "JS Instructor @ Crio.do",
//     email: {
//       work: "kapil@epsilon.com",
//       personal: "",
//     },
//     status: {
//       isOnline: true,
//       isVerified: false,
//     }
//   }

// userDetails.name.first = 'Crio';
// userDetails.name.last = 'Do';
// userDetails.status.isProMember = false;

//--------Destructuring-------------

// const obj = {
//   firstName: "Ravi",
//   lastName: 'Jain',
//   age: 20
// }
// const name = obj.name;
// const age = obj.age;

// const {firstName: ,lastName,age} = obj;

// console.log(fullName);
// console.log(varAge);

// const arr = [1,2,3,4,5];
// console.log(typeof obj);
// console.log(typeof arr);
// console.log(Array.isArray(obj));

//0:1
//1:2
//2:3
//3:4
//4:5
//----------Array Destructuring----------------
// const arr = [1,2,3,4,5];

// const [random,second,c] = arr;
// // console.log(a);
// // console.log(b);
// console.log(c);

//----Array of Objects--------


// const schoolData = [{
//     name: 'Nishchay jain',
//     rollNo: 1,
//     fathersName: '',
//     mothersName: '',
//     address: ''
//   },{
//     name: 'Manash',
//     rollNo: 2,
//     fathersName: '',
//     mothersName: '',
//     address: ''
//   },{
//     name: 'Parth',
//     rollNo: 3,
//     fathersName: '',
//     mothersName: '',
//     address: ''
//   }];
// const studentTotalMarks = [324,450,495]

// for(let i = 0; i < schoolData.length; i++) {
//   schoolData[i].halfYearlyMarks = `${studentTotalMarks[i]/500 * 100}%`;
// }

// console.log(schoolData)

// const vehicle = [{
//   color: 'red',
//   type: 'Hatchback',
//   capacity: '5 seater'
// },{
//   color: 'green',
//   type: 'Sedan',
//   capacity: '5 seater'
// },
// {
//   color: 'white',
//   type: 'SUV',
//   capacity: '7 seater'
// }]

// var student = [

//   {
//       name: "Kevin",
//       std_id: 10
//   },
//   {
//      name: "Austin",
//      std_id: 20
//   },
//   {
//       name: "Robin",
//       std_id: 30
//   }

// ]

// console.log(student[2].std_id)

// var student = [

//   {
//       name: "Kevin",
//       std_id: 10,
//       marks: 25
//   },
//   {
//      name: "Austin",
//      std_id: 20,
//      marks: 30
//   },
//   {
//       name: "Robin",
//       std_id: 30,
//       marks: 20
//   }

// ];

// let maximumMarks = 0;
// let maxMarksName = '';

// for(let i = 0; i < student.length; i++) {
//   if(student[i].marks > maximumMarks) {
//     maximumMarks = student[i].marks;//25,30
//     maxMarksName = student[i].name; //Kevin,Austin
//   }
// }
// console.log(maxMarksName);

// console.log(0/-1);
// const roundDigits = Math.round((909.9000 * 10)/10);
// console.log(roundDigits);
// console.log(202.2*2);
// console.log(303.3*3);

// let a = 0;
// var b;
// console.log(a/b);

// let i = 1;

// while(i <= 10) {
//   console.log(i);
//   i++;
// }
// let age = 68;
// if (age >= 18 && age <= 70) {
//   console.log("You can drive the car");
// } else {
//   console.log("You can't drive the car");
// }

// using conditional statements ( short hand property)
// let result = (age>=18 && age<=70)?console.log("You can drive the car"):console.log("You can't drive the car");

// functions

// function addNum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// console.log("The addition of the two numbers is :", addNum(2, 3));
// console.log("The addition of the two numbers is :", addNum(10, 1000));

// const addNum = (a, b) => {
//   return a + b;
// };

// console.log("Your answer is :", addNum(52, 5));

// Arrays

// let arr = ["Raj", "Shubham", "Gautham", "Sagar"];
// console.log(arr[3]);
// console.log(arr.push("Riddhi"));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr.join());
// console.log(arr.shift());
// console.log(arr.toString());
// console.log(arr);
// console.log(arr.reverse());

// let arr = ["Raj", "Shubham", "Gautham", "Sagar"];
// map, filter, reduce

// let result = arr.map((empName, index) => {
//   //   console.log("The Employee name is :", element, "and its index is", index);
//   console.log(`The Employee name is : ${empName}, and its index is ${index}`);
// });

// let result = arr.map((empName,id) => console.log(`The Employee name is : ${empName}, and its id is ${id}`))

// Filter method

// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let ans = numArray.filter((value, id) => {
//   return value % 2 == 0;
// });

// console.log(ans);

// Reduce method

let numArray = [1, 2, 3, 4, 5, 6];
let result = numArray.reduce((prevValue, currValue) => {
  return prevValue + currValue;
});
console.log(result);

// closure
// function outerFun() {
//   let ram = 4;
//   let outerVar = "I am from outer function";
//   console.log("outerFun ke andar se aa raha hu" + ram);
//   function innerFun() {
//     console.log(outerVar);
//     console.log("innerFun ke andar se aa raha hu" + ram);
//   }

//   return innerFun;
// }
// console.log("outerFun ke bahar se print ho raha hu" + ram);

// let closure = outerFun();
// closure();

// function counter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log("Count : " + count);
//   }

//   function decrement() {
//     count--;
//     console.log("Count : " + count);
//   }

//   return {
//     increment,
//     decrement,
//   };
// }

// let counterObj = counter();
// counterObj.increment();
// counterObj.increment();
// counterObj.decrement();

// Promises

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched Successfully");
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => console.log(data)).catch((error) => console.log(error));

// async await

// async function getData() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   console.log(data);
// }

// const getData = async () => {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   console.log(data);
// };

// getData();

// module.exports = getData;

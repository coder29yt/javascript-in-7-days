// 1) Spread Operator

// const arr = [10, 15, 21, 42];
// const secondArr = arr;
// secondArr.pop();
// console.log(secondArr,arr);

// const arr = [10, 15, 21, 42];
// const arry2 = [...arr];
// arry2.pop();
// console.log(arr, arry2);

// [...arry2] -> jab apko arr ki copy kara ho
// {...obj2} -> jab apko object ko copy karna ho

// 2) Window
// console.log(window.location);

// 3) Heap memory

// 2 + 3;
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// 4) Execution context

// function greet() {
//   var a = 19;

//   function hello() {
//     var b = 71;
//   }
// }

// 5) Lexical environment
// function greet() {
//   var a = 19;

//   function hello() {
//     var b = 71;
//     console.log(b,a);
//   }

//   hello();
// }
// greet();

// 6) Truthy and falsy
// falsy - 0 false undefined null NaN document.all

// if (-1) {
//   console.log("Hi");
// } else {
//   console.log("Hello");
// }

// 7) localstorage

const message = "Guys, do subscribe to my channel";
// localStorage.setItem("msg", message);
// const value = localStorage.getItem("msg");
// console.log(value);

sessionStorage.setItem("msg", message);

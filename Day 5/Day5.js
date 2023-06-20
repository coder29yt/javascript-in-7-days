// Asynchronous programming

// setTimeout(() => {
//   alert("Dost 2 sec ke baad aa gaya");
// }, 2000);

// setInterval(() => {
//   console.log("Hey subscribe to my channel");
// }, 1000);

// Project : clock

// let heading = document.getElementById("clock");

// setInterval(() => {
//   let d = new Date();
//   heading.innerHTML =
//     d.getHours() +
//     ":" +
//     d.getMinutes() +
//     ":" +
//     d.getSeconds() +
//     ":" +
//     d.getMilliseconds();
// }, 10);

// let counter = 0;
// // ek baar code execute karne ke liye setTimeout
// setTimeout(() => {
//   console.log("Hello! timer se code execute kiya gaya hai");
// }, 2000);
// // regular interals par code execute karne ke liye setInterval
// let interval = setInterval(() => {
//   counter++;
//   console.log("Counter ki value" + counter);

//   if (counter == 5) {
//     clearInterval(interval);
//     console.log("Interval band ho gaya, to subscribe kar lo");
//   }
// }, 1000);

// AJAX

let XMLHttpRequest = require('xhr2')

let xhr = new XMLHttpRequest();
xhr.open("GET","https://dummyjson.com/products");
xhr.send();

xhr.onload = () => {
  if (xhr.status == 200) {
    console.log("Response mil gaya");
    console.log(xhr.responseText);
  } else {
    console.log("Eror " + xhr.status);
  }
};

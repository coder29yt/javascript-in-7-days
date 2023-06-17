// String

// const string1 = "Hello world";
// const string2 = 'Hello world';
// const string3 = `Hello world`;

// console.log(string1.length);
// console.log(string1.slice(0, 3));
// console.log(string1.substr(2, 5));
// console.log(string1.substring(2, 5));

// const slicedString = string1.slice(0, 3);
// console.log(string1.replace("world","subscribers"))
// console.log(string1.replace("o", "i"));
// console.log(string1.replaceAll("o", "i"));

// console.log(string1.toUpperCase());
// console.log(string1.toLowerCase());

// const str1 = "Hello ";
// const str2 = "world";
// // const concatString = str1.concat(",", str2);
// const concatString = str1 + str2;
// console.log(concatString);

// const string1 = "   Hello world  ";
// console.log(string1);
// let trimmedstring = string1.trim();
// console.log(trimmedstring);
// let trimmedstring = string1.trimStart();
// console.log(trimmedstring);
// let trimmedstring = string1.trimEnd();
// console.log(trimmedstring);

// const newStr = "Ramesh";
// console.log(newStr.charAt(3));
// console.log(newStr.charCodeAt(3));

// DOM Manipulation

const heading = document.getElementById("heading");
// heading.innerHTML = "Subscribe to coder29 for such more ";

const button = document.querySelectorAll("button");
const selectedBtn = button[2];
const selectedBtn2 = button[1];

selectedBtn.addEventListener("click", () => {
  heading.innerHTML = "We are programmers";
});
selectedBtn2.addEventListener("mouseover", () => {
  heading.style.textAlign = "center";
});

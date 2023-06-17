// let person = {
//   name: "Raj",
//   age: 19,
//   profession: "Full Stack Developer",
// };
// console.log(person.name);
// console.log(person.profession);

// Creating and using objects

// 1) object literals

// let person = {
//   name: "Raj",
//   age: 19,
//   profession: "Full Stack Developer",
// };

// 2) constructor function

// function Person(name, age, profession) {
//   this.name = name;
//   this.age = age;
//   this.profession = profession;
// }

// let person1 = new Person("Raj", 19, "MERN Stack Developer");
// let Person2 = new Person("Mohit", 29, "Python Developer");

// console.log(person1.age);
// console.log(Person2.name, Person2.age);

// Inheritance and prototypes

// 1) prototype

// let animal = {
//   type: "mamal",
//   sound: "roar",
// };

// let lion = Object.create(animal);
// lion.name = "Simba";

// console.log(lion.name, lion.type);

// 2) Inheritance using constructor function

// function Animal(type, sound) {
//   this.type = type;
//   this.sound = sound;
// }

// function Lion(name, type, sound) {
//   Animal.call(this, type, sound);
//   this.name = name;
// }

// let newLion = new Lion("Simba", "Mamal", "Roar");
// let newLion1 = new Lion("Rocky", "Mamal", "Roar");

// console.log(newLion1.name);
// console.log(newLion1.type);
// console.log(newLion1.sound);

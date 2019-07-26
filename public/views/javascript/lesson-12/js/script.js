'use strict';

// toString and valueOf

// cases
// string convertion
// numeric convertion
// boolean convertion

// boolean convertion
// if ([]) {
//   console.log(true);
// }
// if (function () {}) {
//   console.log(true);
// }

// string convertion (toString), any primitive
// var book = {
//   name: '1984',
//   pages: 347
// };
// console.log(String(book));

// var book = {
//   name: '1984',
//   pages: 347,
//   toString: function () {
//     return this.name;
//   },
//   toString: function () {
//     return 100;
//   }
// };
// console.log(String(book));

// console.log(String([10, 20, 30]));
// console.log(String(new Date()));
// console.log(String(function () {}));

// Numeric convertion (if valueOf else toString)
// var book = {
//   name: '1984',
//   pages: 347
// };
// var book = {
//   name: '1984',
//   pages: 347,
//   valueOf: function () {
//     return this.pages;
//   },
//   toString: function () {
//     return this.name;
//   }
// };

// console.log(+book);
// console.log(String(book));

// Every object has valueOf, but return the object itself, that is why toString used mostly.
// Date exception
// console.log(String(new Date()));
// console.log(+(new Date()));

// var example = {
//   valueOf: function () {
//     return 1;
//   }
// };
// console.log(example == true);

// var example1 = {
//   valueOf: function () {
//     return 5;
//   }
// };
// var example2 = {
//   valueOf: function () {
//     return 40;
//   }
// };
// console.log(example1 + example2);

// Date exception
// console.log(new Date() + '');

// primitives like object
// var bool = new Boolean(false);
// console.log(!!bool);
// console.log(bool);

// if (bool) {
//   console.log(true);
// }
// if (bool.valueOf()) {
//   console.log(true);
// }

// console.log(String([]) == '');
// console.log(Number([]) == 0);
// console.log(Number([0]) == 0);
// console.log(Number([1]) == 1);
// console.log(String([1, 2]) == '1,2');


// constructors, new keyword
// function User (name, age) {
//   // this = {}
//   this.name = name;
//   this.age = age;

//   this.sayHi = function () {
//     console.log('Hi, my name is ' + this.name);
//   }

//   // return this;
//   return this;
// }
// var user = new User('Ilidan', 847);
// // algorith: create a new empty object -> set link of the object to "this" -> execute the function -> return "this";
// console.log(user);

// var user = {
//   name: 'Ilidan',
//   age: 847,
//   sayHi: function () {
//     console.log('Hi, my name is ' + this.name);
//   }
// };

// return another value
// function User (name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHi = function () {
//     console.log('Hi, my name is ' + this.name);
//   }

//   // return 4;
//   return {key: 'value'};
// }
// console.log(new User());

// call without parentheses
// function Example () {
//   return this;
// }
// new Example;
// new Example();


// super hard task
// transform to object and group by the same year, month and date "year-month-date"
// const getData = (initialId = 0) => {
//   const result = [];

//   for (let i = initialId, j = 1; i < initialId + 20; i += 1, j += 1) {
//     const id = i;
//     const amount = Math.abs(j * 3 * 1.5);

//     const rate = Math.random();

//     const d = Math.floor(12 + Math.random() * (14 + 1 - 12));
//     const m = Math.floor(4 + Math.random() * (5 + 1 - 4));
//     const y = 2018;

//     const time = new Date(y, m, d).getTime();

//     result.push({
//       id,
//       amount,
//       rate,
//       time,
//     });
//   }

//   return result;
// };
// function funcName (arg1, arg2) {
  
// }

// var resultExample = {
//   '2018-4-14': [
//     {
//       id: 0,
//       amount: 4,
//       rate: 2,
//       time: 1526245200000
//     },
//     {
//       id: 1,
//       amount: 8,
//       rate: 6,
//       time: 1526245200000
//     }
//   ],
//   '2018-6-12': [
//     {
//       id: 3,
//       amount: 5,
//       rate: 1,
//       time: 1531342800000
//     }
//   ],
//   '2018-7-13': [
//     {
//       id: 4,
//       amount: 11,
//       rate: 9,
//       time: 1534107600000
//     },
//     {
//       id: 5,
//       amount: 6,
//       rate: 7,
//       time: 1534107600000
//     }
//   ]
// };

// 'use strict';

// array sort
// let nums = [5, 1, 7, 12, 9, 4, 2];
// nums.sort();
// console.log(nums);

// a compare b > 0 -> b, a; a compare b < 0 -> a, b; a compare b === 0 -> stay the same
// function sortNumsASC (a, b) {
//   return a - b;
// }
// nums.sort(sortNumsASC);
// console.log(nums);

// function sortNumsDESC (a, b) {
//   return b - a;
// }
// nums.sort(sortNumsDESC);
// console.log(nums);

// let strings = ['Apple', 'Orange', 'Banana', 'Lemon'];
// // strings.sort();
// // console.log(strings);
// strings.sort(function (a, b) {
//   return b > a ? 1 : b < a ? -1 : 0;
// });
// console.log(strings);

// const users = [
//   {
//     name: 'Aragorn',
//     age: 120
//   },
//   {
//     name: 'Arven',
//     age: 340
//   },
//   {
//     name: 'Elrond',
//     age: 2800
//   },
//   {
//     name: 'Gendolf',
//     age: 2350
//   }
// ];

// function sortByField (arr, field, dir) {
//   arr.sort(function (a, b) {
//     if (dir === 'DESC') {
//       return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0;
//     }

//     return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;

//     // return a[field] - b[field];
//   });
// }
// sortByField(users, 'age');
// sortByField(users, 'name', 'DESC');
// console.log(users);


// arguments
// function printNames () {
//   for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
//   }
// }
// printNames('Name 1', 'Name 2', 'Name 3');

// function greetAll (phrase) {
//   for (let i = 1; i < arguments.length; i += 1) {
//     console.log(phrase + ' ' + arguments[i]);
//   }
// }
// greetAll('Hi', 'Name 1', 'Name 2', 'Name 3');

// function test () {
//   console.log(arguments.callee);
//   console.log(arguments.callee.caller);
// }
// function wrapper () {
//   test();
// }
// wrapper();

// function sum (a, b) {
//   console.log(a + b);
//   console.log(arguments);
// }
// sum(5, 8, 4, 9, 11);


// Date
// let date = new Date();
// console.log(typeof date);
// to primitive


// let date = new Date(1000 * 60 * 60 * 24 * 7);
// console.log(date);

// let date = new Date(2000, 9, 10, 16, 41, 8, 125);
// console.log(date);

// get date components
// let date = new Date(2000, 9, 10, 16, 41, 8, 125);
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getDay());

// console.log(date.getUTCHours());

// console.log(date.getTime());

// console.log(date.getTimezoneOffset());

// set date components
// let date = new Date();
// date.setFullYear(year: number, month?: number, date?: number);
// date.setMonth(month: number, date?: number);
// date.setDate(date: number);
// date.setHours(hours: number, min?: number, sec?: number, ms?: number);
// date.setMinutes(min: number, sec?: number, ms?: number);
// date.setSeconds(sec: number, ms?: number);
// date.setMilliseconds(ms: number);
// date.setTime(time: number);
// console.log(date);
// date.setHours(12);
// console.log(date);
// date.setUTCHours(12);
// console.log(date);

// date autocorrection
// let date = new Date(2008, 2, 38);
// console.log(date);
// let date = new Date();
// date.setDate(date.getDate() + 4);
// console.log(date);
// date.setDate(0);
// console.log(date);
// date.setDate(-4);
// console.log(date);

// number and string conversion
// let date = new Date();
// console.log(date + 40);
// console.log(+date + 40);

// performace
// console.log(performance.now());

// date now
// console.log(Date.now());

// date formatting
// let date = new Date(2000, 9, 10, 8, 41, 8, 125);
// console.log(date.toLocaleString('ru'));
// console.log(date.toLocaleString('en'));
// let settings = {
//   year: 'numeric',
//   month: 'long',
//   day: '2-digit',
//   weekday: 'long',
//   timezone: 'UTC',
//   hour: '2-digit',
//   hour12: false,
//   minute: 'numeric',
//   second: 'numeric'
// };
// // console.log(date.toLocaleString('en', settings));
// console.log(date.toLocaleString('en', settings));
// console.log(date.toDateString());
// console.log(date.toTimeString());

// date parse (YYYY-MM-DD T HH:mm:ss.sss Z )
// let date = Date.parse('2018-06-07:23:19.000+04:00');
// console.log(new Date(date));
// console.log(new Date(date).getUTCHours());

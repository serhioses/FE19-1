'use strict';

// Array (list)
// Arrays are ordered collections of data with access by index

// creation
// var wrongArray1 = new Object([]);
// var wrongArray2 = new Array();
// var wrongArray3 = new Array(5);
// var properArray = [];

// creation with data
// var languages = ['Russian', 'Ukrainian', 'English'];
// console.log(languages);
// console.log(languages[0]);
// console.log(languages[1]);
// console.log(languages[2]);

// languages[3] = 'German';
// languages[0] = 'Italian';
// console.log(languages);

// length
// var languages = ['Russian', 'Ukrainian', 'English'];
// console.log(languages.length);
// languages.length = 10;
// console.log(languages.length);
// languages.length = 0;
// console.log(languages);

// var countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// push/pop
// var last = countries.pop();
// console.log(last, countries.length, countries);
// countries.push('Romania', 'England');
// console.log(countries);

// shift, unshift
// var first = countries.shift();
// console.log(first, countries.length, countries);
// countries.unshift('Romania', 'England');
// console.log(countries);

// any prop
// var arr = ['Name', 10, null, {value: 11}, [1, 2], function () {}];
// console.log(arr);
// arr[18] = true;
// console.log(arr);
// console.log(15 in arr);
// console.log(18 in arr);
// console.log(arr.length);
// what is length

// named props
// arr.key = 'value';
// console.log(arr);
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }
// Do not use it!!!
// for (let key in arr) {
//   console.log(arr[key]);
// }

// Difference between push/pop and shift/unshift

// more about iteration
// var countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];

// for (let i = 0; i < countries.length; i += 1) {
//   console.log(countries[i]);
// }

// let i = 0;
// while (i < countries.length) {
//   console.log(countries[i]);

//   i += 1;
// }

// let country;
// while (country = countries.pop()) {
//   console.log(country);
// }
// while (countries.length) {
//   console.log(countries.pop());
// }

// Multidimensional arrays
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let row = 0; row < matrix.length; row += 1) {
//   for (let col = 0; col < matrix[row].length; col += 1) {
//     console.log(matrix[row][col]);
//   }
// }


// Array methods

// split(separator, limit)
// let countries = 'Ukraine, Hungary, Czech Republic, Belgium';
// let countriesArray = countries.split(', ');
// // let countriesArray = countries.split('');
// // let countriesArray = countries.split();
// console.log(countriesArray);

// join(separator)
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// // let countriesString = countries.join(' @@ ');
// // let countriesString = countries.join('');
// let countriesString = countries.join();
// console.log(countriesString);

// delete (do not use)
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// delete countries[0];
// console.log(countries, countries.length);

// slice(start [, end])
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// console.log(countries.slice());
// console.log(countries.slice(1));
// console.log(countries.slice(1, 3));
// console.log(countries.slice(-1));
// console.log(countries.slice(-2));
// console.log(countries.slice(-3, -2));

// reverse
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// console.log(countries.reverse());

// splice(start [, deleteCount, ...items])
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// countries.splice();
// console.log(countries);
// console.log(countries.splice(1));
// console.log(countries);
// console.log(countries.splice(1, 1));
// console.log(countries);
// console.log(countries.splice(1, 2, 'Romania', 'England'));
// console.log(countries);
// console.log(countries.splice(-2, 1, 'Romania', 'England'));
// console.log(countries);
// console.log(countries.splice(0, 0, 'Romania', 'England'));
// console.log(countries.splice(countries.length, 0, 'Romania', 'England'));
// console.log(countries);

// concat(...arguments)
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// countries = countries.concat('Romania', 'England');
// console.log(countries);
// countries = countries.concat(['Romania', 'England', [1, 2]], 'Croatia');
// console.log(countries);

// indexOf, lastIndexOf
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// console.log(countries.indexOf('Hun'));
// console.log(countries.indexOf('Hungary'));


// Object.keys(obj)
// let countries = ['Ukraine', 'Hungary', 'Czech Republic', 'Belgium'];
// let keys = Object.keys(countries);
// for (let i = 0; i < keys.length; i += 1) {
//   console.log(countries[keys[i]]);
// }
// let country = {
//   name: 'Belgium',
//   area: 200,
//   capital: 'Brussels'
// };
// let keys = Object.keys(country);
// for (let i = 0; i < keys.length; i += 1) {
//   console.log(country[keys[i]]);
// }

// Additional task 1
function every (arr, cb) {
  // your solution...
}

// Additional task 2
function some (arr, cb) {
  // your solution...
}

// Additional task 3
function filter (arr, cb) {
  // your solution...
}

// Additional task 4
function map (arr, cb) {
  // your solution...
}

// Additional task 5
function reduce (arr, cb, initialValue) {
  // your solution...
}

// Additional task 6
function reduceRight (arr, cb, initialValue) {
  // your solution...
}


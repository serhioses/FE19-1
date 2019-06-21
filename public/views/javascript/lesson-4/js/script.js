'use strict';

// loops (for almost the same action repeated many times)

// while loop
// while (condition) { run body }
// var i = 0;

// while (i < 10) {
//   console.log(i);

//   i += 1;
// }

// var i = 9;

// while (i >= 0) {
//   console.log(i);

//   i -= 1;
// }

// infinite loop while (true) { run body }

// do while do { run body } while (condition);
// var i = 0;

// do {
//   console.log(i);

//   i += 1;
// } while (i < 10);

// var i = 9;

// do {
//   console.log(i);

//   i -= 1;
// } while (i >= 0);


// for loop for (start; condition; step) { run body }
// var i;

// for (i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// var i = 0;
// for (; i < 10; i += 1) {
//   console.log(i);
// }

// var i = 0;
// for (; i < 10; ) {
//   console.log(i);

//   i += 1;
// }

// var i = 9;
// for (; i; ) {
//   console.log(i);

//   i -= 1;
// }

// infinite for loop for (; ;) ;

// possibility to skip curly braces

// difference between while and for

// prevent infinite loop
// let start = Date.now();

// while (true) {
//   // code...

//   if (Date.now() - start > 1000) {
//     throw new Error('Infinite loop.');
//   }
// }

// let start = Date.now();
// var i = 0;

// while (i < 10) {
//   console.log(i);

//   i += 1;

//   if (Date.now() - start > 1000) {
//     throw new Error('Infinite loop.');
//   }
// }

// break

// let sum = 0;

// while (true) {
//   let num = prompt('Enter a number', '');

//   num = Number(num);

//   if (!num) {
//     break;
//   }

//   sum += num;
// }
// console.log('Sum is ' + sum);

// for (let i = 1; i <= 100; i += 1) {
//   if (i % 5 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// don't use with ternary operator

// nested loops and labels
// outer: for (let i = 1; i < 10; i += 1) {
//   for (let j = 1; j < 10; j += 1) {
//     if (i * j > 40) {
//       break outer;
//     }
//     console.log('' + i + ' * ' + j + ' = ' + (i * j));
//   }
// }


// switch (always identical comparison)
// switch (expression) {
//   case value1: {
//     // code...

//     [break]
//   }
//   case value2: {
//     // code...

//     [break]
//   }
//   default: {
//     // code...

//     [break]
//   }
// }


// functions (prevent code duplication, encapsulate logic)

// function declaration
// function functionName (param1, param2, ...) { function body }  funcName(arg1, arg2, ...)
// function printMessage () {
//   let intro = 'Some intro text.';
//   let primaryPart = 'Primary part with a lot of important information.';
//   let end = 'The end.'

//   console.log(intro + ' ' + primaryPart + ' ' + end);
// }
// for (let i = 0; i < 5; i += 1) {
//   printMessage();
//   console.log('-----------');
// }

// function parameters
// function sum (a, b) {
//   console.log(a + b);
//   debugger;
// }
// sum(1, 5);

// parameters by default
// function printError (code, message) {
//   if (!message) {
//     message = 'Error';
//   }

//   console.log('The error code is ' + code + '.', message);
// }
// printError(400, 'Some error message');
// printError(500);

// function greet (name, message) {
//   if (!name) {
//     name = 'Anonymous';
//   }
//   if (!message) {
//     message = '';
//   }

//   console.log('Hi ' + name + '!', message);
// }
// greet();
// greet('Valera', 'You are welcome!');

// return statement
// function sum (a, b) {
//   return a + b;
// }

// let result = sum(8, 15);
// console.log(result);
// console.log(sum(2, 4));

// function printName (name, times) {
//   if (!times || typeof times !== 'number') {
//     return;
//   }

//   if (!name) {
//     name = 'Anonymous';
//   }

//   for (let i = 0; i < times; i += 1) {
//     console.log(i + 1 + '. ' + name);
//   }

//   return true;
// }
// printName('Vasya', 5);

// function checkPermission () {
//   let isAdmin = confirm('Are you an administrator?');

//   if (!isAdmin) {
//     return false;
//   }

//   let answer = prompt('Enter secret phrase.', '');

//   if (answer !== 'Soup') {
//     return false;
//   }

//   return true;
// }
// console.log(checkPermission());

// function name, function call

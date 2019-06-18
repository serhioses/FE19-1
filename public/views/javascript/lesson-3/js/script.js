'use strict';

// if always converts to boolean
// if (condition) {
//   body
// }
// let score = 10;
// if (score >= 10) {
//   console.log('You win!');
// }
// if (score >= 10)
//   console.log('You win!');

// if (score >= 10) console.log('You win!');

// falsy values are false, null, undefined, 0, -0, NaN, ''
// let falsyValue = 0;
// if (falsyValue) {
//   console.log('Never executed.');
// }

// if else
// let isAdmin = true;
// if (isAdmin) {
//   console.log('You have an access to everything.');
// } else {
//   console.log('Bye bye!');
// }

// if else if else
// let color = 'brown';
// if (color === 'green') {
//   console.log('Ok, you can come in.');
// } else if (color === 'orange') {
//   console.log('I have to check you before you come in.');
// } else if (color === 'red') {
//   console.log('Stop. I cannot pass you.');
// } else {
//   console.log('Plese, specify a color.');
// }

// when to nest
// var a = 0, b = 1, c = 3;
// if (a === 1) {
//   console.log('a is 1');
// } else {
//   if (b === 2) {
//     console.log('b is 2');
//   } else {
//     if (c === 3) {
//       console.log('c is 3');
//     }
//   }
// }

// if (a === 1) {
//   console.log('a is 1');
// } else if (b === 2) {
//   console.log('b is 2');
// } else if (c === 3) {
//   console.log('c is 3');
// }

// var val = false;
// if (val) {
//   console.log('test null');
// }


// ternary ?
// (condition) ? true : false
// (condition) ? true : condition2 ? true2 : condition3 ? true3 : conditionN ? trueN : false;
// let isHomeworkDone = 1;
// let score = 100;
// let message = (score > 100) ? 'You can drink the water.' : 'Stop! Don\'t touch the water.';
// let message = 'You can drink the water.';
// console.log(message);
// var a = 100;
// console.log(a === 10 ? true : false);
// if (a === 10) {
//   console.log('test');
// } else {
//   console.log('test 2');
// }

// multiple ternaries
let xOWinner = true;
// let message = xOWinner === 'X' ? 'The winner is X' : xOWinner === 'O' ? 'The winner is O' : 'Draw';
let message = (xOWinner === 'X') ? 'The winner is X' : (xOWinner === 'O') ? 'The winner is O' : !xOWinner ? null : 'Draw';
console.log(message);
// let message;
// if (xOWinner === 'X') {
//   message = 'The winner is X';
// } else if (xOWinner === 'O') {
//   message = 'The winner is O';
// } else {
//   message = 'Draw';
// }
// console.log(message);

// let n = -4;
// n = n < 10 ? '0' + n : n;
// if (n >= 1) {
//   if (n < 10) {
//     n = '0' + n;
//   }
// }
// console.log(n);


// logical operators && || ! (&& || return the value iteself)
// console.log(1 || 0);
// console.log(true || false);
// console.log(null || 10);
// console.log(NaN || 'string');

// let a = 12, b = 30;
// if (a > 10 || b < 25) { // true
//   console.log('message');
// }

// let userName = '';
// let result = userName || null;
// let result = userName ? userName : 'Anonymous';
// console.log(result);
// let x;
// 0 || (x = 5);
// console.log(x);
// let a = 12;
// if (a === 10 || a === 12 || a === 14 || a < 10 || a === undefined || a >= 15) { // true
//   console.log('test');
// }

// let y = (5 && 10);
// console.log(y);

// console.log(1 && 0);
// console.log(true && false);
// console.log(null && 10);
// console.log(NaN && 'string');

// let a = 11, b = 25;
// if (a > 10 && b < 25) {
//   console.log('message');
// }

// console.log(('null' || 0) && undefined);

// function logUserName (name) {
//   console.log(name);
// }
// let val = 1;
// val && logUserName('Ivan');

// converts to boolean and returns the opposite value
// console.log(!1);
// console.log(!false);
// console.log(!NaN);

// types converting for primitives

// string
// console.log(String(1));
// console.log(1 .toString());
// console.log(undefined + '1');
// console.log('8' + 'undefined');
// console.log(String(false));

// number (math, different types). Exceptions === !===
// console.log(+undefined);
// console.log(Number('8.047'));
// console.log(typeof Number(undefined));
// console.log(Number(null));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(''));
// console.log(Number('string'));
// console.log(Number(' 10 '));

// comparison of different types is a numeric convertion
// console.log('' == false);
// console.log('1' == true);
// console.log('' == (null || 0));

// logical convertion
// console.log(Boolean(false));
// console.log(Boolean('0'));
// console.log(Boolean(function () {}));
// console.log(!!1);
// console.log(!!undefined);
// console.log(!![]);




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

'use strict';

// global object (window)

// var color = 'indigo';
// console.log(window.color);

// window.color = 'indigo';
// console.log(window.color);

// order of initialization
// function declaration, var, execution


// Closures

// LexicalEnvironment
// initialization, execution, garbage collector
// function example (a) {
//   // LexicalEnvironment = { sum: function, a: 8, b: undefined }
//   var b = 10;
//   // LexicalEnvironment = { sum: function, a: 8, b: 10 }

//   sum(a, b);
//   function sum (a, b) {
//     // LexicalEnvironment = { a: 8, b: 10 }
//     console.log(a + b);
//   }
// }
// example(8);

// Access to external variables; function [[Scope]]
// [[Scope]] never changes
// var color = 'indigo';

// function getColor () {
//   // debugger;
//   return color;

//   // [[Scope]] = window
// }
// console.log(getColor());

// Always cuttenr value
// var user = {
//   name: 'Serg',
//   score: 14
// };

// function printScore () {
//   console.log(user.score);
// }

// printScore();
// printScore();

// user.score = 18;
// printScore();

// Nested functions
// function printEvenNums (nums) {
//   for (let i = 0; i < nums.length; i += 1) {
//     if (isEven(i)) {
//       console.log(nums[i]);
//     }
//   }

//   function isEven(i) {
//     return nums[i] % 2 === 0;

//     // [[Scope]]
//   }
// }
// printEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function return
// function makeCounter () {
//   // LexicalEnvironment = { currentCount: undefined }
//   var currentCount = 0;
//   // LexicalEnvironment = { currentCount: 0 }

//   return function () {
//     // LexicalEnvironment = {  }
//     currentCount += 1;

//     return currentCount;

//     // [[Scope]] is new every time makeCounter() is called { currentCount: 0 }
//   };
// }
// var counter1 = makeCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// var counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());

// function property (static)
// function makeCounter () {
//   function counter () {
//     counter.currentCount += 1;

//     return counter.currentCount;
//   }
//   counter.currentCount = 0;

//   return counter;
// }
// var counter1 = makeCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// var counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());

// function factorial (n) {
//   if (n > 1) {
//     if (!factorial[n]) {
//       // console.log(0);
//       factorial[n] = n * factorial(n - 1);
//     }

//     // return factorial[n];
//     // return n * factorial(n - 1);
//   }

//   factorial[1] = 1;

//   return factorial[n];
//   // return 1;
// }
// console.log(factorial(5));
// console.log(factorial(5));
// console.log(factorial(3));
// console.dir(factorial);

// Summary
// Closure is a function with all external variables
// LexicalEnvironment - local system object with current variables (every time is new when a function is called)
// [[Scope]] - constant link to an external LexicalEnvironment (defines only at the moment of function declaration)
// First, look at current LexicalEnvironment, if no value found look at the external LexicalEnvironment. Repeat the algorith until global object reached

// Exception for [[Scope]]
// var color = 'indigo';

// function example () {
//   var color = 'biege';

//   var f = new Function('', 'console.log(color);');

//   return f;
// }
// example()();


// Object counter
// function makeCounter (initialValue) {
//   var currentCount = initialValue || 0;

//   return {
//     inc: function (val) {
//       currentCount += val || 1;

//       return currentCount;
//     },
//     dec: function (val) {
//       currentCount -= val || 1;

//       return currentCount;
//     },
//     get: function () {
//       return currentCount;
//     },
//     set: function (val) {
//       currentCount = val;
//     },
//     reset: function () {
//       currentCount = initialValue || 0;
//     }
//   };
// }

// var counter1 = makeCounter(10);
// console.log(counter1.get());
// console.log(counter1.inc());
// console.log(counter1.inc());
// console.log(counter1.dec());
// console.log(counter1.dec(4));
// counter1.set(40);
// console.log(counter1.get());
// counter1.reset();
// console.log(counter1.get());

// var counter2 = makeCounter();
// console.log(counter2.inc());
// console.log(counter2.inc());
// console.log(counter2.inc());
// console.log(counter2.inc());

// console.log(counter1.get(), counter2.get());

// function makeCounter (initialValue) {
//   var currentCount = initialValue || 0;

//   function counter (val, action) {
//     if (action === '-') {
//       currentCount -= val || 1;
//     } else {
//       currentCount += val || 1;
//     }

//     return currentCount;
//   }

//   counter.get = function () {
//     return currentCount;
//   };
//   counter.set = function (val) {
//     currentCount = val;
//   };
//   counter.reset = function () {
//     currentCount = initialValue || 0;
//   }

//   return counter;
// }

// var counter1 = makeCounter(10);
// console.log(counter1.get());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1(null, '-'));
// console.log(counter1(4, '-'));
// counter1.set(40);
// console.log(counter1.get());
// counter1.reset();
// console.log(counter1.get());

// var counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// console.log(counter1.get(), counter2.get());

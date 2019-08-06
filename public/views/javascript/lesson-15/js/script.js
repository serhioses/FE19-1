'use strict';

// bind

// context loss
// var player = {
//   name: 'player 1',
//   health: 47,
//   distance: 100,
//   x: 8,
//   moveRight: function () {
//     this.x += 1;
//   },
//   moveLeft: function () {
//     this.x -= 1;
//   },
//   getDistanceLeft: function () {
//     return this.distance - this.x;
//   }
// }

// function printDistanceLeft (getDistance) {
//   console.log('The distance left is ' + getDistance());
// }

// printDistanceLeft(player.getDistanceLeft);

// 1 - function wrapper
// printDistanceLeft(function () {
//   return player.getDistanceLeft();
// });

// 2 - custom bind function
// function bind (func, context) {
//   return function () {
//     return func.apply(context, arguments);
//   };
// }

// function example () {
//   console.log(this.name);
// }
// var exampleWrapper = bind(example, {name: 'Vasilisa'}); // a new function
// exampleWrapper();

// printDistanceLeft(bind(player.getDistanceLeft, player));

// arguments support example
// function sum (a, b) {
//   return a + b + this.FEE;
// }
// var s = bind(sum, {FEE: 10});
// console.log(s(8, 11));

// 3 - built-in method bind
// func.bind(content [, arg1, arg2, ...])

// printDistanceLeft(player.getDistanceLeft.bind(player));

// After bind we can't change the context


// Currying
// function mul (a, b) {
//   return a * b;
// }
// var double = mul.bind(null, 2);
// console.log(double(7));
// console.log(double(9));

// var tripple = mul.bind(null, 3);
// console.log(tripple(7));
// console.log(tripple(9));

// function calcPriceWithFee (fee, price) {
//   return price * fee;
// }

// var calcPriceWithFeeRetail = calcPriceWithFee.bind(null, 1.27);
// var calcPriceWithFeeWholesale = calcPriceWithFee.bind(null, 1.04);

// console.log(calcPriceWithFeeRetail(120));
// console.log(calcPriceWithFeeRetail(140));

// console.log(calcPriceWithFeeWholesale(80));
// console.log(calcPriceWithFeeWholesale(60));

// one more example
// function greet (phrase) {
//   return phrase || 'Hello! ';
// }
// function getFullName () {
//   return this.firstName + ' ' + this.lastName;
// }

// function greeting (greetPhrase, name) {
//   return greetPhrase + name;
// }

// var anonymousGreeting = greeting.bind(null, greet('What\'s up! '));
// var name = getFullName.call({firstName: 'Ivan', lastName: 'Lastochkin'});
// console.log(anonymousGreeting(name));

// crossbrowser bind
// function bind (func, context) {
//   var curryiedArgs = Array.prototype.slice.call(arguments, 2);

//   return function () {
//     var currentArgs = Array.prototype.slice.call(arguments);
//     var allArgs = curryiedArgs.concat(currentArgs);

//     return func.apply(context, allArgs);
//   };
// }

// function mul (a, b) {
//   return a * b;
// }

// var double = bind(mul, null, 2);
// console.log(double(5));
// console.log(double(45));

// ES6
// const bind = (func, context, ...curryiedArgs) => {
//   return (...currentArgs) => func.apply(context, [...curryiedArgs, ...currentArgs]);
// };


// Decorators
// bind is a decorator

// var countFuncCalls = function countFuncCalls (func, id) {
//   countFuncCalls.getCounter = function (id) {
//     return countFuncCalls.store[id];
//   };

//   countFuncCalls.store = {};

//   return function () {
//     if (!countFuncCalls.store[id]) {
//       countFuncCalls.store[id] = 0;
//     }

//     countFuncCalls.store[id] += 1;

//     return func.apply(this, arguments);
//   };
// }

// function sum (a, b) {
//   console.log('sum', a + b);
// }
// function mul (a, b) {
//   console.log('mul', a * b);
// }
// var sumDecorator = countFuncCalls(sum, 'sum');
// var mulDecorator = countFuncCalls(mul, 'mul');

// sumDecorator(2, 3);
// sumDecorator(2, 3);
// sumDecorator(2, 3);

// mulDecorator(8, 4)
// mulDecorator(8, 4)
// mulDecorator(8, 4)
// mulDecorator(8, 4)
// mulDecorator(8, 4);

// console.log('------------------');
// console.log(countFuncCalls.store);
// console.log(countFuncCalls.getCounter('sum'));
// console.log(countFuncCalls.getCounter('mul'));

// var loggedIn = true;

// function isLogged () {
//   return loggedIn === true;
// }

// var navigation = {
//   currentPage: 0,
//   goTo: function (page) {
//     this.currentPage = page;
//   }
// };

// function isLoggedDecorator (func /* , context */) {
//   return function () {
//     if (isLogged()) {
//       return func.apply(context, arguments);
//     }

//     return 'Not logged in.';
//   };
// }

// var goToWrapper = isLoggedDecorator(navigation.goTo /* , navigation*/);

// goToWrapper(4);

'use strict';

// Object.keys(obj) - enumerable, Object.getOwnPropertyNames(obj) - all own

// Object.getOwnPropertyDescriptor(obj, prop)



// var obj = {
//   key: 40
// };

// cannot add new properties
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));
// obj.name = 'Object name';
// obj.key = 1;
// console.log(obj);

// cannot add and delete properties, configurable: false
// Object.seal(obj);
// console.log(Object.isSealed(obj));
// delete obj.key;
// obj.name = 'Object name';
// obj.key = 1;
// console.log(obj);

// cannot add, delete and rewrite properties, configurable: false, writable: false
// Object.freeze(obj);
// console.log(Object.isFrozen(obj));
// obj.name = 'Object name';
// delete obj.key;
// obj.key = 1;
// console.log(obj);


// Static and fabric methods (when they are not binded to an instance)
// Static properties
// function User (name) {
//   this.name = name || User.DEFAULT_NAME;

//   User.callsCount += 1;

//   return this;
// }
// User.callsCount = 0;
// User.DEFAULT_NAME = 'Anonymous';

// var users = [];
// users.push(new User('Valera'));
// users.push(new User());
// console.log(users[0]);
// console.log(users[1]);
// users = null;
// new User();
// console.log(User.callsCount);

// Static methods
// function User (data) {
//   this.name = data.name || User.DEFAULT_NAME;
//   this.salary = data.salary;
//   this.birthday = data.birthday;

//   User.callsCount += 1;

//   return this;
// }
// User.callsCount = 0;
// User.DEFAULT_NAME = 'Anonymous';

// User.compareByProp = function (propName) {
//   var result = null;

//   for (let i = 1; i < arguments.length; i += 1) {
//     if (!result || arguments[i][propName] > result[propName]) {
//       result = arguments[i];
//     }
//   }

//   return result;
// };
// User.calcAge = function (birthday) {
//   var now = new Date();
//   var yearDiff = now.getFullYear() - birthday.getFullYear();

//   if (now.getMonth() > birthday.getMonth()) {
//     return yearDiff;
//   }
//   if (now.getMonth() === birthday.getMonth() && now.getDate() >= birthday.getDate()) {
//     return yearDiff;
//   }

//   return yearDiff - 1;
// };

// var valera = new User({
//   name: 'Valera',
//   salary: 600,
//   birthday: new Date(1984, 4)
// });
// var vasya = new User({
//   name: 'Vasya',
//   salary: 740,
//   birthday: new Date(1981, 8)
// });
// var anonymous = new User({
//   salary: 2800,
//   birthday: new Date(1924, 11)
// });

// console.log(User.calcAge(valera.birthday));
// console.log(User.calcAge(vasya.birthday));
// console.log(User.calcAge(anonymous.birthday));

// console.log(User.compareByProp('salary', valera, vasya, anonymous));
// console.log(User.compareByProp('birthday', valera, vasya, anonymous));

// console.log(User.calcAge(new Date(1956, 7)));
// console.log(User.compareByProp('key', {key: 8}, {key: 11}, {key: 9}));

// Fabric static methods
// function Photograph (src) {
//   this._id = Math.random();

//   this.src = src || null;

//   let name = 'Photograph ' + this._id;

//   this.getSrc = function () {
//     return this.src;
//   };

//   return this;
// }
// function Photograph () {
//   this._id = Math.random();

//   let name = 'Photograph ' + this._id;

//   this.getSrc = function () {
//     return this.src;
//   };

//   return this;
// }

// Photograph.createFromSource = function (src) {
//   var photograph = new Photograph();

//   photograph.src = src;

//   return photograph;
// };
// Photograph.createBlank = function () {
//   var photograph = new Photograph();

//   photograph.src = null;

//   return photograph;
// };

// var photographFromSource = Photograph.createFromSource('some source');
// console.log(photographFromSource.getSrc());

// var blankPhotograph = Photograph.createBlank();
// console.log(blankPhotograph.getSrc());


// Explicite set of this, "call" and "apply" methods
// call
// func.call(context, arg1, arg2, ...)

// function toggleFavorite () {
//   this.isFavorite = !this.isFavorite;
// }

// function Photograph (src) {
//   this.src = src;

//   this.isFavorite = false;

//   return this;
// }
// var photo1 = new Photograph();
// var photo2 = new Photograph();

// toggleFavorite.call(photo1);
// console.log(photo1);
// console.log(photo2);
// toggleFavorite.call(photo2);
// console.log(photo1);
// console.log(photo2);

// function sayHi (phrase) {
//   return phrase + this.name;
// }

// var user = {
//   name: 'Vasil'
// };
// console.log(sayHi.call(user, 'Hi there, my name is '));

// Method borrowing
// function sum () {
//   var total = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }

//   return total;
// }
// console.log(sum(1, 8, 6));

// don't do it
// function sum () {
//   arguments.reduce = [].reduce;

//   return arguments.reduce(function (acc, next) {
//     return acc + next;
//   });
// }
// console.log(sum(1, 8, 6));

// better
// function sum () {
//   return [].reduce.call(arguments, function (acc, next) {
//     return acc + next;
//   });
// }
// console.log(sum(1, 8, 6));

// the best
// function sum () {
//   return Array.prototype.reduce.call(arguments, function (acc, next) {
//     return acc + next;
//   });
// }
// console.log(sum(1, 8, 6));

// prosto kosmos
// function sum () {
//   return Array.prototype.reduce.call(arguments, (acc, next) => acc + next);
// }
// console.log(sum(1, 8, 6));

// Apply
// func.apply(context, [arg1, arg2, ...])
// function maxFromArray (arr) {
//   return Math.max.apply(null, arr);
// }
// console.log(maxFromArray([11, 4, 8, 19, 10, 5]));


// Colors task
// Wrire a function which returns an array which at zero index holds the closest color name and at the first index its percentage closeness to the given color.
// example: getClosestColor(['#dce0ea', '#5865bd', '#6953ed', '#503d9b', '#6028e8', '#33158a', '#0040c0', '#230070', '#1c0058', '#525262', '#ebeffa', '#e1e6f2', '#7caae7', '#6497df', '#3897f9', '#3d73e1', '#245cc5', '#1b59e0', '#366ed5', '#007ab9', '#3923a4', '#0850d7', '#2eafb3', '#0142bb', '#4e36dd', '#00379d', '#000679', '#4a01ea', '#170049'], '#4269ac');
// This call should return ['#5865bd', 87.39858906525573]

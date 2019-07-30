'use strict';

// function Photograph (width, height) {
//   var name;

//   this._id = Math.random();
//   this.width = width;
//   this.height = height;

//   name = 'Photograph ' + this._id;

//   this.getProportion = function () {
//     return this.width / this.height;
//   };
//   this.getOrientation = function () {
//     return this.width > this.height ? 'landscape' : this.height > this.width ? 'portrait' : 'square';
//   };
//   this.getName = function () {
//     return name;
//   };

//   return this;
// }

// var ph1 = new Photograph(768, 424);
// var ph2 = new Photograph(640, 246);

// console.log(ph1.getProportion());
// console.log(ph2.getOrientation());
// console.log(ph2.getName());


// new function
// var module = new function () {
//   var version = '1.2.6';

//   this.a = 50;
//   this.b = 75;

//   this.getVersion = function () {
//     return version;
//   };
//   this.method1 = function () {
//     return this.a + this.b;
//   };
// };
// console.log(module);
// console.log(module.method1());


// Descriptors, getters, setters

// Object.defineProperty(obj, prop, descriptor)
// obj - an object which takes a property
// prop - property name
// descriptor - an object, which describes the behavior of a property

// descriptor may contain
// value - a value of a property (undefined)
// writable - a property can be changed if true (false)
// configurable - a property can be deleted, and can be edited by another Object.defineProperty
// enumerable - whether a property is visible inside "for in" loop and accessible in Object.keys() (false)
// get - a function which return a property value (undefined)
// set - a function which sets a property value (undefined)

// Cannot use "get/set" with "value" or "writable" at the same time

// var house = {
//   floors: 2
// };
// house.material = 'brick';

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: true,
//   configurable: true,
//   enumerable: true
// });
// console.log(house.floors);
// console.log(house.material);
// console.log(house.windows);

// house.windows = 18;
// console.log(house.windows);
// for (let key in house) {
//   console.log(key);
// }
// delete house.windows;
// console.log('windows' in house);

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: false,
//   configurable: true,
//   enumerable: true
// });

// house.windows = 18;
// console.log(house.windows);

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: false,
//   configurable: false,
//   enumerable: true
// });

// delete house.windows;
// Object.defineProperty(house, 'windows', {
//   value: 10
// });
// console.log('windows' in house);

// Object.defineProperty(house, 'windows', {
//   value: 13,
//   writable: false,
//   configurable: false,
//   enumerable: false
// });

// for (let key in house) {
//   console.log(key);
// }

// var user = {
//   firstName: 'Valera',
//   lastName: 'Krutoy'
// };
// Object.defineProperty(user, 'fullName', {
//   get: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function (value) {
//     var values = value.split(' ');

//     this.firstName = values[0];
//     this.lastName = values[1];
//   }
// });
// console.log(user.fullName);
// // delete user.fullName;
// user.fullName = 'Vasya Bistriy';
// console.log(user.fullName);

// get/set in literals
// var user = {
//   firstName: 'Valera',
//   lastName: 'Krutoy',
//   get fullName () {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set fullName (value) {
//     var values = value.split(' ');

//     this.firstName = values[0];
//     this.lastName = values[1];
//   }
// };

// console.log(user.fullName);
// user.fullName = 'Vasya Bistriy2';
// console.log(user.fullName);


// Object.defineProperties(obj, descriptors)
// var dog = {};
// Object.defineProperties(dog, {
//   name: {
//     value: 'Muhtar'
//   },
//   breed: {
//     get: function () {
//       return 'dachshund';
//     }
//   }
// });
// console.log(dog.name);
// console.log(dog.breed);

// Object.keys(obj) - enumerable, Object.getOwnPropertyNames(obj) - all own

// Object.getOwnPropertyDescriptor(obj, prop)

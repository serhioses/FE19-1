'use strict';

// prototypal OOP
// __proto__ (non standart property in the past)

// var drink = {
//   volume: 2,
// };
// var cola = {
//   bubbles: true,
//   __proto__: drink,
// };

// cola.__proto__ = drink;
// console.log(cola.volume);
// console.log(drink.volume);
// console.log(drink.bubbles);

// cola.volume = 3;
// console.log(cola.volume);
// console.log(drink.volume);


// hasOwnProperty anf for in loop
// var building = {
//   material: 'bricks',
// };
// var house = {
//   rooms: 6,
//   __proto__: building,
// };
// for (let key in house) {
//   console.log(house[key]);
// }
// console.log(building.hasOwnProperty('rooms'));
// console.log(house.hasOwnProperty('rooms'));

// console.log(building.hasOwnProperty('material'));
// console.log(house.hasOwnProperty('material'));

// difference between hasOwnProperty an in operator
// console.log(house.hasOwnProperty('material'));
// console.log('material' in house);

// iterate only own props
// for (let key in house) {
//   if (!house.hasOwnProperty(key)) {
//     continue;
//   }

//   console.log(key, house[key]);
// }
// for (let key in house) {
//   if (house.hasOwnProperty(key)) {
//     console.log(key, house[key]);
//   }
// }

// Object.keys(house).forEach(function (key) {
//   console.log(key, house[key]);
// });


// Object.create(null)
// var obj = {};
// var obj = Object.create(null);
// console.log(obj);
// console.log(obj.toString);
// console.log(obj.valueOf);

// Object.getPrototypeOf(obj)
// Object.setPrototypeOf(obj, proto);
// var arr = [];
// console.log(Object.getPrototypeOf(arr));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)));

// var drink = {
//   volume: 2,
// };
// var cola = {
//   bubbles: true,
// };
// Object.setPrototypeOf(cola, drink);
// console.log(Object.getPrototypeOf(cola));
// console.log(cola.volume);

// Summary
// inheritance with __proro__
// set proto
// read and write difference, delete
// only one prototype

// F.prototype
// wrong, don't do it!
// var camera = {
//   enabled: false,
//   enable: function () {
//     this.enabled = true;
//   },
//   disable: function () {
//     this.enabled = false;
//   },
//   takePhoto: function () {
//     console.log('A photograph has been taken.');
//   }
// };

// function Nikon (model) {
//   this.model = model;

//   this.__proto__ = camera;

//   return this;
// }

// var nikonD3 = new Nikon('D3');
// console.log(nikonD3);
// console.log('enabled:', nikonD3.enabled);
// console.log(nikonD3.hasOwnProperty('enabled'));
// nikonD3.enable();
// console.log(nikonD3);
// console.log(nikonD3.hasOwnProperty('enabled'));

// better way, but also wrong. Don't do it
// var camera = {
//   enabled: false,
//   enable: function () {
//     this.enabled = true;
//   },
//   disable: function () {
//     this.enabled = false;
//   },
//   takePhoto: function () {
//     console.log('A photograph has been taken.');
//   }
// };

// function Nikon (model) {
//   this.model = model;

//   return this;
// }
// Nikon.prototype = camera;

// var nikonD3 = new Nikon('D3');
// console.log(nikonD3);
// console.log('enabled:', nikonD3.enabled);
// console.log(nikonD3.hasOwnProperty('enabled'));
// nikonD3.enable();
// console.log(nikonD3);
// console.log(nikonD3.hasOwnProperty('enabled'));
// special meaning of prototype property
// only object

// constructor property
// by default
// function Building () {
//   return this;
// }
// Building.prototype = {
//   constructor: Building,
// };
// console.log(Building.prototype);

// function Building () {
//   return this;
// }
// console.log(Building.prototype);
// console.log(Building.prototype.constructor === Building);

// function Building () {
//   return this;
// }
// Building.prototype = {
//   constructor: 1
// };
// console.log(Building.prototype);

// function Camera (model) {
//   this.model = model;

//   return this;
// }
// var canonD3 = new Camera('canonD3');
// console.log(canonD3);
// var nikonD3 = new canonD3.constructor('nikonD3');
// console.log(nikonD3);

// constructor can be lost

// Object.create(proto, descriptors)

// var camera = {
//   enabled: false,
//   enable: function () {
//     this.enabled = true;
//   },
//   disable: function () {
//     this.enabled = false;
//   },
//   takePhoto: function () {
//     console.log('A photograph has been taken.');
//   }
// };

// function Nikon (model) {
//   this.model = model;

//   return this;
// }
// Nikon.prototype = Object.create(camera);
// Nikon.prototype = camera;
// Nikon.prototype = inherit(camera);
// Nikon.prototype.constructor = Nikon;

// var nikonD3 = new Nikon('D3');
// console.log(nikonD3);

// function inherit (proto) {
//   function F () {}
//   F.prototype = proto;

//   return new F();
// }

// complex inherit
// function inherit (proto, descriptors) {
//   function F () {}

//   F.prototype = proto;

//   const obj = new F();
//   F.prototype = null;

//   if (typeof descriptors === 'object') {
//     Object.keys(descriptors).forEach(function (key) {
//       Object.defineProperty(obj, key, descriptors[key]);
//     });
//   }

//   return obj;
// }

// built-in classes in JS
// var obj = {};
// console.log(String(obj));
// console.log(obj.__proto__);
// console.log(obj.__proto__.toString);
// 1. obj = new Object()
// 2. obj.__proto__ = Object.prototype
// 3. toString from Object.prototype
// obj ({}) -> Object.prototype ({toString: function () {}}) -> null
// console.log(obj.toString === Object.prototype.toString);
// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// everything inherits from Object.prototype

// function printArgs () {
//   // [].forEach
//   Array.prototype.forEach.call(arguments, function (arg) {
//     console.log(arg);
//   });
// }
// printArgs(1, 'dfg', null);


// Primitives
// var number = 10;
// console.log(number.toFixed(7));
// // new Number() -> {[[PrimitiveValue]]: 10, __proto__: {toFixed: function () {}}} -> return result, destroy object
// number.value = 40;
// console.log(number.value);

// special types null and undefined


// Change built-in prototypes
// String.prototype.reverse = function () {
//   let result = '';

//   for (let i = this.length - 1; i >= 0; i -= 1) {
//     result += this[i];
//   }

//   return result;
// };
// console.log('reversed string'.reverse());

// Object.prototype.filter = function (func) {
//   const result = {};
//   const self = this;

//   Object.keys(self).forEach(function (key) {
//     if (func(self[key], key)) {
//       result[key] = self[key];
//     }
//   });

//   return result;
// };
// var user = {
//   name: 'Franz',
//   age: 16,
//   height: 183,
// };
// console.log(user.filter(function (value) {
//   return typeof value === 'number';
// }));

// Don't that is above. There are special cases
// Object.create


// Custom classes with prototypes
// Simple class
// function Bird (name) {
//   this.name = name;
//   this.speed = 0;

//   this.fly = function (speed) {
//     this.speed += speed;

//     console.log('The speed of the bird ' + this.name + ' is ' + this.speed);
//   };

//   this.sing = function () {
//     console.log('Ola la la!!!');
//   };

//   return this;
// }
// var coco = new Bird('Coco');
// console.log(coco.speed);
// coco.fly(40);
// coco.sing();
// console.log(coco.speed);


// the prototype way
// function Bird (name) {
//   this.name = name;
//   this.speed = 0;

//   return this;
// }

// Bird.prototype.fly = function (speed) {
//   this.speed += speed;

//   console.log('The speed of the bird ' + this.name + ' is ' + this.speed);
// };

// Bird.prototype.sing = function () {
//   console.log('Ola la la!!!');
// };

// Bird.prototype = {
//   constructor: Bird,
//   fly: function (speed) {
//     this.speed += speed;

//     console.log('The speed of the bird ' + this.name + ' is ' + this.speed);
//   },
//   sing: function () {
//     console.log('Ola la la!!!');
//   }
// };

// var coco = new Bird('Coco');
// console.log(coco.speed);
// coco.fly(40);
// coco.sing();
// console.log(coco.speed);

// advantages/disadvantages compare to functional inheritance


// Additional task
// Write a function which checks whether the given value is IP.
// The pattern of IP is such a string '[0-999].[0-999].[0-999].[0-999]'
// Additionally write a class Buffer and use it in your solution. It must have get(), add() and reset() methods.

// Helper function to check whether it is an integer.
function isInt (n) {
  return !isNaN(parseInt(n, 10));
}

function Buffer (initialValue) {
  // code...
}
Buffer.DEFAULT_VALUE = '';

function isIP (str) {

}

// Falsy values
// console.log(isIP('sdfsdf'));
// console.log(isIP('454454'));
// console.log(isIP(null));
// console.log(isIP('45.45.47.'));
// console.log(isIP('45.45.47. 2'));
// console.log(isIP('45.4547. 2'));
// console.log(isIP('00000000'));
// console.log(isIP('00000000'));
// console.log(isIP('11.8.v.841'));
// console.log(isIP('11.858.841'));
// console.log(isIP('11.85.8.8(1'));
// console.log(isIP('12.12.14.8.'));
// console.log(isIP('.254.255.0'));
// console.log(isIP('1.1.1.1a'));
// console.log(isIP('1'));
// console.log(isIP('1.23.256.255.'));
// console.log(isIP('1.23.256..'));
// console.log(isIP('0..1.0'));
// console.log(isIP('1.1.1.1.1'));
// console.log(isIP('a0.1.1.1'));
// console.log(isIP('129380129831213981.255.255.255'));
// console.log(isIP('129380129831213981.255.255.255'));
// console.log(isIP('255.255.255.255abcdekjhf'));
// console.log(isIP('7283728'));
// console.log('---------------------------------');
// True values
// console.log(isIP('45.45.47.2'));
// console.log(isIP('00.4.0.0'));
// console.log(isIP('1.1.1.1'));
// console.log(isIP('10.10.10.10'));
// console.log(isIP('108.108.108.108'));
// console.log(isIP('11.8.47.841'));
// console.log(isIP('912.14.0.2'));
// console.log(isIP('0.254.255.0'));
// console.log(isIP('1.256.1.1'));
// console.log(isIP('0.1.1.256'));

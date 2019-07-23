'use strict';

// Modules

// ;(function () {
//   var myVar1 = '...';
//   var myVar2 = '.......';

//   var myModule = {};

//   myModule.method1 = function (param) {
//     // code goes here
//   };

//   myModule.method2 = function (param) {
//     // code goes here
//   };

//   // and so on...

//   window.myModule = myModule;
// }());


// Object methods and this
// var photograph = {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768,
//   boom: function () {
//     console.log('BOOM!!!');
//   }
// };


// var photograph = {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768
// };
// photograph.boom = function () {
//   console.log('BOOM!!!');
// };


// // rename, copy to another variable
// var photograph = {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768,
//   getProportion: function () {
//     return photograph.width / photograph.height;
//   },
//   getOrientation: function () {
//     return photograph.width > photograph.height ? 'landscape' : photograph.height > photograph.width ? 'portrait' : 'square';
//   }
// };

// var photograph {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768,
//   getProportion: function () {
//     return this.width / this.height;
//   },
//   getOrientation: function () {
//     return this.width > this.height ? 'landscape' : this.height > this.width ? 'portrait' : 'square';
//   }
// };

// function getProportion () {
//   return this.width / this.height;
// }

// var photograph = {
//   width: 1024,
//   height: 768
// };
// var photograph2 = {
//   width: 640,
//   height: 480
// };

// photograph.getProp = getProportion;
// photograph.getProp();
// photograph['getProp']();

// photograph2.getProp = getProportion;
// photograph2.getProp();
// photograph2['getProp']();

// call without a context (with "use strict" and without it)
// function example () {
//   console.log(this);
// }
// example();

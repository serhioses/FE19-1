'use strict';

// OOP - functional style
// Interfaces (private and public)
// function Photograph (src) {
//   this.name = 'Photograph ' + Math.random();

//   return this;
// }
// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');

// public and privat methods
// function Photograph (src) {
//   var image = new Image();

//   this.name = 'Photograph ' + Math.random();

//   function onImageLoad () {
//     console.log('loaded');
//   };

//   this.init = function () {
//     image.onload = onImageLoad;

//     image.src = src;
//   };

//   return this;
// }
// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');
// landscape.init();

// constants
// function Photograph (src) {
//   var image = new Image();
//   var thumb;

//   this.name = 'Photograph ' + Math.random();

//   function onImageLoad () {
//     console.log('loaded');

//     document.body.appendChild(image);
//   };

//   function getProportion () {
//     return image.naturalWidth / image.naturalHeight;
//   }

//   this.init = function () {
//     image.onload = onImageLoad;

//     image.src = src;
//   };

//   this.createThumb = function (width) {
//     width = width || Photograph.DEFAULT_THUMB_WIDTH;

//     return width / getProportion();
//   };

//   return this;
// }
// Photograph.DEFAULT_THUMB_WIDTH = 640;

// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');
// landscape.init();


// real example
// function Photograph (src) {
//   var image = new Image();
//   var thumb;

//   this.name = 'Photograph ' + Math.random();

//   function onImageLoad () {
//     console.log('loaded');

//     document.body.appendChild(image);
//   };

//   function getProportion () {
//     return image.naturalWidth / image.naturalHeight;
//   }

//   this.init = function () {
//     image.onload = onImageLoad;

//     image.src = src;
//   };

//   this.createThumb = function (width) {
//     var canvas = document.createElement('canvas');
//     var ctx = canvas.getContext('2d');

//     width = width || Photograph.DEFAULT_THUMB_WIDTH;
//     height = width / getProportion();

//     canvas.width = width;
//     canvas.height = height;

//     ctx.drawImage(image, 0, 0, width, height);

//     thumb = new Image();

//     thumb.onload = function () {
//       document.body.appendChild(thumb);
//     };

//     thumb.src = canvas.toDataURL('image/jpeg');
//   };

//   return this;
// }
// Photograph.DEFAULT_THUMB_WIDTH = 640;

// var landscape = new Photograph('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350');
// landscape.init();
// setTimeout(function () {
//   landscape.createThumb();
// }, 1000);


// Getter and setter

// problem
// function Book (name, totalPages) {
//   this.name = name;
//   this.totalPages = totalPages;

//   this.currentPage = 1;

//   return this;
// }

// var animalFarm = new Book('Animal farm', 184);

// this.currentPage = -5;
// this.currentPage = 0;
// this.currentPage = 200;

// setter and getter
// function Book (name, totalPages) {
//   var currentPage = 1;

//   this.name = name;
//   this.totalPages = totalPages;

//   this.setCurrentPage = function (pageNum) {
//     if (typeof pageNum !== 'number' || isNaN(pageNum)) {
//       console.log('pageNum mst be a number');

//       return;
//     }
//     if (pageNum <= 0) {
//       console.log('Ooops! pageNum cannot be ' + pageNum);

//       return;
//     }
//     if (pageNum > this.totalPages) {
//       console.log('Just stop it, please! totalPages cannot be more than ' + this.totalPages + '. ' + pageNum + ' received.');

//       return;
//     }

//     currentPage = pageNum;
//   };

//   this.getCurrentPage = function () {
//     return currentPage;
//   };

//   return this;
// }

// var animalFarm = new Book('Animal farm', 184);

// animalFarm.setCurrentPage(0);
// animalFarm.setCurrentPage(-2);
// animalFarm.setCurrentPage(185);
// animalFarm.setCurrentPage(57);
// console.log(animalFarm.getCurrentPage());

// function Book (name, totalPages) {
//   var currentPage = 1;

//   this.name = name;
//   this.totalPages = totalPages;

//   this.manageCurrentPage = function (pageNum) {
//     if (!arguments.length) {
//       return currentPage;
//     }

//     if (typeof pageNum !== 'number' || isNaN(pageNum)) {
//       console.log('pageNum mst be a number');

//       return;
//     }
//     if (pageNum <= 0) {
//       console.log('Ooops! pageNum cannot be ' + pageNum);

//       return;
//     }
//     if (pageNum > this.totalPages) {
//       console.log('Just stop it, please! totalPages cannot be more than ' + this.totalPages + '. ' + pageNum + ' received.');

//       return;
//     }

//     currentPage = pageNum;
//   };

//   return this;
// }

// var animalFarm = new Book('Animal farm', 184);

// animalFarm.manageCurrentPage(0);
// animalFarm.manageCurrentPage(-2);
// animalFarm.manageCurrentPage(187);
// animalFarm.manageCurrentPage(15);
// console.log(animalFarm.manageCurrentPage());


// Functional inheritance
// What is inheritance
// function Building () {
//   var isBuilt = false;

//   this.build = function () {
//     isBuilt = true;
//   };
//   this.destroy = function () {
//     isBuilt = false;
//   };

//   return this;
// }

// function Stable () {
//   Building.call(this);

//   var places = 0;

//   this.setPlacesNumber = function (num) {
//     places = num;
//   };

//   return this;
// }

// var stable = new Stable();
// stable.build();
// stable.setPlacesNumber(12);
// stable.destroy();

// console.log(stable);


// privacy problem
// function Building (data) {
//   var isBuilt = false;

//   this.floors = data.floors;
//   this.material = data.material;

//   this.build = function () {
//     isBuilt = true;
//   };
//   this.destroy = function () {
//     isBuilt = false;
//   };

//   return this;
// }

// function Stable (data) {
//   var places;

//   Building.call(this, data);

//   places = 0;

//   this.setPlacesNumber = function (num) {
//     places = num;
//   };

//   // console.log(isBuilt);

//   return this;
// }

// var stable = new Stable({
//   floors: 0,
//   material: 'wood',
// });
// console.log(stable);


// protected properties and methods
// function Building (data) {
//   this._isBuilt = false;

//   this.floors = data.floors;
//   this.material = data.material;

//   this.build = function () {
//     this._isBuilt = true;
//   };
//   this.destroy = function () {
//     this._isBuilt = false;
//   };

//   return this;
// }

// function Stable (data) {
//   var places;

//   Building.apply(this, arguments);

//   places = 0;

//   this.setPlacesNumber = function (num) {
//     places = num;
//   };

//   console.log(this._isBuilt);

//   return this;
// }

// var stable = new Stable({
//   floors: 0,
//   material: 'wood',
//   windows: 6,
// });
// stable.build();
// console.log(stable._isBuilt);
// console.log(stable);
// build after 1s

// methods overriding
// function Building (data) {
//   this._isBuilt = false;

//   this.floors = data.floors;
//   this.material = data.material;

//   this.build = function () {
//     this._isBuilt = true;
//   };
//   this.destroy = function () {
//     this._isBuilt = false;
//   };

//   return this;
// }

// function School (data) {
//   var type;
//   var parentBuild;
//   var balloonsFlown = false;

//   Building.apply(this, arguments);

//   type = data.type;

//   parentBuild = this.build;
//   this.build = function () {
//     parentBuild.call(this);
//     console.log('The school is successfully built.');

//     return this;
//   };

//   this.flyBalloons = function () {
//     balloonsFlown = true;

//     console.log('Happy studyind losers...');
//   };

//   return this;
// }

// var elementarySchool = new School({
//   floors: 4,
//   material: 'bread',
//   type: 'elementary',
// });
// console.log(elementarySchool);
// elementarySchool.build().flyBalloons();

'use strict';

// function Building (data) {
//   this.data = data;

//   this._isBuilt = false;

//   return this;
// }

// Building.prototype.build = function () {
//   this._isBuilt = true;
// };
// Building.prototype.destroy = function () {
//   this._isBuilt = false;
// };

// function House (data) {
//   Building.apply(this, arguments);

//   this.name = this.data.name;

//   this._isDoorOpened = false;

//   return this;
// }

// House.prototype = Object.create(Building.prototype);
// House.prototype.constructor = House;

// House.prototype.build = function () {
//   Building.prototype.build.call(this);
//   console.log('House ' + this.name + ' has been successfully built.');
//   console.log('isBuilt:', this._isBuilt);
// };

// House.prototype.destroy = function () {
//   var isConfirmed = confirm('Are you sure to destroy house?');

//   if (isConfirmed) {
//     Building.prototype.destroy.call(this);
//     console.log('House ' + this.name + ' has been successfully destroyed.');
//     console.log('isBuilt:', this._isBuilt);
//   } else {
//     console.log('Cancelled.');
//     console.log('isBuilt:', this._isBuilt);
//   }
// };

// House.prototype.openDoor = function () {
//   this._isDoorOpened = true;
//   console.log('The door is opened.');
// };
// House.prototype.closeDoor = function () {
//   this._isDoorOpened = false;
//   console.log('The door is closed.');
// };

// var lakeHouse = new House({
//   name: 'Lake House',
//   floors: 2,
//   material: 'wood',
//   windows: 13,
//   rooms: 4,
// });
// lakeHouse.build();
// lakeHouse.openDoor();
// lakeHouse.closeDoor();
// setTimeout(function () {
//   lakeHouse.destroy();
// }, 3000);


// Mixins
// var testMixin = {
//   log: function (arg) {
//     this.counter += 1;
//     console.log('Message №' + this.counter, '<' + arg + '>');
//   },
//   counter: 0
// };

// function Dog (name) {
//   this.name = name;

//   return this;
// }

// Dog.prototype.bark = function () {
//   console.log('Bark Bark!!!');
// };

// Object.keys(testMixin).forEach(function (key) {
//   Dog.prototype[key] = testMixin[key];
// });

// var grant = new Dog('Grant');
// var grant2 = new Dog('Grant2');
// grant.bark();
// grant.log('I am Grant');
// grant.log('I am 2');

// grant2.bark();
// grant2.log('I am Grant');
// grant2.log('I am 2');


// var eventMixin = {
//   subscribe: function (eventName, handler) {
//     if (!this._handlers) {
//       this._handlers = {};
//     }
//     if (!this._handlers[eventName]) {
//       this._handlers[eventName] = [];
//     }

//     this._handlers[eventName].push(handler);
//   },
//   unsubscribe: function (eventName, handler) {
//     if (!this._handlers || !this._handlers[eventName]) {
//       return;
//     }

//     this._handlers[eventName] = this._handlers[eventName].filter(function (subscribedHandler) {
//       return subscribedHandler !== handler;
//     });
//   },
//   trigger: function (eventName, data) {
//     if (!this._handlers || !this._handlers[eventName]) {
//       return;
//     }

//     const self = this;

//     this._handlers[eventName].forEach(function (handler) {
//       handler.call(self, data);
//     });
//   }
// };

// function Building (data) {
//   this.data = data;

//   this._isBuilt = false;

//   return this;
// }

// Building.prototype.build = function () {
//   this._isBuilt = true;
// };
// Building.prototype.destroy = function () {
//   this._isBuilt = false;
// };

// Object.keys(eventMixin).forEach(function (key) {
//   Building.prototype[key] = eventMixin[key];
// });

// function House (data) {
//   Building.apply(this, arguments);

//   this.name = this.data.name;

//   this._isDoorOpened = false;

//   return this;
// }

// House.prototype = Object.create(Building.prototype);
// House.prototype.constructor = House;

// House.prototype.build = function () {
//   Building.prototype.build.call(this);
//   console.log('House ' + this.name + ' has been successfully built.');
//   console.log('isBuilt:', this._isBuilt);
// };

// House.prototype.destroy = function () {
//   var isConfirmed = confirm('Are you sure to destroy house?');

//   if (isConfirmed) {
//     Building.prototype.destroy.call(this);
//     console.log('House ' + this.name + ' has been successfully destroyed.');
//     console.log('isBuilt:', this._isBuilt);
//   } else {
//     console.log('Cancelled.');
//     console.log('isBuilt:', this._isBuilt);
//   }
// };

// House.prototype.openDoor = function () {
//   this._isDoorOpened = true;
//   console.log('The door is opened.');
//   this.trigger('door:open', 'Woooooooops!!!');
// };
// House.prototype.closeDoor = function () {
//   this._isDoorOpened = false;
//   console.log('The door is closed.');
// };

// var lakeHouse = new House({
//   name: 'Lake House',
//   floors: 2,
//   material: 'wood',
//   windows: 13,
//   rooms: 4,
// });

// lakeHouse.subscribe('door:open', function (arg) {
//   console.log(arg);
// });

// lakeHouse.build();
// lakeHouse.openDoor();
// lakeHouse.closeDoor();




// JS, BOM, DOM -> window

// BOM - browser object model
// console.log(window.navigator); // browser, OS
// console.log(navigator);
// console.log(window.location); // url
// console.log(window.history);
// console.log(window.screen);
// console.log(new XMLHttpRequest());
// alert, confirm, propmpt

// DOM - document object model
// console.log(document);
// console.dir(document);

// var paragraph = document.createElement('p');
// paragraph.innerHTML = 'Hello you';
// document.body.appendChild(paragraph);
// document.body.style.backgroundColor = 'seagreen';

// DOM - a representation of a document as a tree of objects available for change through JS.

// Elements, text, comments, document. Total 12 types
// console.log(Node.prototype);

// var _0x6f09=["\x6E\x6F\x64\x65\x4E\x61\x6D\x65","\x3A","\x6C\x6F\x67","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x6E\x65\x78\x74\x53\x69\x62\x6C\x69\x6E\x67"];function walkTheDOM(_0x5337x2){while(_0x5337x2){console[_0x6f09[2]](_0x5337x2[_0x6f09[0]]+ _0x6f09[1],_0x5337x2);if(_0x5337x2[_0x6f09[3]]){walkTheDOM(_0x5337x2[_0x6f09[3]])};_0x5337x2= _0x5337x2[_0x6f09[4]]}}walkTheDOM(document);

// We don't have to rely on HTML formatting


// working in the console


// DOM navigation (readonly)
// access starts from document element
// can be null. In DOM if not found - null, not "undefined"

// var html = document.documentElement;
// var body = document.body;
// var head = document.head;

// console.log(html.tagName);
// console.log(body.tagName);
// console.log(head.tagName);


// Child nodes (elements), nested nodes (elements)

// childNodes
// function printChildNodes () {
//   for (let i = 0; i < document.body.childNodes.length; i += 1) {
//     console.log(document.body.childNodes[i].nodeName, document.body.childNodes[i]);
//   }
// }
// printChildNodes();

// firstChild, lastChild
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstChild === document.body.childNodes[0]);
// console.log(document.body.lastChild === document.body.childNodes[document.body.childNodes.length - 1]);


// previousSibling, nextSibling
// console.log(document.body.firstChild.nextSibling);
// console.log(document.body.lastChild.previousSibling);
// console.log(document.body.lastChild.nextSibling);
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[3].firstChild.nextSibling);

// parentNode
// console.log(document.body.parentNode.nodeName);
// console.log(document.body.firstChild.parentNode);

// html collections are not arrays!
// console.log(document.body.childNodes);
// var names = Array.prototype.reduce.call(document.body.childNodes, function (acc, next) {
//   return acc + next.nodeName + '-';
// }, '');
// console.log(names);


// Only elements navigation
// children
// console.log(document.body.children);
// for (let i = 0; i < document.body.children.length; i += 1) {
//   console.log('element:', document.body.children[i].tagName);
//   console.log('element:', document.body.children[i]);
// }
// Array.prototype.forEach.call(document.body.children, function (el) {
//   console.log(el);
// });

// firstElementChild, lastElementChild
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.children[1].children);
// Array.prototype.forEach.call(document.body.children[1].children, function (li) {
//   console.log(li.firstElementChild);
//   console.log(li.lastElementChild);
//   console.log(li.firstElementChild === li.lastElementChild);
// });

// previousElementSibling, nextElementSibling
// console.log(document.body.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.lastElementChild.previousElementSibling);


// special links for tables

// var table = document.body.children[2];
// console.log('table:', table);
// console.log('caption:', table.caption);
// // capital H
// console.log('thead:', table.tHead);
// console.log('tfoot:', table.tFoot);
// console.log('tbodies:', table.tBodies);
// console.log('all rows:', table.rows);
// console.log('all rows length:', table.rows.length);

// console.log('thead rows:', table.tHead.rows);
// console.log('tfoot rows:', table.tFoot.rows);
// console.log('tbody 0 rows:', table.tBodies[0].rows);
// console.log('tbody 1 rows:', table.tBodies[1].rows);

// console.log('tr cells:', table.tFoot.rows[0].cells);
// console.log('tr section row index:', table.tBodies[0].rows[1].sectionRowIndex);
// console.log('tr row index:', table.tBodies[0].rows[1].rowIndex);

// console.log('tr cell index:', table.tHead.rows[0].cells[2].cellIndex);


// walkTheDOM function. firstChild are nextSibling is enough, recursion, loop


// search inside DOM
// document.getElementById(id), id should be unique
// console.log(document.getElementById('container'));
// console.dir(document.getElementById('container'));
// console.log(window.container);

// getElementsByTagName(tagName);
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByTagName('p'));
// console.log(document.getElementsByTagName('script'));

// var listItems = document.getElementsByTagName('li');
// Array.prototype.forEach.call(listItems, function (li) {
//   console.log(li);
// });

// document.getElementsByName
// console.log(document.getElementsByName('color'));

// getElementsByClassName(className)
// var cards = document.getElementsByClassName('card');
// console.log(cards);

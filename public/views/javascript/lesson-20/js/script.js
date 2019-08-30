'use strict';

// querySelector(cssSelector) - returns only one first element if any
// console.log(document.querySelector('.card'));


// matches(css) - is elements matches selector
// console.log(document.querySelector('.card').matches('div'));
// console.log(document.querySelector('.card').matches('.card'));
// console.log(document.querySelector('.card').matches('.card_'));
// wrong -> error
// console.log(document.querySelectorAll('.card').matches('.card_'));
// var divs = document.getElementsByTagName('div');
// Array.prototype.forEach.call(divs, function (div) {
//   if (div.matches('.card')) {
//     console.log(div);
//   }
// });


// closest(css) - from the current element check whether a current element matches selector and if so return it and stop. So only one element can be found. If not found - null.
// var paragraphs = document.getElementsByTagName('p');
// Array.prototype.forEach.call(paragraphs, function (p) {
//   if (p.closest('.card')) {
//     console.log(p);
//   }
// });


// type, tag, content
// Node -> text
// Node -> Element -> HTMLElement -> anyElement
// Node -> Element -> SVGElement
// Node -> Comment

// console.log(String(document.body));
// console.log(String(document.querySelector('div')));

// console.dir vs console.log


// IDL(Interface Definition Language) - used for elements properties and elements methods


// nodeType
// console.log(Node.prototype);
// console.log(Node.prototype.ELEMENT_NODE);
// console.log(Node.prototype.TEXT_NODE);

// var childNodes = document.body.childNodes;

// for (let i = 0; i < childNodes.length; i += 1) {
//   if (childNodes[i].nodeType === Node.ELEMENT_NODE) {
//     console.log(childNodes[i]);
//   }
// }


// nodeName and tagName
// nodeName is present in all nodes, tagName is present only on elements
// tag name is always in uppercase INPUT

// console.log(document.body.nodeName);
// console.log(document.body.tagName);

// console.log(document.nodeName);
// console.log(document.tagName);


// innerHTML - html content of an element represented as a string
// console.log(document.body.innerHTML);

// var list = document.getElementById('list');
// console.log(list.innerHTML);
// console.log(typeof list.innerHTML);
// list.innerHTML = '';
// list.innerHTML = '<li><span>New list item from JS</span></li>';

// += overrides html
// innerHTML for tables on IE not working, TD and TH are exceptions
// scripts are non executable


// outerHTML
// var list = document.getElementById('list');
// console.log(list.outerHTML);
// console.log(list.innerHTML);

// unexpected behavior
// list.outerHTML = '<div>New HTML</div>';
// console.log(list.outerHTML);


// nodeValue/data - text node content
// var text = document.body.childNodes[0];
// console.log(text);
// console.log(text.data);
// text.data = 'New text';

// nodeValue - the same, but where is no data, nodeValue is equal to null


// textContent - only text inside an element, skips all HTML
// var list = document.getElementById('list');
// console.log(list.textContent);

// list.textContent = '<li>New text content</li>';
// Array.prototype.forEach.call(list.children, function (li, i) {
//   li.textContent = 'New text content ' + i;
// });


// hidden property


// specific properties
// var specific = document.getElementById('specific');
// var input = specific.querySelector('input');
// var anchor = specific.querySelector('a');
// var paragraph = specific.querySelector('p');

// console.log(input.type);
// console.log(input.name);
// console.log(input.value);

// console.log(anchor.href);

// console.log(paragraph.className);


// How to know properties
// console.dir(input);
// console.dir(anchor);
// console.dir(p);

// Polifills
// general purpose
// null vs undefined is important
// if (document.documentElement.nextElementSibling === undefined) {
//   Object.defineProperty(Element.ptototype, 'nextElementSibling', {
//     get: function () {
//       let next = this.nextSibling;

//       do {
//         if (next.nodeType === Node.ELEMENT_NODE) {
//           return next;
//         }

//         next = next.nextSibling;
//       } while (next);

//       return null;
//     }
//   });
// }
// if (document.documentElement.nextElementSiblingCopy === undefined) {
//   Object.defineProperty(Element.prototype, 'nextElementSiblingCopy', {
//     get: function () {
//       let next = this.nextSibling;

//       do {
//         if (next.nodeType === Node.ELEMENT_NODE) {
//           return next;
//         }

//         next = next.nextSibling;
//       } while (next);

//       return null;
//     }
//   });
// }

// console.log(document.getElementById('first-child').nextElementSibling);
// console.log(document.getElementById('first-child').nextElementSiblingCopy);

// property we are checking must exist


// extending native DON classes
// add to all
// Element.prototype.cut = function (maxLength) {
//   if (this.textContent.length > maxLength && maxLength > 3) {
//     this.textContent = this.textContent.slice(0, maxLength - 3) + '...';
//   }
// };

// document.getElementById('cut').cut(10);

// Object.defineProperty(Element.prototype, 'extremeChildren', {
//   get: function () {
//     return [this.firstElementChild, this.lastElementChild];
//   }
// });
// console.log(document.getElementById('extreme').extremeChildren);

// HTMLInputElement.prototype.setPlaceholderToValue = function () {
//   this.value = this.placeholder;
// };
// document.getElementById('name').setPlaceholderToValue();

// HTMLInputElement.prototype.valueToCodes = function () {
//   return Array.prototype.map.call(this.value, function (char) {
//     return char.charCodeAt(0);
//   });
// };
// console.log(document.getElementById('email').valueToCodes());


// Attributes and properties
// our properties
// const example = document.getElementById('example');
// example.extraData = {
//   name: 'example',
//   shape: 'circle',
//   speed: 184,
//   nums: [1, 2, 3],
//   saySomething: function () {
//     console.log('Hi there');
//   }
// };
// console.dir(example);
// console.log(example.extraData.shape);
// console.log(example.extraData.nums);
// example.extraData.saySomething();
// no influence on the view


// Attributes
// element.attributes
// element.hasAttribute(name)
// element.getAttribute(name)
// element.setAttribute(name, value)
// element.removeAttribute(name)

// An attribute is always a string, case insensitive, visible in html
// const address = document.getElementById('address');
// console.log(address.attributes);
// Array.prototype.forEach.call(address.attributes, function (attr) {
//   console.log(attr.name + ' =', attr.value);
// });
// console.log(address.getAttribute('description'));
// address.setAttribute('time', new Date());
// console.log(address.getAttribute('time'));
// console.log(address.getAttribute('tIMe'));
// address.removeAttribute('description');
// console.log(address.getAttribute('description'));

// console.log(address.getAttribute('name'));
// address.setAttribute('name', 'new_address');
// console.log(address.getAttribute('name'));
// address.removeAttribute('name');
// console.log(address.getAttribute('name'));

// address.setAttribute('value', 'New value from JS');
// console.log(address.time);
// console.log(address.getAttribute('time'));


// Use cases for attributes
// DOM props and HTML attributes are not always the same
// when creating DOM a browser creates props for all standard attributes
// const link = document.getElementById('link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// const checkbox = document.getElementById('checkbox');
// console.log(checkbox.getAttribute('checked'));
// console.log(checkbox.checked);
// checkbox.removeAttribute('checked');
// checkbox.checked = false;

// const input = document.getElementById('input');
// input.value = 'New input value';
// console.log(input.value, input.getAttribute('value'));


// className
// const address = document.getElementById('address');
// console.log(address.className);
// console.log(address.getAttribute('class'));
// address.className = 'new-classname';
// address.setAttribute('class', 'attribute-classname');
// htmlFor


// classList
// element.classList.add(className)
// element.classList.remove(className)
// element.classList.contains(className)
// element.classList.toggle(className)
// const address = document.getElementById('address');
// console.log(address.classList.add('extra-class'));
// console.log(address.classList.contains('extra-class'));
// console.log(address.classList.remove('extra-class'));
// console.log(address.classList.contains('extra-class'));
// setInterval(function () {
//   address.classList.toggle('extra-class');
//   console.log(address.classList.contains('extra-class'));
// }, 1000);


// data-* attributes, dataset
// const settings = document.getElementById('settings');
// console.log(settings['data-price']);
// console.log(settings.getAttribute('data-price'));
// console.log(settings.dataset.price);
// console.log(settings.dataset.favorite);
// console.log(settings.dataset.oldPrice);
// console.log(settings.dataset.props);
// console.log(JSON.parse(settings.dataset.props));
// settings.dataset.id = 10;
// settings.setAttribute('data-id', 15);
// console.log(settings.dataset);

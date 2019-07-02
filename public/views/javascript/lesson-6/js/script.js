'use strict';
// properties and methods
// null and undefined have nothing

// property
// let string = 'A very important text';
// console.log(string.length);
// console.log('la la la'.length);

// method (function)
// let string = 'DO NOT TYPE CAPS!!!';
// console.log(string.toLowerCase());
// console.log('DO NOT type CAPS!!!'.toLowerCase());

// let num = 54.4533545454;
// console.log(num.toFixed(3));
// console.log(10.4564564.toFixed(3));
// console.log(10..toString(2));
// console.log(10 .toString(2));

// Numbers
// declaration
// let num1 = 10;
// let num2 = 10.54554;
// let num3 = 0x100;
// let num4 = 5e3;
// let num5 = 5e-3;

// Infinity
// console.log(10 / 0);
// console.log(10e500);

// NaN
// console.log(0 / 0);
// console.log(NaN === NaN);
// console.log(NaN !== NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(NaN));

// isFinite(n) NaN/Infinity/-Infinity
// console.log(isFinite(NaN));
// console.log(isFinite(-54));
// console.log(isFinite(null));

// converting to number (math transformations)
// console.log(+'16');
// console.log(+'164l');
// console.log(+' 164 ');
// console.log(+'\n 164 \r');
// console.log(Number('11'));
// console.log(Number('11 \t'));
// console.log(Number('11u'));

// parseInt(s, radix), parseFloat(s)
// console.log(parseInt('15', 10));
// console.log(parseInt('-15', 10));
// console.log(parseInt('15.54654', 10));
// console.log(parseInt('15.54654dfjsdkjf', 10));
// console.log(parseInt('skdjf54', 10));
// console.log(parseInt('0111', 2));
// console.log(parseInt('A0', 16));

// console.log(parseFloat('15D'));
// console.log(parseFloat('15.5454'));
// console.log(parseFloat('-0.6565'));

// parseFloat vs parseInt
// console.log(parseInt(true, 10), parseFloat(true));
// console.log(parseInt(false, 10), parseFloat(false));
// console.log(parseInt(null, 10), parseFloat(null));
// console.log(parseInt(undefined, 10), parseFloat(undefined));
// console.log(parseInt('', 10), parseFloat(''));
// console.log(parseInt(Infinity, 10), parseFloat(Infinity));

// toString(radix)
// console.log(15 .toString(2));

// toFixed(precision)
// let n = 4.846869;
// let precision = 4;
// console.log(Math.round(n * Math.pow(10, precision)) / Math.pow(10, precision));
// console.log(n.toFixed(precision)); // string
// console.log(1.1.toFixed(8));

// inaccurate calculations
// console.log(0.6 + 0.3 === 0.9);
// console.log(0.6 + 0.3);

// Math floor, ceil, round, cos, sin, atan, log, sqrt, pow, abs, max, min, random

// formatting
// console.log(4654654 .toLocaleString());


// Strings

// creation
// var str1 = 'Hi there!';
// var str2 = "Hi there again!";
// console.log(str1);
// console.log(str2);

// special characters
// var str = 'I\'m going to do...';
// var str = "I'm going to do...";
// var str = "The official standart of JavaScript language is \"EcmaScript\".";
// console.log(str);

// var str = 'This is how to display backslash \\';
// console.log(str);

// string length
// var str = 'Here is a text';
// console.log(str.length);

// symbol access
// var str = 'Beyond the horizon of the place we lived when we were young...';

// console.log(str.charAt(0));
// console.log(str.charAt(8));
// console.log(str.charAt(str.length - 1));
// console.log(str[1]);
// console.log(str.charAt(500));
// console.log(str[500]);
// console.log(str.charAt(6));
// console.log(str[6]);

// strings changing (unchanging types)
// var str = 'Beyond the horizon of the place we lived when we were young...';
// str[0] = 'C';
// str.charAt(0) = 'C';

// string case
// var str = 'This will uppercase the string';
// var str2 = 'THIS WILL LOWERCASE THE STRING';
// console.log(str.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str, str2);
// str = str.toUpperCase();
// console.log(str);

// search for a match
// var str = 'Beyond the horizon of the place we lived when we were young...';
// console.log(str.indexOf('horizon'));

// function getAllMatches (str) {
//   let pos = -1;

//   while (true) {
//     pos = str.indexOf('o', pos + 1);

//     if (pos === -1) {
//       break;
//     }

//     console.log(pos);
//   }
// }
// getAllMatches(str);

// slicing a substring
// substring(start, [, end]) - from start to the end, but not including the end
// a negative value becomes 0
// var str = 'Just a string';
// console.log(str.substring(0));
// console.log(str.substring(0, 4));
// console.log(str.substring(-1));
// console.log(str.substring(4, 0));
// console.log(str.substring(-4, 0));

// substr(start, [, length])
// var str = 'Just a string';
// console.log(str.substr(0));
// console.log(str.substr(0, 4));
// console.log(str.substr(-1));
// console.log(str.substr(6, 0));
// console.log(str.substr(-4, 0));
// console.log(str.substr(-4, -2));
// console.log(str.substr(-4, 2));

// slice(start, [, end]) - from start to the end, but not including the end
// var str = 'Just a string';
// console.log(str.slice(0));
// console.log(str.slice(0, 4));
// console.log(str.slice(-1));
// console.log(str.slice(-4));
// console.log(str.slice(4, 0));
// console.log(str.slice(-4, 0));
// console.log(str.slice(-4, -2));
// console.log(str.slice(-4, -6));

// string comparison
// var str1 = 'Some long string';
// var str2 = 'W';
// console.log(str1 > str2);
// function compareStrings (str1, str2) {
//   let len = Math.max(str1.length, str2.length);
//   let sum1 = 0;
//   let sum2 = 0;

//   for (let i = 0; i < len; i += 1) {
//     console.log(str1[i] + ' -> ' + str1.charAt(i).charCodeAt(0));
//     console.log(str2[i] + ' -> ' + str2.charAt(i).charCodeAt(0));

//     sum1 += str1.charAt(i).charCodeAt(0) || 0;
//     sum2 += str2.charAt(i).charCodeAt(0) || 0;
//   }

//   console.log(sum1, sum2);
//   console.log(str1 > str2);
// }
// compareStrings('Some long string', 'Some short');

// String.fromCharCode(code)
// console.log(String.fromCharCode(148));
// console.log(String.fromCharCode(1048));
// console.log(String.fromCharCode(2011));
// console.log(String.fromCharCode(5484));
// console.log(String.fromCharCode(9742));
// console.log(String.fromCharCode(15474));

// local comparison
// console.log('Ё' > 'А');
// console.log('Ё'.charCodeAt(0));
// console.log('А'.charCodeAt(0));
// 0 - if equal, 1 if str1 > str2, -1 if str2 > str1
// console.log('Ё'.localeCompare('А'));

// Additional task
// Данная функция принимае строку arg1, в которой меняет все вхождения arg2 в строке arg1 на соответствующую цифру из arg3 в порядке нахождения arg2. Если вхождений arg2 в строке arg1 больше чем цифр в arg3, оставшиеся вхождения заменяются на arg4.
// Естественно функцию и ее параметры надо назвать понятно.
function funcName (arg1, arg2, arg3, arg4) {
  // code...
}
console.log(funcName('abc^de^^fg^hij', '^', '1594', ':')); // output - 'abc1de59fg4hij'
console.log(funcName('abc^de^^fg^hij', '^', '22', ':')); // output - 'abc2de2:fg:hij'
console.log(funcName('abcde^fghij', '^', '0123', ':')); // output - 'abcde0fghij'

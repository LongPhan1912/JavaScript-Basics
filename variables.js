/* example variable (using var) */
var num = 5; 

/* Let variable */
// let does NOT allow you to declare a variable twice 
// (you'll get a Duplicate Declaration error for doing so)
let arg = "Slim Shady";

/* ------------------------------- */
/* -------Constant variable------- */

// cannot be reassigned later
// naming convention: all capitalised / uppercased
const PI = 3.14;

const arr = [1, 2, 5]; // immutable array

// reassign the array
arr = [1, 2, 4]; // will not work

// update the array with bracket notation
arr[2] = 4; // will work

/* ------------------------------- */

var a;
a = 2;
a++;
// console.log(a+=10); // gives 13
// console.log(arg); 

/* ------------------------------- */
/* --------Math operations-------- */
/* addition. */
var b = 3;
b = a + b; // or b += a;

/* subtraction. */
var c = 4;
c -= 2;

/* multiplication. */
var d = 5;
d *= 2.5;

/* division. */
var e = 9;
e /= 3; // gives 3
e = e / 2; // gives 1.5

/* remainder. */
// console.log(42 % 5); // gives 2
/* ------------------------------- */


/* ------------------------------- */
/* ------------Strings------------ */
/* escaping literal quotes in strings */
var str = "This is a \"double quote\" inside of a \"double quote\"";
// console.log(str);

/* another way to do this is to use the backticks */
var newStr = `<a href="https://google.com" target="_blank">Link</a>`;
// console.log(newStr);

/* concatenating strings. */
var concatenate = "Today I am going to have ";
var append = "toast and butter.";
concatenate += append;
concatenate += "Tomorrow I will have a big bowl of Pho.";
// console.log(concatenate);

/* find the length of a string. */
var strLength = concatenate.length;
console.log(strLength);

/* find character within a string. */
var thirdChar = concatenate[2];
console.log(thirdChar); // should give the letter "d"
var lastChar = concatenate[concatenate.length - 1];
console.log(lastChar); // should give the full stop / dot

/* Please note that strings are immutable. 
Meaning if you wish to change one character within a string, you must change the whole string to accomodate that. */
/* ------------------------------- */


/* ------------------------------- */
/* -------------Arrays------------ */
var firstArr = ["John", "Quincy", "Adams", 6];
var nestedArr = [[0, 0], [8, 9], [11, 15]];
console.log(firstArr[0]); // should print out "John"
console.log(nestedArr[1]); // should print out [8, 9]

/* modify array. */
var secondArr = [1, 2, 5];
secondArr[secondArr.length - 1] = 4;
console.log(secondArr); // you can print the whole arr with a print statement haha, unlike Java lol

/* access elements in multidimensional arrays */
console.log(nestedArr[0][1]);

/* -------Works for both stacks and queues------- */
/* push elements into an array (to the back). */
var thirdArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
thirdArr.push([9, 10, 11]); // essentially pushing to the end / back of the array.
console.log(thirdArr);

/* -------Stack-like data structure------- */
/* remove an item from an array (from the back). */
var removeBack = thirdArr.pop();
console.log(removeBack); // pop the last element of the array (kind of like a stack): [9, 10, 11]

/* -------Queue-like data structure------- */
/* remove an item from an array (from the front). */
var removeFront = thirdArr.shift();
console.log(removeFront); // gives [0, 1, 2]
console.log(thirdArr); // gives [[3, 4, 5], [6, 7, 8]]

/* add element to the front of the array. */
thirdArr.unshift([-2, -1, 0]);
console.log(thirdArr);
/* ------------------------------- */

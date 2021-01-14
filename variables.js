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

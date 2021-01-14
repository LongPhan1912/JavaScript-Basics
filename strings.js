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
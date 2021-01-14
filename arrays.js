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

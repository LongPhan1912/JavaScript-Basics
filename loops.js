/* while loop. */
let i = 0;
let arr = [];
while (i < 5) {
    arr.push(i);
    i++;
}
console.log(arr); // prints [0, 1, 2, 3, 4]

/* for loops. */
// reverse loop
for (i = arr.length - 1; i > -1; i--) {
    console.log(arr[i]);
} //  output: 4, 3, 2, 1, 0

// forward loop
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // output: 0, 1, 2, 3, 4

/* do while loop */
let a = 0;
let b = 1;
do {
    a += b;
    b++;
    console.log(a, b);
} while (a < 5);
// output:
// 1, 2
// 3, 3
// 6, 4

/* nested for loop. */
let anotherArr = [2, 4, 6, 8, 10];
for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < anotherArr.length; y++) {
        console.log(`${arr[x]}-${anotherArr[y]}`);
        // print out all x-y coordinates
    }
}

/* advanced for loop */
let sum = 0;
var num;
for (num of arr) {
    sum += num;
}
console.log(sum); // output: 10
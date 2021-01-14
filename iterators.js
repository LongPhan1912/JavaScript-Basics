/* functions assigned to variables. */
let plusOne = (number) => { return number + 1; }
let original = 99;
console.log(plusOne(original)); // output: 100

/* callback function. */
// i.e. a function passed into another function as an argument
const isOdd = (number) => { return number % 2 != 0; }
let determineNumberIsOdd = (oddFunction, number) => {
    const returnVal = oddFunction(number);
    // template literals (kind of like printf() in C)
    console.log(`Is ${number} an odd number? ${returnVal}`);
}
// determineOddNumber is an example of a higher-order function 
// which is a function that accepts a function as a parameter
// and / or returns a function
determineNumberIsOdd(isOdd, 9); // output: "Is 9 an odd number? true"

/* reduce() method */
// iterates through an array and returns a single value
const numArr = [9, 8, 7, 6, 5];
const totalVal = numArr.reduce((sum, currVal) => {
    sum += currVal;
    return sum;
});

console.log(totalVal); // output: 35

/* forEach() method */
// executes callback function on each element of an array
// for this situation, we will print out each element within the numArr
numArr.forEach(number => console.log(number));

/* filter() method */
// executes callback function on each element of the array
// the callback function for each element must return either true or false
const filterArr = numArr.filter(number => {
    return number >= 7;
})
console.log(filterArr); // gives [9, 8, 7]

/* map() method */
// executes callback function on each element of the array
// returns a new array made up of the return values from the callback function
// the original array does not get altered
const beerBottles = numArr.map(num => {
    return num + " bottles of beer on the wall.\n Take one down, pass it around,\n";
});
console.log(beerBottles);

/* combination of filter and map functions */
const squareList = (arr) => {
    positiveInts = arr.filter(num => Number.isInteger(num) && num > 0);
    return positiveInts.map(elem => elem**2);
}
realNums = [0.6, 9.7, 283.0, 12, 452.242, 122, -11, 81];
console.log(squareList(realNums));
/* rest operator */
// a function that can take a variable number of arguments
// before:
const sum = (function() {
    return function sum(x, y) {
        const args = [x, y];
        return args.reduce((x, y) => {
            res = x + y;
            return res;
        })
    };
})();
// can only pass in 2 arguments
console.log(sum(1, 2)); 

// after:
const newSum = (function() {
    return function sum(...args) {
        return args.reduce((x, y) => x + y, 0);
    }
})();
// can now pass in any number of arguments
console.log(newSum(1, 2, 3, 4, 5)); 


/* spread operator */
// takes an array and spreads out into its individual parts
const arr1 = ["A", "B", "C", "D"];
let arr2, arr3;
(function() {
    arr2 = arr1; // arr2 will change as arr1 changes (shallow copy)
    arr3 = [...arr1]; // arr3 will not be changed as arr1 changes (deep copy)
    arr1[0] = "Z";
})();
console.log(arr2); // ["Z", "B", "C", "D"]
console.log(arr3); // ["A", "B", "C", "D"]
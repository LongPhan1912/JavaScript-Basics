/* function with a return statement. */
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(15)); // prints 8

/* function without a return statement will have the type undefined. */
function addTwo(num) {
    num += 2;
}
console.log(addTwo(0)); // prints undefined

/* messing with string concatenation. */
function madLibs(noun, adj, verb, adverb) {
    var res = "The " + adj + " " + noun + " " + verb + " " + adverb + ".";
    return res;
}
console.log(madLibs("dog", "happy", "ran", "cheerfully"));

/* messing with booleans. */
function winOrLose(celebrate) {
    if (celebrate) {
        return "Let's party all night!";
    } else {
        return "Back to practice tomorrow."
    }
}
console.log(winOrLose(true));

/* messing with dictionaries. */
winsDict = { "rock": "scissors", "paper": "rock", "scissors": "paper"};
function rockPaperScissors(playerOne, playerTwo) {
    if (playerOne == playerTwo) {
        return "It's a draw!";
    }
    if (playerTwo == winsDict[playerOne]) {
        return "Player One wins!";
    }
    return "Player Two wins!";
}
console.log(rockPaperScissors("rock", "paper")); // "Player Two Wins!"

/* messing with anonymous functions. */
// functions as a data type
var magic = function() {
    return new Date();
};

// shorter version
var newMagic = () => new Date();

const concatenateArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenateArrays([1, 2, 3], [4, 5, 6])); // prints [1, 2, 3, 4, 5, 6]

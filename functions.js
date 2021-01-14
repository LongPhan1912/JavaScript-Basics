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

/* messing with equality operators. */
// triple equals sign 
function strictlyEquals(one, two, three) {
    if (one === two && two === three) {
        return "All three are equal";
    } else if (two === three) {
        return "Only Two equals Three";
    } else if (one === two) {
        return "Only One equals Two";
    } else if (one === three) {
        return "Only One equals Three";
    } else {
        return "All are not equal";
    }
}
console.log(strictlyEquals("10", 10, 10)); // gives "Only Two equals Three"
console.log(strictlyEquals(10, "10", 10)); // gives "All are not equal"

// double equals sign
function doubleEquals(one, two) {
    if (one != two) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(doubleEquals(5, 5)); // prints "Equal"

// comparison operations
function greaterOrLessThan(one, two) {
    if (one > two) {
        return "One is greater than Two";
    } else if (one < two) {
        return "Two is greater than One";
    }
    return "Both are equal";
}
console.log(greaterOrLessThan(2, 7)); // prints "Two is greater than One"

/* messing with switch cases. */
function switchCasesBasic(val) {
    var ans = "";
    switch(val) {
        case "a":
            ans = "apple";
            break;
        case "b":
            ans = "banana";
            break;
        case "c":
            ans = "cherry";
            break;
        default:
            answ = "stuff";
            break;
    }
    return ans;
}
console.log(switchCasesBasic("a")); // prints "apple"

function switchCasesSequential(val) {
    var ans = "";
    switch(val) {
        case 1:
        case 2:
            ans = "Low";
            break;
        case 3:
        case 4:
            ans = "Mid";
            break;  
        case 5:
        case 6:
            ans = "High";
            break;  
    }
    return ans;
}
console.log(switchCasesSequential(5)); // prints "High"
console.log(switchCasesSequential(7)); // prints ""

/* messing with anonymous functions. */
// functions as a data type
var magic = function() {
    return new Date();
};

// shorter version
var newMagic = () => new Date();

const concatenateArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenateArrays([1, 2, 3], [4, 5, 6])); // prints [1, 2, 3, 4, 5, 6]

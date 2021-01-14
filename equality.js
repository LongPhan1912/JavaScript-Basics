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
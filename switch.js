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
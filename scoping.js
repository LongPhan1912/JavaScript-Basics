var globalVar = 10;

function fun1() {
    var scopedVar = 5; // scoped variable; can only be called within fun1()
    anotherGlobalVar = 2.5;
}
function fun2() {
    var output = "";
    if (typeof globalVar != "undefined") {
        output += "my globalVar: " + globalVar;
    }
    if (typeof anotherGlobalVar != "undefined") {
        output += " anotherGlobalVar: " + anotherGlobalVar;
    }
    console.log(output);
}
fun1();
fun2();

function fun3() {
    // local variable takes precendence over global variable
    var globalVar = 3;
    return globalVar;
}
console.log(fun3()); // will print 3 instead of 10
console.log(globalVar); // however, this would print 10 as we are calling the global variable
// good to know, but not a good practice to have 2 variables with the same name
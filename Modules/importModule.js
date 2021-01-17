// to import a specified variable / function from another module
import { capitalise } from "../exportModule.js"
// to import all
import * as capitaliseStrings from "../exportModule.js"
// import a default export
// no need for the curly braces
import foo from "../exportModule.js"
console.log(foo());

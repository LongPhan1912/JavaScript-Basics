/* sample object liternal (kind of like a dictionary or a map) */
var dog = {
    "name": "Ki",
    "age": 6,
    "fur": "yellow",
    "friends": ["Dom"],
    "my favorite dog": true
};

/* accessing object properties (or key-value pairs) */
// using dot notation
console.log(dog.name);
// using bracket notation
console.log(dog["friends"]);
console.log(dog["my favorite dog"]);
// non-existent JS properties
console.log(dog.legs); // returns undefined

/* setting object properties */
dog.age = 6.5;
console.log(dog.age);

/* adding properties to an object */
dog['bark'] = "woof!!!";

/* deleting properties from an object */
delete dog['bark'];

/* assignment to constant variable */
dog = {} // get a type error
// the reference to the object is bound to the variable
// thus it cannot be changed

/* checking if a property exists in an object */
function checkPropertyExists(property) {
    // usage of the ternary operator
    // i.e. condition ? statement-if-true : statement-if-false
    return dog.hasOwnProperty(property) ? dog[property] : "Not Found";
}
console.log(checkPropertyExists("age")); // gives 6

/* nested object (resembling JSON) */
var storage = {
    "car": {
        "inside": {
            "glove box": "maps"
        },
        "outside": {
            "trunk": "groceries"
        }
    }
};
console.log(storage["car"]["inside"]["glove box"]); // gives "maps"

/* for ... in loop */
for (let key in storage["car"]) {
    console.log(`${key}: ${storage["car"][key]}`);
}

/* freezing a constant variable (you don't want your object to change) */
function freezeObj() {
    "use strict"; // you cannot use undeclared variables
    const CONSTANT = { "PI": 3.14 };
    Object.freeze(CONSTANT);
    try {
        CONSTANT.PI = 3.0;
    } catch(e) {
        console.log(e);
    }
    return CONSTANT.PI;
}
const PI = freezeObj(); // you get an object error

/* object methods */
const groceries = {
    location: "Walmart",
    list: ["eggs"],
    addToList(item) {
        // the keyword 'this' refers to a method's calling object
        // in this case, it's the 'groceries' object itself
        // so that you can access properties belonging to that object
        this.list.push(item);
        return this.list;
    },
    // anonymous arrow function
    deleteFromList: (item) => {
        var newList = groceries.list.filter(x => x !== item);
        return newList;
    },
    getLocation: () => {
        return this.location;
    }
}
console.log(groceries.getLocation());
console.log(groceries.addToList("milk")); // output: ["eggs", "milk"]
console.log(groceries.deleteFromList("bananas")); // output same as the line above
console.log(groceries.deleteFromList("milk")); // output: ["eggs"]

/* shorthand property name syntax for object creation */
const activity = 'sleeping';
const panda = { activity };
console.log(panda); // { activity: 'sleeping' };

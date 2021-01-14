class Cat {
    // constructor method
    // called when the object is instantiated
    // set initial values for an object
    constructor(setName, setBreed) { 
        // use the underscore to differentiate between method names and variable names
        // indicates the variables are private
        this._name = setName;
        this._breed = setBreed;
    }
    // class method
    // methods in classes do not have any separators between them
    introduceCat() {
        console.log(`This is ${this._name}. It's a ${this._breed}.`);
    }
    // static method (called on the class itself)
    // in this case, meow() applies to every Cat object
    static meow() {
        console.log("Meow Meow Meow Cat Lovers");
    }
    // setters
    set name(newName) {
        this._name = newName;
    }
    set breed(newBreed) {
        this._breed = newBreed;
    }
    // getters
    get name() {
        return this._name;
    }
    get breed() {
        return this._breed;
    }
}

// new instances of a class are created with the 'new' keyword
const leoTheCat = new Cat("Leo", "British Shorthair");
leoTheCat.introduceCat(); // call method using dot notation
Cat.meow(); // calls the static method (on the class itself, not the object variable)


/* inheritance -- a child class extends its parent class */
// via the 'extends' keyword
class CatOwl extends Cat {
    constructor(setName, setBreed, setCountryOfOrigin) {
        // calls the constructor of the parent class
        // using the 'super()' method
        super(setName, setBreed);
        this._countryOfOrigin = setCountryOfOrigin;
    }
    metaJoke() {
        console.log("This was a reference from Avatar: The Last Airbender")
    }
    // setter
    set countryOfOrigin(newOrigin) {
        this._countryOfOrigin = newOrigin;
    }
    // getter
    get countryOfOrigin() {
        return this._countryOfOrigin;
    }
}
const stanTheCatOwl = new CatOwl("Stanford", "MadeUpBreed", "England");
// invokes the getter of the parent class
console.log(stanTheCatOwl.name);
console.log(stanTheCatOwl.breed);
// inherits the functions of its parent
stanTheCatOwl.introduceCat();
CatOwl.meow();
// with original methods of its own
stanTheCatOwl.metaJoke();
console.log(stanTheCatOwl.countryOfOrigin);
stanTheCatOwl.name = "Stanley";
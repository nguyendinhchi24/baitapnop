class Person {
    constructor(name) {
        this._name = name;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    walk() {
        console.log(`${this._name} is walking.`);
    }
}

class Programmer extends Person {
    constructor(name, programmingLanguage) {
        super(name);
        this._programmingLanguage = programmingLanguage;
    }

    // Getter for programmingLanguage
    get programmingLanguage() {
        return this._programmingLanguage;
    }

    // Setter for programmingLanguage
    set programmingLanguage(newLanguage) {
        this._programmingLanguage = newLanguage;
    }

    writeCode() {
        console.log(`${this._name} is writing code in ${this._programmingLanguage}.`);
    }
}

// Create instances of Person and Programmer
const person = new Person("Alice");
const programmer = new Programmer("Bob", "JavaScript");

// Call methods of Person and Programmer
person.walk();
programmer.walk(); // Inherited method
programmer.writeCode();

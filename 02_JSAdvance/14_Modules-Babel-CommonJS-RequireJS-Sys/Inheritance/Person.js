
let Entity = require('./Entity');

class Person extends Entity {
    constructor(personName, phrase, dog){
        super(personName);
        this.phrase = phrase;
        this.dog = dog;
    }

    saySomething() {
        let saying = this.dog.saySomething()
        return `${this.name} says: ${this.phrase}${this.dog.saySomething()}`
    }
}

module.exports = Person;
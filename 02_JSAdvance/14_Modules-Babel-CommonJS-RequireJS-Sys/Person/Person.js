
class Person {
    constructor(name) {
        this.name = name;
        return this
    }

    toString() {
        return `I\'m ${this.name}`;
    }
}

module.exports = Person;
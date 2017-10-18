
let Person = require('./Person');

class Student extends Person {
    constructor(studentName, phrase, dog, id){
        super(studentName, phrase, dog);
        this.id = id
    }

    saySomething() {
        let saying = this.dog.saySomething()
        return `Id: ${this.id} ${super.saySomething()}`
    }
}

module.exports = Student;
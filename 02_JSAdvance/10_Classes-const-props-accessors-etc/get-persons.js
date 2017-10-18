
let Person = require('./person')

function getPersons() {
    let maria = new Person(`Maria`, `Petrova`, 22, `mp@yahoo.com`)
    let softuni = new Person(`SoftUni`)
    let stephan = new Person(`Stephan`, `Nikolov`, 25);
    let peter = new Person(`Peter`, `Kolev`, 24,`ptr@gmail.com`)

    return [ maria, softuni, stephan, peter ]
}

console.log(getPersons().join(`, `))
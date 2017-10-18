
let Dog = require('./Dog');
let Entity = require('./Entity');
let Person = require('./Person');
let Student = require('./Student');

let myDog = new Dog("Franki");
let moa = new Person("Pesho", "come on over ", myDog);
let nerd = new Student("Pesho", "come on over ", myDog, 1);

console.log(myDog.saySomething())
console.log(moa.saySomething())
console.log(nerd.saySomething())

console.log(nerd instanceof Person)
console.log(nerd instanceof Student)
console.log(nerd instanceof Entity)
console.log(nerd instanceof Dog)

// result.Entity = Entity;
// result.Dog = Dog;
// result.Person = Person;
// result.Student = Student;

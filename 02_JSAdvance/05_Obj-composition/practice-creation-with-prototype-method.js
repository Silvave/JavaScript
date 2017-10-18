
const Dog = function() {
    Dog.prototype.breed = `bulldog`;
    Dog.prototype.sound = `woof`;
    Dog.prototype.talk = function () {
        console.log(this.sound);
    };
    Dog.prototype.type = function () {
        console.log(`I'm a ${this.breed} and my name is ${this.name}`)
    };
};

const Cat = function() {
    Cat.prototype.poroda = function () {
        this.breed = `munchkin cat`;
        return this
    }
    Cat.prototype.sound = `meow`;
    Cat.prototype.talk = function () {
        console.log(this.sound);
    };
    Cat.prototype.type = function () {
        console.log(`I'm a ${this.breed} and my name is ${this.name}`)
    };
};

function Tortoise() {
    let sound = `graooo`;
    return {
        talk: () => console.log(sound)
    }
}

class TortoiseS {
    constructor() {
        this.sound = `graoooooouh`
    }
    talk() {
        console.log(this.sound)
    }
}

let myDog = new Dog;
myDog.name = `Franky`;

myDog.talk();
myDog.type();


let myCat = new Cat().poroda();
myCat.name = `Joe`;

myCat.talk();
myCat.type();

let myTortoise = Tortoise();
myTortoise.name = `Johny`
myTortoise.talk();
Object.setPrototypeOf(myTortoise, new Dog)

let myTrot2 = new TortoiseS();
myTrot2.talk()

console.log(Object.getPrototypeOf(myTortoise))
console.log(Object.getPrototypeOf(myTrot2))
myTortoise.type()
console.log(`---------------`)
console.log(Object.getPrototypeOf(Cat) == Function.prototype)

// console.log(myDog)
// console.log(myCat)


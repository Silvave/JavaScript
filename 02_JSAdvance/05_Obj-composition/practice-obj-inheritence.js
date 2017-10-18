// function solve() {
//     let talk = function() {
//         let that = this;
//         console.log(this.sound)
//     }
//
//     let dog = {
//         sound: `woof`,
//         talk
//     };
//
//     let cat = {
//         sound: `meow`,
//         talk
//     };
//
//     talk()
//
//     cat.talk()
//
//     let boundCat = cat.talk.bind(dog);
//
//     boundCat.talk();
//
//     return dog.talk()
// }
//
//
// solve()


const mixinAnimal = (function(){
    let asd = `animal`;

    function specie() {
        this.species = asd;
        return this
    }

    function init(type) {
        this.type = type;
        return this
    }
    function talk(sound) {
        this.sound = sound;
        return this
    }
    function bark() {
        console.log(this.sound)
    }
    return { specie, init, talk, bark }
})();

let cat = Object.create(mixinAnimal).init(`scottishBla`).talk(`meow`).specie();

let dog = {
    foot: `small`,
    feet: 4
};

Object.setPrototypeOf(dog, mixinAnimal).init(`bulldog`).talk(`woof`)
// dog.__proto__ = mixinAnimal

// dog.init(`bulldog`);
// dog.talk(`woof`);
dog.bark();
dog.specie()
console.log(dog)
// dog.foot = `small`;
// dog.feet = 4;

// console.log(dog.hasOwnProperty(`foot`));
// console.log(dog.type);
// console.log(dog.hasOwnProperty(`sound`));
// console.dir(dog);
// console.dir(Object.getPrototypeOf(dog).specie);

console.log(cat)
let str = ``
for (let prop in cat) {
    str += prop + ` `
}
console.log(str)
// Object.getPrototypeOf(cat).specie = `dragon`
// console.log(cat.species)
// cat.bark()
// console.log(cat.species)
let asd = `type`
console.log(cat.hasOwnProperty(asd))

let asdf = { a: `a`, s: `w`}
// var map = new Map(Object.entries(asdf))
// console.log(map)

console.log(typeof Array.from(Object.keys(cat)));

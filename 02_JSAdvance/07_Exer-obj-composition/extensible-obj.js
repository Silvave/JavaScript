
let CreateObj = (function() {
    let id = 0;

    function extend(template) {
        for (let prop in template) {
            if (!this.hasOwnProperty(prop)) {
                if (typeof template[prop] == `function`){
                    Object.getPrototypeOf(this)[prop] = template[prop]
                } else {
                    this[prop] = template[prop]
                }
            }
        }
        return this
    }

    return function() {  return {id: ++id, extend } }
})();

let dog = { name: `Franki`, breed: `bulldog`, bark: function() {
    return `The ${this.breed} ${this.name} barks!`
} };

let cat = { name: `Jacky`, breed: `scottish fold`, bark: function() {
    return `The ${this.breed} ${this.name} meows!`
} };

console.log(dog.bark());

let myDog = CreateObj().extend(dog);
let myCat = CreateObj();
myCat.extend(cat);

console.log(myDog.bark(), myDog.id);
console.log(myCat.bark(), myCat.id);


class Frog {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }
}

function extendClass(classToExtend) {
    classToExtend.prototype.species = `Human`;
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    };
    return this
}



let f = new Frog(`Drank`, `drank@swamp.bg`)

extendClass(Frog)

let f2 = new Frog(`Frank`, `puddle@yahoo.com`)

console.log(f.species)
console.log(f.toSpeciesString())
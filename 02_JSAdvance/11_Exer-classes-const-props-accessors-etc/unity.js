
class Rat {
    constructor(name) {
        this.name = name;
        this.united = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat){
            this.united.push(otherRat)
        }
    }

    getRats() {
        return this.united
    }

    toString() {
        return `${this.name}\n` + this.united.map(rat => `##${rat.name}`).join(`\n`)
    }
}

let ratKing = new Rat(`Billy`)
let notRatKing = new Rat(`Misha`)
let ratKingWifu = new Rat(`Silvana`)
let ratPriest = new Rat(`Vladika`)
let random = { name: `Pesho`}

ratKing.unite(notRatKing)
ratKing.unite(ratKingWifu)
ratKing.unite(ratPriest)
ratKing.unite(random)

console.log(ratKing)
// console.log(ratKing.getRats())
console.log(ratKing.toString())

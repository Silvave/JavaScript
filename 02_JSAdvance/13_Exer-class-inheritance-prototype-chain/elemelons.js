
function solve() {
    class Melon {
        constructor(weight, melonSort){
            if (new.target === Melon) {
                throw new Error(`Abstract class cannot be instantiated directly`)
            }
            this.weigth = weight
            this.melonSort = melonSort
            this.elementIndex
        }

        get elementIndex(){
            return this.weigth * this.melonSort.length
        }

        toString() {
            // let regex = /(.+)melon/
            // let match = this.constructor.name.match(regex)
            return [
                `Element: ${this.element}`,
                `Sort: ${this.melonSort}`,
                `Element Index: ${this.elementIndex}`].join(`\n`)
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = `Water`
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort)
            this.element = `Fire`
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort)
            this.element = `Earth`
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort)
            this.element = `Air`
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort){
            super(weight, melonSort)
            this.melonArr = [`Fire`, `Earth`, `Air`, `Water`]
        }

        morph() {
            let morphElem = this.melonArr.shift();
            this.element = morphElem;
            this.melonArr.push(morphElem)
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}

let Watermelon = solve().Watermelon
let Firemelon = solve().Firemelon
let Airmelon = solve().Airmelon
let Earthmelon = solve().Earthmelon
let Melon = solve().Melon
let Melolemonmelon = solve().Melolemonmelon

let wMelon = new Watermelon(100, `bigwashaa`)
let fMelon = new Firemelon(100, `bigwashaa`)
let aMelon = new Airmelon(100, `bigwashaa`)
let eMelon = new Earthmelon(100, `bigwashaa`)
let morphMelon = new Melolemonmelon(100, `bigwashaa`)
// let melon = new Melon(100, `bigwashaa`)
//
// console.log(wMelon.toString())
// console.log(fMelon.toString())
// console.log(aMelon.toString())
// console.log(eMelon.toString())
console.log(morphMelon.toString())
morphMelon.morph()
console.log(morphMelon.toString())
morphMelon.morph()
console.log(morphMelon.toString())
morphMelon.morph()
console.log(morphMelon.toString())
morphMelon.morph()
console.log(morphMelon.toString())
morphMelon.morph()
console.log(morphMelon.toString())

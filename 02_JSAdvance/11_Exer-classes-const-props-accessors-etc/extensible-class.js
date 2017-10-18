
//Judge solution
let ExtensiblePart2 = (function() {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = ++id
        }

        extend(template) {
            for (let prop in template){
                if(this.hasOwnProperty(prop)){
                    continue
                }
                if (typeof template[prop] == `function`){
                    Extensible.prototype[prop] = template[prop]
                }
                else {
                    this[prop] = template[prop]
                }
            }
            return this
        }

    }
})();

let myObjPart2 = new ExtensiblePart2()
let myObjPart3 = new ExtensiblePart2()
let obj = {name: `Frank`, job: `mountaineer`, climbed: function() { return `k2`}};

myObjPart2.extend(obj)
console.log(myObjPart2.climbed())
console.log(myObjPart3)

// Part2 - outside globally invoked
let id = (function(){
    let id = 0;
    return function() {
        return ++id
    }
})();

class Extensible {
    constructor() {
        this.id = id()
    }

    extend(template) {
        for (let prop in template){
            if(this.hasOwnProperty(prop)){
                continue
            }
            if (typeof template[prop] == `function`){
                Extensible.prototype[prop] = template[prop]
            }
            else {
                this[prop] = template[prop]
            }
        }
        return this
    }

}

let myObj = new Extensible()
let myObj2 = new Extensible()

myObj.extend(obj)
console.log(myObj)
console.log(myObj2)
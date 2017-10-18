
function solve() {
    class Figure {
        constructor(){
            if (new.target == Figure) {
                throw new Error(`Can not be instantiated`)
            }
        }

        get area() {
            return undefined
        }

        toString(){
            return this.constructor.name
        }
    }

    class Circle extends Figure {
        constructor(radius){
            super()
            this.radius = radius
        }

        get area() {
            return Math.PI * this.radius * this.radius
        }

        toString() {
            return `${super.toString()} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height){
            super()
            this.width = width
            this.height = height
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`
        }
    }

    return { Figure, Circle, Rectangle }
}

let Figure = solve().Figure
let Circle = solve().Circle
let Rectangle = solve().Rectangle

// let f = new Figure();
let c = new Circle(5);
let r = new Rectangle(4, 8);

console.log(c.toString())
console.log(c.area)
console.log(r.area)
console.log(r.toString())

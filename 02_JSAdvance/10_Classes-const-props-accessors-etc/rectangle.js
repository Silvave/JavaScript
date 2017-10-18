
class Rectangle{
    constructor(width, height, color) {
        [this.width, this.height, this.color ] = [width, height , color]
    }

    calcArea() {
        return this.width * this.height
    }
}

let rec = new Rectangle(4, 5, `blue`);

module.exports = Rectangle

console.log(rec.width)
console.log(rec.height)
console.log(rec.color)
console.log(rec.calcArea())

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return 2 * this.radius
    }

    set diameter(diam) {
        this.radius = diam / 2
    }

    get area(){
        return Math.PI * this.radius * this.radius
    }
}

let c = new Circle(2);

console.log(c.radius)
console.log(c.diameter)
console.log(c.area)

c.diameter = 1.6
console.log(c.radius)
console.log(c.diameter)
console.log(c.area)

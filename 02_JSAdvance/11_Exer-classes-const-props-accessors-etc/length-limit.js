
class Stringer {
    constructor(str, lenght) {
        this.innerString = str;
        this.innerLength = lenght;
    }

    increase(length) {
        this.innerLength += length
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength - length < 3){
            this.innerLength = 0
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength){
            return this.innerString.substr(0, this.innerLength) + `...`
        }
        return `${this.innerString}`
    }
}

let s = new Stringer("Viktor", 6);

s.decrease(1)

console.log(s.innerLength)
console.log(s.toString())

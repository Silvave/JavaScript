
function solve() {
    class Balloon {
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this._ribbon = { color: ribbonColor, length: ribbonLength };
            this.ribbon
        }

        get ribbon(){
            return this._ribbon
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
            this.text
        }

        get text() {
            return this._text
        }
    }
    return { Balloon, PartyBalloon, BirthdayBalloon }
}

let Balloon = solve().Balloon;
let PartyBalloon = solve().PartyBalloon;
let BirthdayBalloon = solve().BirthdayBalloon;

let b = new Balloon(`blue`, `100`)
let partyB = new PartyBalloon(`red`, `200`, `blue`, 100)
let birthB = new BirthdayBalloon(`green`, `300`, `yellow`, 120, `Happy birthday!`);

console.log(b)
console.log(partyB.ribbon)
console.log(birthB.text)
console.log(birthB.ribbon)

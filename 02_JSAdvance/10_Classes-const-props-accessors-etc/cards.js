
let result = (function() {
    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    let Suits = {
        SPADES: "\u2660",
        HEARTS: "\u2665",
        DIAMONDS: "\u2666",
        CLUBS: "\u2663"
    };

    function checkSuit(suit) {
        return Object.keys(Suits).map(k => Suits[k]).includes(suit)
    }

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face(){
            return this._face
        }

        set face(face){
            if (!Faces.includes(face)) {
                throw new TypeError(`Invalid face parameter!`)
            }
            this._face = face
        }

        get suit(){
            return this._suit
        }

        set suit(suit){
            if (!checkSuit(suit)) {
                throw new TypeError(`Invalid suit parameter!`)
            }
            this._suit = suit
        }

        toString() {
            return `${this.face}${this.suit}`
        }
    }

    return { Card, Suits }
})();

let Card = result.Card;
let Suits = result.Suits;
let card = new Card("Q", Suits.CLUBS);


console.log(card.toString())
console.log(card.face)
console.log(card.suit)
card.suit = Suits.DIAMONDS
card.face = "2"
console.log(card.toString())
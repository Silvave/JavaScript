class Card {
    constructor(face, suit) {
        this.faces = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
        ]
        this.suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        this.face = face
        this.suit = this.suits[suit]

        if (!this.faces.includes(this.face) || !this.suit) {
            throw new TypeError('Error')
        }
    }

    get suit() {
        return this._suit
    }

    set suit(suit) {
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if ()
    }

    toString() {
        return this.face + this.suit
    }
}

console.log('' + new Card('A', 'S'));
console.log('' + new Card('10', 'H'));
console.log('' + new Card('1', 'C'));
function printDeckOfCards(cards) {
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
                throw new TypeError(`Invalid card: ${face + suit}`)
            }
        }

        toString() {
            return this.face + this.suit
        }
    }

    let cardsToPrint = cards.map(card => {
        let cardArrData = card.split('')

        let suit = cardArrData.pop()
        let face = cardArrData.join('')

        return new Card(face, suit)
    })

    console.log(cardsToPrint.join(' '))
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);

printDeckOfCards(['5S', '3D', 'QD', '1C']);
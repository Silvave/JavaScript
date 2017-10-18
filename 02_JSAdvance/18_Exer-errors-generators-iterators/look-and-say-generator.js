function* lookAndSay(input) {
    let sequence = input.toString()

    function checkSequence() {
        let newSequence = ''
        let currentChar = sequence[0]
        let currentCharOccurrences = 1
        
        for (let i = 1; i < sequence.length; i++) {
            if (sequence[i] === currentChar) {
                currentCharOccurrences++
            } else {
                newSequence += currentCharOccurrences + currentChar

                currentChar = sequence[i]
                currentCharOccurrences = 1
            }
        }

        // Adding last occurred sequence of same chars
        newSequence += currentCharOccurrences + currentChar

        return newSequence
    }

    while (true) {
        sequence = checkSequence()

        yield sequence
    }
}

// Judge tests
// let lookSequence = lookAndSay(1);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);

let lookSequence = lookAndSay(113);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);

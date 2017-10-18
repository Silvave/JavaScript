function countWords([input]) {
    let wordsArr = input.toLowerCase().split(/\W+/).filter(e => e !== '')

    let wordCountMap = wordsArr.reduce((map, word) => {
        if (!map.has(word)) {
            map.set(word, 0)
        }
        map.set(word, map.get(word) + 1)

        return map
    }, new Map())

    for (let key of [...wordCountMap.keys()].sort()) {
        console.log(`'${key}' -> ${wordCountMap.get(key)} times`)
    }
}

// Judge tests
// countWords(['Far too slow, you\'re far too slow.'])
countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'])


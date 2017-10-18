function countWordsInText([input]) {
    let wordsArr = input.split(/\W+/).filter(e => e !== '')

    let wordCountObj = wordsArr.reduce((obj, word) => {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0
        }
        obj[word]++

        return obj
    }, {})

    return JSON.stringify(wordCountObj)
}

let result = countWordsInText(['Far too slow, you\'re far too. slow.'])
console.log(result)

result = countWordsInText(['JS devs use Node.js for server-side JS.-- JS for devs'])
console.log(result)
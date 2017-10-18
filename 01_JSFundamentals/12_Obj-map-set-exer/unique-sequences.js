function uniqueSequencesOfArrays(arrInput) {
    return arrInput
        .map(JSON.parse)
        .map(arr => arr.map(Number).sort((a, b) => b - a))
        .sort((a, b) => a.length - b.length)
        .map(arr => `[${arr.join(', ')}]`)
        .filter((e, i, arr) => i === arr.indexOf(e))
        .join('\n')
}

// Judge tests
let output = uniqueSequencesOfArrays([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
])

console.log(output)
//
// let output = uniqueSequencesOfArrays([
//     '[7.14, 7.180, 7.339, 80.099]',
//     '[7.339, 80.0990, 7.140000, 7.18]',
//     '[7.339, 7.180, 7.14, 80.099]'
//
// ])
//
// console.log(output)
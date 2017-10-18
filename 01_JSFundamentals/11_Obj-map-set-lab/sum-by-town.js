function sumByTowns(inputArr) {
    let town

    let townsSumsObj = inputArr.reduce((result, item, index) => {
        if (index % 2 === 0) {
            town = item
        } else {
            if (!result.hasOwnProperty(town)) {
                result[town] = 0
            }
            result[town] += Number(item)
        }
        return result
    }, {})

    return JSON.stringify(townsSumsObj)
}

// Judge test
let output = sumByTowns(['Sofia','20','Varna','3','Sofia','5','Varna','4'])

console.log(output)
function parseTownsToJSON(input) {
    let arr = input.map(e => e.split(/\s*\|\s*/).filter(e => e !== ""))
    let tableColumns = arr.shift()
    let numberRegex = /\d+(?:\.\d+)/

    let resultTable = arr.map(row => row.reduce((result, item, index) => {
        let columnName = tableColumns[index]
        let match = item.toString().match(numberRegex)

        if (match) {
            result[columnName] = Number(item)
        } else {
            result[columnName] = item
        }

        return result
    }, {}))

    return JSON.stringify(resultTable)
}

let output = parseTownsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])

console.log(output)
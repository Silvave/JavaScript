function bunnyKills(arrInput) {
    // Remove last row because of Judge
    arrInput.pop()

    let bombBunniesCoordinates = arrInput.pop()
    bombBunniesCoordinates = bombBunniesCoordinates
        .split(/\s+/)
        .map(c => c.split(',').map(Number))

    let hangerMatrix = arrInput.map(row => row.split(/\s+/).map(Number))

    let snowball = {
        totalDmg: 0,
        kills: 0
    }

    for (let [x, y] of bombBunniesCoordinates) {
        let bombBunny = hangerMatrix[x][y]

        if (bombBunny <= 0) {
            continue
        }

        snowball.totalDmg += bombBunny
        snowball.kills++

        let startCol = y - 1 < 0 ? y : y - 1
        let endCol = y + 2

        for (let row = x - 1; row <= x + 1; row++) {
            if (row < 0 || row > hangerMatrix.length - 1) {
                continue
            }

            // Instead of using the "for" loop for columns
            let updatedRow = hangerMatrix[row]
                .slice(startCol, endCol)
                .map(bunny => bunny - bombBunny)

            let deleteCount = updatedRow.length

            let argsForSplice = [startCol, deleteCount].concat(updatedRow)

            Array.prototype.splice.apply(hangerMatrix[row], argsForSplice)

            // for (let col = y - 1; col <= y + 1; col++) {
            //     if (col < 0 || col > hangerMatrix[row].length - 1) {
            //         continue
            //     }
            //
            //     let currentBunny = hangerMatrix[row][col]
            //
            //     if (currentBunny - bombBunny < 0) {
            //         hangerMatrix[row][col] = 0
            //     } else {
            //         hangerMatrix[row][col] -= bombBunny
            //     }
            // }
        }
    }

    hangerMatrix.forEach(row => row.forEach(bunny => {
        if (bunny > 0) {
            snowball.totalDmg += bunny
            snowball.kills++
        }
    }))

    console.log(snowball.totalDmg)
    console.log(snowball.kills)
}

// Judge tests
// bunnyKills([
//     '10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0, 2,2',
//     ''
// ])

bunnyKills([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 1,2 0,1',
    ''
])
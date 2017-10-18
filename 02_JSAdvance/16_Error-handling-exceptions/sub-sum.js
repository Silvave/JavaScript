function subSum(arrInput, startIdx, endIdx) {
    let startNumIdx = Number(startIdx)
    startNumIdx = startNumIdx < 0 ? 0 : startNumIdx
    endIdx = Number(endIdx)

    let numbersArr
    try {
        numbersArr = arrInput.map(Number)
    } catch(err) {
        console.log('NaN')
        return
    }

    let resultNumber = numbersArr
        .slice(startNumIdx, endIdx + 1)
        .reduce((sum, a) => sum + a, 0)

    console.log(resultNumber)
}

// Tests
subSum([10, 20, 30, 40, 50, 60], 3, 300)

subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)

subSum([10, 'twenty', 30, 40], 0, 2)

subSum([], 1, 2)

subSum('text', 0, 2)

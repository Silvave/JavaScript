function removeXShapes(arr) {
    let oldMatrix = arr.map(row => row.split(``));
    let filteredArr = arr.map(row => row.split().map(ch => ch.toLowerCase()).join(``));

    for (let row = 0; row < filteredArr.length - 2; row++) {
        for (let col = 0; col < filteredArr[row].length - 2; col++) {
            if (filteredArr[row][col] === filteredArr[row][col+2]){
                checkForX(filteredArr,row,col,filteredArr[row][col])
            }
        }
    }

    function checkForX(array, row, col, baseValue) {
        let first = array[row+1][col+1];
        let second = array[row+2][col];
        let third = array[row+2][col+2];

        if ( first === second && first === third && first === baseValue){
            replaceWithUndef(row, col);
        }
    }

    function replaceWithUndef(row, col) {
        oldMatrix[row][col] = undefined;
        oldMatrix[row][col+2] = undefined;
        oldMatrix[row+1][col+1] = undefined;
        oldMatrix[row+2][col] = undefined;
        oldMatrix[row+2][col+2] = undefined;
    }

    let resultStr = oldMatrix.map(row => row.join(``)).join(`\n`)

    console.log(resultStr)
}

// Judge tests
removeXShapes([`abnbjs`,`xoBab`,`Abmbh`,`aabab`,`ababvvvv`]);
console.log(`-`.repeat(30));

removeXShapes([
    `8888888`,
    `08*8*80`,
    `808*888`,
    `0**8*8?`]);
console.log(`-`.repeat(30));

removeXShapes([
    `^u^`,
    `j^l^a`,
    `^w^WoWl`,
    `adw1w6`,
    `(WdWoWgPoop)`]);
console.log(`-`.repeat(30));

removeXShapes([
    `puoUdai`,
    `miU`,
    `ausupirina`,
    `8n8i8`,
    `m8o8a`,
    `8l8o860`,
    `M8i8`,
    `8e8!8?!`]);

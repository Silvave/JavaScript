function decodeTheMessage(arr) {
    let numArr = arr.map(row => row.split(/\s+/g).map(Number));
    let [ nLines ] = numArr.shift();

    let template = [];
    for (let count = 0; count < nLines; count++){
        template.push(numArr.shift());
    }

    let templateMatrix = [` `];
    for (let i = 0; i < 26; i++) {
        templateMatrix.push(String.fromCharCode(65+i));
    }

    for (let row = 0; row < numArr.length; row++) {
        for (let col = 0; col < numArr[row].length; col++) {
            numArr[row][col] += template[row%nLines][col%template[0].length];
            numArr[row][col] %= templateMatrix.length;
            numArr[row][col] = templateMatrix[numArr[row][col]]
        }
    }

    console.log(numArr.map(row => row.join(``)).join(``))
}

// Judge tests
decodeTheMessage([
    '2',
    '59    36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);
console.log(`-`.repeat(30));
decodeTheMessage([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);
console.log(`-`.repeat(30));
decodeTheMessage([
    `1`,
    `1 3 13`,
    `12 22 14 13 25 0 4 24 23`,
    `18 24 2 25 22 0 0 11 18`,
    `8 25 6 26 8 23 13 4 14`,
    `14 3 14 10 6 1 6 16 14`,
    `11 12 2 10 24 2 13 24 0`,
    `24 24 10 14 15 25 18 24 12`,
    `4 24 0 8 4 22 19 22 14`,
    `0 11 18 26 1 19 18 13 15`,
    `8 15 14 26 24 14 26 24 14`
]);

function isDiagonalSumsEquel(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(` `).map(Number)
    }

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        rightDiagonalSum += matrix[row][row];
        leftDiagonalSum += matrix[row][matrix[row].length-row-1];
    }

    if (rightDiagonalSum != leftDiagonalSum){
        return matrix.map(r => r.join(` `)).join(`\n`)
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let notDiagonalCell = row != col && row != matrix[row].length-1-col;

            if (notDiagonalCell){
                matrix[row][col] = rightDiagonalSum;
            }
        }
    }

    return matrix.map(r => r.join(` `)).join(`\n`)
}


console.log(isDiagonalSumsEquel(['5 3 12 3 1','11 4 23 2 5','101 12 3 21 10','1 4 5 2 2','5 22 33 11 1']));
console.log(`-`.repeat(30));
console.log(isDiagonalSumsEquel(['1 1 1','1 1 1','1 1 0']));
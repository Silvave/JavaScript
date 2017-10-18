
function isMatrixMagical(arr) {
    let matrix = arr.map(str => str.split(` `).map(Number));

    let magicNum = matrix[0].reduce((a,b) => a+b);
    let listNums = []
    for (let i in matrix) {
        listNums.push(matrix[i].reduce((a,b) => a+b));
        listNums.push(matrix.map(x => x[i]).reduce((a,b) => a+b));

    }
    listNums.sort((a,b) => a-b)
    return listNums[0] == listNums[listNums.length-1]
}


console.log(isMatrixMagical([`4 5 6`,`6 5 4`,`5 5 5`]));
console.log(isMatrixMagical(['11 32 45','21 0 1','21 1 1']));
console.log(isMatrixMagical(['1 0 0','0 0 1','0 1 0']));
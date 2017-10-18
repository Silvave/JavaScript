
function Orbit(input) {
    let matrixDimensions = input[0].split(' ').map(Number);
    let shotCellCoordinates = input[1].split(' ').map(Number);

    let hitRow = shotCellCoordinates[0];
    let hitCol = shotCellCoordinates[1];

    function fillMatrix(rows,columns) {
        let newMatrix=[];
        for(let i =0;i<rows;i++){
            newMatrix.push([]);
            for(let j = 0;j<columns;j++){
                newMatrix[i].push(0);
            }
        }
        return newMatrix
    }

    function processMatrix(matrix, hitRow, hitCol) {
        for(let row =0;row<matrix.length;row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                let currentValue = Math.max(Math.abs(hitRow-row),Math.abs(hitCol-col))+1;
                matrix[row][col] = currentValue;
            }
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(function(row){
            console.log(row.join(" "))
        });
    }
    let matrix = fillMatrix(matrixDimensions[0],matrixDimensions[1]);
    processMatrix(matrix,hitRow,hitCol);
    printMatrix(matrix);
}

Orbit([`4 4`,`0 0`]);
console.log(`-`.repeat(30));
Orbit([`5 5`,`2 2`]);
console.log(`-`.repeat(30));
Orbit([`3 3`,`2 2`]);
console.log(`-`.repeat(30))
Orbit([`6 11`,`-1 5`]);
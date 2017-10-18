
function createStarOrbit(arr) {
    let [ row, col ] = arr[0].split(` `).map(Number);
    let [ x, y ] = arr[1].split(` `).map(Number);
    
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(col);
    }

    function checkMatrix() {
        for (let arrNums of matrix){
            for(let num of arrNums){
                if (typeof(num) !== "number"){
                    return false
                }
            }
        }
        return true
    }

    let orbitNum = 0;
    while (true){
        for (let i = x-orbitNum; i <= x+orbitNum; i++) {
            for (let j = y-orbitNum; j <= y+orbitNum; j++) {
                let isInMatrix = (i >= 0 && i < row) && (j >= 0 && j < col);
                if (!isInMatrix) {
                    continue;
                }

                let newOrbit = !((i >= x-orbitNum+1 && i <= x+orbitNum-1) &&
                                 (j >= y-orbitNum+1 && j <= y+orbitNum-1));
                if (newOrbit){
                    matrix[i][j] = orbitNum + 1;
                }
            }
        }
        orbitNum++;

        if (checkMatrix()){
            break;
        }
    }

    return matrix.map(r => r.join(` `)).join(`\n`)
}


console.log(createStarOrbit([`4 4`,`0 0`]));
console.log(`-`.repeat(30))
console.log(createStarOrbit([`5 5`,`2 2`]));
console.log(`-`.repeat(30))
console.log(createStarOrbit([`3 3`,`2 2`]));
console.log(`-`.repeat(30))
console.log(createStarOrbit([`6 11`,`-1 5`]));

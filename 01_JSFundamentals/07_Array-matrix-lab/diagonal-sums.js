
function findDiagonalSum(arr) {
    let matrix = [];
    for (let x of arr){
        matrix.push(x.split(` `).map(Number))
    }

    let rightDiagSum = matrix.map((x,i) => matrix[i][i]).reduce((a,b) => a+b);
    let leftDiagSum = matrix.map((x,i) => matrix[i][matrix.length-1-i]).reduce((a,b) => a+b);

    console.log(rightDiagSum, leftDiagSum)
}

findDiagonalSum(['20 40','10 60']);
findDiagonalSum(['3 5 17','-1 7 14','1 -8 89']);
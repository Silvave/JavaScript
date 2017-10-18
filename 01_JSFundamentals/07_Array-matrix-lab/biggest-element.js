
function biggestNum(arr) {
    // let matrix = arr.map(row => row.split(` `).map(Number));
    //
    // let result = matrix.reduce((a,b) => a.concat(b));
    //
    // console.log(Math.max.apply( Math, result ))

    console.log(Math.max.apply(Math, arr.join(` `).split(` `).map(Number)))
}

biggestNum(['20 50 10','8 33 145']);
biggestNum(['3 5 7 12','-1 4 33 2','8 3 0 4']);
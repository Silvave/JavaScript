
function prindOddIdxNums(arr) {
    // arr = arr.map(Number);
    //
    // let result = [];
    // arr.forEach((x,i) => i % 2 == 1 ? result.push(x*2) : false);

    console.log(arr.map(Number).filter((x,i) => i % 2 != 0).map(x => x*2).reverse().join(` `))
}

prindOddIdxNums(['10', '15', '20', '25']);
prindOddIdxNums(['3', '0', '10', '4', '7', '3']);
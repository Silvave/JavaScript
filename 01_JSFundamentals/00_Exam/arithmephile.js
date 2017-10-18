function findBiggestProduct(arr) {
    let arrNums = arr.map(Number);

    let winnerInter = [];

    for (let i = 0; i < arrNums.length; i++){
        let num = arrNums[i];

        if (num > 0 && num < 10 && i !== arrNums.length - 1){
            let start = i + 1
            let end = i + 1 + num

            let sum = arrNums.slice(start, end).reduce((a, b) => a * b);

            winnerInter.push(sum);
        }
    }

    console.log(Math.max.apply(null, winnerInter))
}

findBiggestProduct([`2`,`1`]);
console.log(`-`.repeat(30));
findBiggestProduct([
    `0`,
    `1`,
    `3`,
    `10000`]);
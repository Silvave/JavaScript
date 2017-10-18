
function extractNums(arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    let result = arr.map(Number).filter(x => x >= biggestNum ? [biggestNum=x] : false);

    // arr = arr.map(Number);
    // let result = [];
    // for (let num of arr){
    //     if (num >= biggestNum ){
    //         result.push(num);
    //         biggestNum = num;
    //     }
    // }
    return result.join(` `)
}

// For Judge - one line
// ( arr, biggestNum = Number.NEGATIVE_INFINITY ) => arr.map(Number).filter( x => x >= biggestNum ? [biggestNum=x] : null ).join(`\n`)

console.log(extractNums([`-2`,`-1`,``,`0`,`2`,`3`,`3`,`2`,`8`, null,`asdasdas`,`3`,`10`,`12`,`3`,`24`]));
console.log(extractNums([`0`,`0`,`0`,`0`,`0`,`0`,`0`]));
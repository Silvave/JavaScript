
function expressionSplit(arr) {
    let expression = arr[0];
    let elems = expression.split(/[\s.();,]+/).filter(x => x !== ``);
    console.log(elems.join(`\n`))
}

expressionSplit(['let sum = 4 * 4,b = "wow";']);
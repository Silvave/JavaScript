
function processElem(arr) {
    let result = [];
    arr.map(Number).forEach(x => x < 0 ? result.unshift(x) : result.push(x));
    console.log(result.join(`\n`))
}

processElem(['3', '-2', '0',`-1`]);
//proccessElem(['3', '0','0','0', '1', '-1', `-2`,`-3`,`5`])
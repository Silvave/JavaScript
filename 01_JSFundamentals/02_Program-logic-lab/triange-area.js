
function triangeArea(params) {
    let [ a, b, c ] = params.map(Number)
    let sp = (a+b+c) / 2;
    return Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c));
}

console.log(triangeArea([`2`, `3.5`, `4`]));
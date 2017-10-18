
function distance2Points(params) {
    let [ x1, y1, x2, y2 ] = params.map(Number);
    let a = x1-x2;
    let b = y1-y2;
    return Math.sqrt( a*a + b*b )
}

console.log(distance2Points(['2','4','5','0']));
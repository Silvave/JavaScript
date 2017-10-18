
function checkPoints(arr) {
    let [ x1, y1, x2, y2 ] = arr.map(Number);

    function checkDistance(xF, xS, yF, yS) {
        let a = xF - xS;
        let b = yF - yS;

        let c = Math.sqrt(a*a+b*b);

        if ( Number.isInteger(c)){
            console.log(`{${xF}, ${yF}} to {${xS}, ${yS}} is valid`)
        } else {
            console.log(`{${xF}, ${yF}} to {${xS}, ${yS}} is invalid`)
        }
    }

    checkDistance(x1,0,y1,0);
    checkDistance(x2,0,y2,0);
    checkDistance(x1,x2,y1,y2);
}

checkPoints(['2','1','1','1']);
console.log(`-`.repeat(40))
checkPoints(['3','0','0','4']);
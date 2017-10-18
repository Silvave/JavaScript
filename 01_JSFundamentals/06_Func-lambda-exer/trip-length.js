
function tripLength(arr) {
    arr = arr.map(Number);

    let firstPoint = arr.slice(0,2),
        secondPoint = arr.slice(2,4),
        thirdPoint = arr.slice(4,6);

    function checkDistance([x1, y1],[x2, y2]) {
        let a = x1 - x2;
        let b = y1 - y2;

        return Math.sqrt(a*a + b*b)
    }

    let first = checkDistance(firstPoint, secondPoint);
    let second = checkDistance(secondPoint, thirdPoint);
    let third = checkDistance(firstPoint, thirdPoint);

    let [ f, s, t ] = [ [`1`, first+second],[`2`,second+third],[`3`,third+first] ].sort((a,b) => a[1]-b[1]);

    if (f[0] == `1`){
        console.log(`1->2->3: ${f[1]}`)
    } else if (f[0] == `2`){
        console.log(`1->3->2: ${f[1]}`)
    } else {
        console.log(`2->1->3: ${f[1]}`)
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
console.log(`-`.repeat(40));
tripLength([5, 1, 1, 1, 5, 4]);
console.log(`-`.repeat(40));
tripLength([-1, -2, 3.5, 0, 0, 2]);

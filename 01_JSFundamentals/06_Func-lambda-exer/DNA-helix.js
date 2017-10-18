
function printDNAHelix([num]) {
    num = Number(num);

    let helixSeq = `ATCGTTAGGG`.split(``);

    let count = 2;
    let index = 0;
    for (let i = 0; i < num; i++) {
        let countDashes = 6 - ((count*2)+2);
        let dashes = `-`.repeat(countDashes);
        let stars = `*`.repeat(count);

        let [ x, y ] = helixSeq.slice(index, index+=2);
        console.log(`${stars}${x}${dashes}${y}${stars}`);

        index %= 10;
        if (i % 4 < 2) count--;
        else count++;
    }
}

printDNAHelix([`10`]);
console.log(`-`.repeat(40));
printDNAHelix([`4`]);
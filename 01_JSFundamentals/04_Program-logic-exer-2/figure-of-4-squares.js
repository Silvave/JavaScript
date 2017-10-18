
function printFigure([num]) {
    num = Number(num);
    if (!(num >= 2 && num <= 200)){
        return
    }

    let repeatPlus = `-`.repeat(num-2);
    let repeatSpace = ` `.repeat(num-2);
    let verticalLines = num % 2 === 0 ? num / 2 - 2 : num / 2 - 1;
    verticalLines = Math.floor(verticalLines);

    if(num === 2)
        return console.log(`+${repeatPlus}+${repeatPlus}+`);

    console.log(`+${repeatPlus}+${repeatPlus}+`);
    for (let i = 0; i < verticalLines; i++) {
        console.log(`|${repeatSpace}|${repeatSpace}|`)
    }
    console.log(`+${repeatPlus}+${repeatPlus}+`);
    for (let i = 0; i < verticalLines; i++) {
        console.log(`|${repeatSpace}|${repeatSpace}|`)
    }
    console.log(`+${repeatPlus}+${repeatPlus}+`);
}

printFigure([`2`]);
printFigure([`3`]);
printFigure([`4`]);
printFigure([`5`]);
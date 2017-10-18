
function solution([n]) {
    let outside = 2 * n - 1;
    console.log(`${".".repeat(outside)}/|\\${".".repeat(outside)}`);
    console.log(`${".".repeat(outside)}\\|/${".".repeat(outside)}`);

    let dash = 0;
    for (let i = 0; i < 2 * n; i++)
    {
        let outsideDots = ".".repeat(outside);
        let insideDashes = "-".repeat(dash);
        console.log(`${outsideDots}*${insideDashes}*${insideDashes}*${outsideDots}`);
        dash++;
        outside--;
    }

    console.log(`${"*".repeat(4 * n + 1)}`);
    let middleRow = "*" + ".*".repeat(2*n);
    console.log(middleRow);
    console.log(`${"*".repeat(4 * n + 1)}`);
}

solution([7]);
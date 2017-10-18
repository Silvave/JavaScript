
function printBill(input) {
    let items = input.filter(x => !Number(x));
    let sum = input.filter(x => Number(x))    .map(Number)    .reduce((a,b) => a + b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}

printBill(['Cola','1.35', 'Pancakes', '2.88']);

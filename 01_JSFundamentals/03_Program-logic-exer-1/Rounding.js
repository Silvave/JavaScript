roundNumber([3.11111111111111111111111111111, 30]);
function roundNumber([num, precisionNumber]) {
    let dot = num.toString().indexOf('.');
    let floatPointLength = num.toString().substr(dot+1);

    if (precisionNumber > 15) {
        precisionNumber = 15;
    }

    if (floatPointLength.length <= precisionNumber) {
        console.log(Number(num))
    } else {
        console.log(Number(num).toFixed(precisionNumber))
    }
}
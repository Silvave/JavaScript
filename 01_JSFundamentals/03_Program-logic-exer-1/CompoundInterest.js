compoundInterest([100000, 5, 12, 25]);

function compoundInterest([pSum, interest, cFrequency, timeLengthYears]) {
    let countOfPeriodsInYear = 12 / Number(cFrequency);
    let periodsLength = countOfPeriodsInYear * timeLengthYears;
    let interestInPerc = interest/100;
    let x = 1 + interestInPerc/countOfPeriodsInYear;

    let totalAccValue = Number(pSum) * Math.pow(x, periodsLength);

    console.log(totalAccValue.toFixed(2))
}
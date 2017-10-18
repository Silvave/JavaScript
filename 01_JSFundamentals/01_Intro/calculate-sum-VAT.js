
function calculateSumAndVAT(arr) {
    let sum = arr.map(Number).reduce((a,b) => a+b,0)
    console.log(`sum = ${sum}`)
    console.log(`VAT = ${sum*0.20}`)
    console.log(`total = ${sum*1.20}`)
}

calculateSumAndVAT([`1.20`, `2.60`, `3.50`]);
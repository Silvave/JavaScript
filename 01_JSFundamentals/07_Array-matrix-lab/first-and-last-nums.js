
function printFirstLastNums(arr) {
    let k = Number(arr.shift())
    let firstKElem = arr.slice(0,k).join(` `)
    let lastKElem = arr.slice(arr.length-k,arr.length).join(` `)

    console.log(`${firstKElem}\n${lastKElem}`)
}

printFirstLastNums(['2','7', '8', '9']);
console.log(`-`.repeat(30))
printFirstLastNums(['3','6', '7', '8', '9']);
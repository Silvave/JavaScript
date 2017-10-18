
function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num)
    }

    return sum
    // return arr.length > 0 ? arr.map(Number).reduce((a,b) => a+b) : 0;
}

console.log(sum([1, 2 ,3]));

module.exports = { sum };
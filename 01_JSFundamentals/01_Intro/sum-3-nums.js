
function sum3Nums(arr) {
    return arr.map(Number).reduce((a,b) => a+b, 0)
}
console.log(sum3Nums([`1`, `2`, `5`, `5`, `-7`, `-8`]));
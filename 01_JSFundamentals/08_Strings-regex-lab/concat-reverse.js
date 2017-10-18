
function concatReverse(arr) {
    // let result = ``
    // for (let str of arr){
    //     result += str.split(``).reverse().join(``)
    // }
    // return result
    return arr.map(x => x.split(``).reverse().join(``)).reverse().join(``)
}

console.log(concatReverse(['I', 'am', 'student']))
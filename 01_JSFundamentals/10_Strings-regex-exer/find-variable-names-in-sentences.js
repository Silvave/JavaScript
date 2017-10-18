
function findVarNames(arr) {
    let filteredStr = arr.map(str => str.match(/\b_[A-Za-z0-9]+\b/g).filter(x => x).map(row => row.replace(`_`, ``)));

    return filteredStr.map(row => row.join()).join()
}

console.log(findVarNames([`The _id `,`and _age variables are both integers.`]));
console.log(findVarNames([`__invalidVariable _evenMoreInvalidVariable_ _validVariable`]));
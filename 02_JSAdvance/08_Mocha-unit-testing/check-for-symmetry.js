
function checkSymmetry(arr) {
    if (!Array.isArray(arr))
        return false;
    let reversedArr = arr.slice(0).reverse();

    return JSON.stringify(reversedArr) == JSON.stringify(arr)
}

console.log(checkSymmetry([-1,2,1]));

module.exports = { checkSymmetry };
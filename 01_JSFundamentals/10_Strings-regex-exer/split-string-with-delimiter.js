
function splitStr([str, delimiter]) {
    return str.split(delimiter).join(`\n`)
}

console.log(splitStr([`One-Two-Three-Four-Five` ,`-`]));
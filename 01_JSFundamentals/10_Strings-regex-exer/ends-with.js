
function isStrEndsWith([str, strToCheck]) {
    return str.endsWith(strToCheck)
}

console.log(isStrEndsWith([`This sentence ends with fun?`, `fun`]));
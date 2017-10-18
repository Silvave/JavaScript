
function isStrInStr([strMain, strToCheck]) {
    return strMain.startsWith(strToCheck)
}

console.log(isStrInStr([`The quick brown fox…`,`The quick brown fox…`]));

function isPalindrome([str]) {
    let checkStr = true;
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] != str[str.length - i - 1]) {
            checkStr = false;
            break
        }
    }
    return checkStr
}

console.log(isPalindrome([`hlalh`]));